"use client";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ContactRound, Home, ListCheck, Logs, MessagesSquare, Pyramid, Users } from "lucide-react";

const navMain = [
  {
    title: "Rules",
    url: "#",
    icon: Pyramid,
    isActive: true,
  },
  {
    title: "Users",
    url: "#",
    icon: Users ,
    badge: "10",
  },
  {
    title: "Users Messages",
    url: "#",
    icon: MessagesSquare  ,
    badge: "10",
  },
]

export function NavMain({
  items
}) {
  return (
    (<SidebarMenu>
      {navMain.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={item.isActive}>
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>)
  );
}
