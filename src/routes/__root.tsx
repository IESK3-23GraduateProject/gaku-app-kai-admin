import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import SideLayout from '@/components/sideLayout'

export const Route = createRootRoute({
  component: () => (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <SideLayout />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {/* Pages here */}
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>

      <TanStackRouterDevtools />
    </>
  ),
});
