import { Github, Linkedin, Twitter } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"


const members = [
    {
      id: 1,
      name: "Jane Doe",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=128&width=128",
      github: "https://github.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe",
      twitter: "https://twitter.com/janedoe"
    },
    {
      id: 2,
      name: "John Smith",
      role: "CTO",
      image: "/placeholder.svg?height=128&width=128",
      github: "https://github.com/johnsmith",
      linkedin: "https://linkedin.com/in/johnsmith"
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Lead Designer",
      image: "/placeholder.svg?height=128&width=128",
      linkedin: "https://linkedin.com/in/alicejohnson",
      twitter: "https://twitter.com/alicejohnson"
    },
    {
      id: 4,
      name: "Bob Williams",
      role: "Senior Developer",
      image: "/placeholder.svg?height=128&width=128",
      github: "https://github.com/bobwilliams",
      twitter: "https://twitter.com/bobwilliams"
    },
    {
      id: 5,
      name: "Emma Brown",
      role: "Marketing Manager",
      image: "/placeholder.svg?height=128&width=128",
      linkedin: "https://linkedin.com/in/emmabrown",
      twitter: "https://twitter.com/emmabrown"
    },
    {
      id: 6,
      name: "Michael Lee",
      role: "Product Manager",
      image: "/placeholder.svg?height=128&width=128",
      github: "https://github.com/michaellee",
      linkedin: "https://linkedin.com/in/michaellee"
    }
  ]

export default function MemberList() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div key={member.id} className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-6">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
              <p className="text-muted-foreground text-center mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                {member.github && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s GitHub`}>
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                {member.linkedin && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`}>
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                {member.twitter && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s Twitter`}>
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

