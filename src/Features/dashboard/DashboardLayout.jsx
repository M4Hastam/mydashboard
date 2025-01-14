import { ModeToggle } from "@/Features/ThemeProvider/ModeToggle";
import { AppSidebar } from "@/Features/dashboard/app-sidebar";
import { NavActions } from "@/Features/dashboard/nav-actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import useStatusTokenHardRefresh from "@/hooks/customhook/useStatusTokenHardRefresh";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";

export default function DashboardLayout() {
  const navigate = useNavigation();
  const { toast } = useToast();
  useStatusTokenHardRefresh("/");
  const { acceptrules } = useSelector((state) => state.auth);
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn && user && acceptrules === false) {
      toast({
        title: "access the content",
        description: "please read and accept the terms and conditions",
      });
      return;
    }
  }, [acceptrules, isLoggedIn, user, toast]);

  return isLoggedIn && user ? (
    <SidebarProvider>
      {acceptrules && <AppSidebar />}
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 sticky top-0 z-10 bg-white/30 dark:bg-background/30 backdrop-blur-md border-b border-gray-200/20">
          <div className="flex flex-1 items-center gap-2 px-3">
            {acceptrules && (
              <>
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />
              </>
            )}
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    {!acceptrules
                      ? "You do not have permission to access the content"
                      : ""}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto px-3">
            <NavActions />
          </div>
        </header>
        {navigate.state === "loading" ? "Please Wait" : <Outlet />}
      </SidebarInset>
    </SidebarProvider>
  ) : (
    <h1>Loading ..</h1>
  );
}
