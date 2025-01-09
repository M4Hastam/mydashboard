"use client";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home, Inbox, Logs, Search, Sparkles } from "lucide-react";

const navMain = [
  {
    title: "Home",
    url: "#",
    icon: Home,
    isActive: true,
  },
  {
    title: "Tasks",
    url: "#",
    icon: Logs,
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
