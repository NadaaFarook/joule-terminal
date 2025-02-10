"use client";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Logo from "@/assets/logo";
import {
  AgentIcon,
  ChatIcon,
  DiscordIcon,
  PortfolioIcon,
  TelegramIcon,
  TwitterIcon,
  WalletIcon,
} from "@/assets/icons";
import { Button } from "../ui/button";
import Link from "next/link";
import WalletConnector from "@/app/components/wallet-connector";

const buttons = [
  {
    title: "Chat",
    url: "/",
    isActive: true,
    icon: ChatIcon,
  },
  {
    title: "Portfolio",
    url: "/about",
    isActive: false,
    icon: PortfolioIcon,
  },
  {
    title: "Agents",
    url: "/services",
    isActive: false,
    icon: AgentIcon,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex flex-row justify-between items-center px-5 py-4 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center border-b border-[#E5E7EB]">
        <Logo className="group-data-[collapsible=icon]:hidden" />
        <SidebarTrigger className="size-[14px] group-data-[collapsible=icon]:p-3" />
      </SidebarHeader>
      <SidebarContent className="px-5 py-4 gap-0 group-data-[collapsible=icon]:hidden">
        <SidebarMenu className="gap-2">
          {buttons.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={item.isActive}
                className="p-2 rounded-[8px] h-auto border border-transparent data-[active=true]:border-[#E5E7EB] bg-transparent data-[active=true]:bg-white hover:bg-[#F9FAFB] transition-colors"
              >
                <div className="flex items-center gap-3 text-[15px] font-medium">
                  <item.icon className="size-5" />
                  {item.title}
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <Button
          className="rounded-xl w-full bg-[#FF5B14] hover:bg-[#FF5B14]/90 h-11 gap-2 text-[15px] font-medium mt-auto"
          onClick={() => setIsWalletModalOpen(true)}
        >
          <WalletIcon className="fill-white size-6" />
          Connect Wallet
        </Button>

        <div className="flex w-full mt-8 justify-between items-center">
          <div className="flex gap-4">
            <Link
              href="https://twitter.com"
              className="text-[#64748B] hover:text-[#64748B]/80"
            >
              <TwitterIcon className="size-4" />
            </Link>
            <Link
              href="https://t.me"
              className="text-[#64748B] hover:text-[#64748B]/80"
            >
              <TelegramIcon className="size-4" />
            </Link>
            <Link
              href="https://discord.com"
              className="text-[#64748B] hover:text-[#64748B]/80"
            >
              <DiscordIcon className="size-4" />
            </Link>
          </div>
          <Link
            href="https://t.me"
            className="text-[13px] text-[#64748B] hover:text-[#64748B]/80"
          >
            Get Help
          </Link>
        </div>
      </SidebarContent>
      <SidebarRail />
      <WalletConnector
        isOpen={isWalletModalOpen}
        setIsOpen={setIsWalletModalOpen}
      />
    </Sidebar>
  );
}
