import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import UserSidebar from "./user-sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <UserSidebar />
      </SidebarContent>
    </Sidebar>
  );
}
