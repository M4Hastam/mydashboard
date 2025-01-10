'use client'

import { useState, useEffect } from 'react'
import { Send } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

const messageAnimation = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default function PrivateChat() {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    setMessages([
      { id: 1, sender: 'John', content: 'Hey, how are you?', timestamp: new Date(2023, 3, 15, 10, 30) },
      { id: 2, sender: 'You', content: 'Im doing great! How about you?', timestamp: new Date(2023, 3, 15, 10, 32) },
      { id: 3, sender: 'John', content: 'Im good too. Did you finish the project?', timestamp: new Date(2023, 3, 15, 10, 33) },
      { id: 4, sender: 'You', content: 'Yes, I just submitted it. How about yours?', timestamp: new Date(2023, 3, 15, 10, 35) },
    ])
  }, [])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage.trim(),
        timestamp: new Date(),
        isNew: true
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    
      // Remove the 'isNew' flag after animation
      setTimeout(() => {
        setMessages(prevMessages =>
          prevMessages.map(msg =>
            msg.id === newMsg.id ? { ...msg, isNew: false } : msg
          )
        );
      }, 500);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="w-full max-w-2xl h-full max-h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col overflow-hidden">
        <ScrollArea className="flex-grow p-4">
          <style>{messageAnimation}</style>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'} mb-4`}
              style={{
                animation: message.isNew ? 'slideIn 0.3s ease-out forwards' : 'none',
              }}
            >
              <div className={`flex ${message.sender === 'You' ? 'flex-row-reverse' : 'flex-row'} items-end`}>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={message.sender === 'You' ? "/placeholder-avatar-you.jpg" : "/placeholder-avatar.jpg"} alt={message.sender} />
                  <AvatarFallback>{message.sender[0]}</AvatarFallback>
                </Avatar>
                <div className={`mx-2 ${message.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'} rounded-lg py-2 px-4 max-w-xs transition-transform duration-200 ease-out hover:scale-105`}>
                  <p>{message.content}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="p-4 border-t dark:border-gray-700">
          <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex space-x-2">
            <Input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">
              <Send className="h-5 w-5" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

