import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useCheckAcceptRules from "./hooks/customhook/useCheckAcceptRules";

export default function PrivateChat() {
  useCheckAcceptRules();
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there!", sender: "other" },
    { id: 2, text: "Hi! How are you?", sender: "user" },
    { id: 3, text: "I'm doing great, thanks for asking!", sender: "other" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");

    // Simulate a response after a short delay
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "Thanks for your message! This is a simulated response.",
        sender: "other",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen    ">
      <ScrollArea className="flex-grow p-6">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-end ${
                  message.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src={
                      message.sender === "user"
                        ? "/user-avatar.png"
                        : "/bot-avatar.png"
                    }
                  />
                  <AvatarFallback>
                    {message.sender === "user" ? "U" : "B"}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`max-w-xs mx-2 p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <footer className=" p-4 border-t  sticky bottom-0 bg-secondary dark:bg-background">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow   "
          />
          <Button type="submit" variant="secondary">
            Send
          </Button>
        </form>
      </footer>
    </div>
  );
}
