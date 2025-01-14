"use client";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MessagesSquare, Pyramid, Users } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const navMain = [
  {
    title: "Rules",
    url: "termsblog",
    icon: Pyramid,
    isActive: false,
  },
  {
    title: "Users",
    url: "users",
    icon: Users,
    badge: "10",
  },
  {
    title: "Users Messages",
    url: "chat",
    icon: MessagesSquare,
    badge: "10",
  },
];

export function NavMain() {
  return (
    <SidebarMenu>
      {navMain.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={item.isActive}>
            <Link to={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
