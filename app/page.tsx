import { AppSidebar } from "@/components/layout/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ChatForm } from "./components/chat-form";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-white">
        <ChatForm />
      </SidebarInset>
    </SidebarProvider>
  );
}
