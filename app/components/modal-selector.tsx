"use client";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const models = [
  {
    id: "openai",
    name: "Open AI",
    icon: (
      <Image src="/logos/openai.png" alt="Open AI" width={16} height={16} />
    ),
  },
  {
    id: "anthropic",
    name: "Anthropic",
    icon: (
      <Image
        src="/logos/anthropic.png"
        alt="Anthropic"
        width={16}
        height={16}
      />
    ),
  },
];

export function ModelSelector({
  selectedModel,
  onModelSelect,
}: {
  selectedModel: string;
  onModelSelect: (model: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const selected = models.find((m) => m.id === selectedModel);

  return (
    <DropdownMenu onOpenChange={setOpen} open={open}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="gap-2 rounded-xl border border-[#EEEEEE] bg-white px-2.5 py-2 hover:bg-white"
        >
          <span className="flex items-center gap-2 text-[10px] font-semibold text-[#363853]">
            {selected?.icon}
            {selected?.name}
          </span>
          <ChevronDown
            className={cn(
              "size-3.5 text-[#363853] transition-all duration-300 ease-in-out",
              open ? "transform rotate-180" : "transform rotate-0"
            )}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="shadow-[0px_0px_12px_#0000000f] ring-0 rounded-xl border border-[#EEEEEE] min-w-0"
      >
        {models.map((model) => (
          <DropdownMenuItem
            key={model.id}
            onClick={() => onModelSelect(model.id)}
            className="flex items-center px-1.5 py-2 pr-4 gap-2 text-[10px] font-semibold text-[#363853] rounded-lg"
          >
            {model.icon} {model.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
