"use client";

import { cn } from "@/lib/utils";
import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import { ModelSelector } from "./modal-selector";
import { WelcomeScreen } from "./welcome-screen";
import { useEffect, useRef, useState } from "react";
import { AutoResizeTextarea } from "./autoresize-textarea";
import type React from "react";
import { ArrowRightIcon } from "@/assets/icons";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function ChatForm({ className, ...props }: React.ComponentProps<"div">) {
  const [selectedModel, setSelectedModel] = useState("openai");
  const { messages, input, setInput, append, isLoading } = useChat({
    api: "http://localhost:3000",
    streamProtocol: "text",
  });

  const scrollToBottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollToBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    void append({ content: input, role: "user" });
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  const loader = (
    <span className="inline-block size-2 ml-0.5 align-middle bg-[#363853] animate-pulse duration-1000 rounded-full" />
  );

  const renderMessageContent = ({
    message,
    isLastMessage,
  }: {
    message: { role: string; content: string };
    isLastMessage: boolean;
  }) => {
    const isAssistantAndLoading =
      message.role === "assistant" && isLoading && isLastMessage;

    return (
      <pre
        className={cn(
          "rounded-2xl p-3 max-w-[70%] text-[#363853] text-[14px] font-medium leading-[24px] prose",
          message.role === "user" ? "bg-[#F3F3F3]" : "p-0"
        )}
      >
        {message.content}
        {isAssistantAndLoading && loader}
      </pre>
    );
  };

  return (
    <div
      className={cn(
        "flex h-full flex-col bg-white max-w-2xl mx-auto justify-center w-full max-h-screen transition-all duration-1000 ease-in-out",
        className
      )}
      {...props}
    >
      {messages.length === 0 ? (
        <WelcomeScreen setInput={setInput} />
      ) : (
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-6 py-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex w-full gap-3",
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start items-start"
                )}
              >
                {message.role === "assistant" && (
                  <Image
                    src="/logos/mascot.svg"
                    alt="Mascot"
                    width={24}
                    height={24}
                  />
                )}

                {renderMessageContent({
                  message,
                  isLastMessage: index === messages.length - 1,
                })}
              </div>
            ))}
            {isLoading &&
              messages[messages.length - 1].role !== "assistant" && (
                <div className="flex w-full gap-3 justify-start items-center">
                  <Image
                    src="/logos/mascot.svg"
                    alt="Mascot"
                    width={24}
                    height={24}
                  />
                  {loader}
                </div>
              )}
          </div>
          <div ref={scrollToBottomRef} />
        </div>
      )}

      <div
        className={cn(
          "transition-all duration-1000 ease-in-out",
          messages.length == 0 ? "py-5" : "pb-5"
        )}
      >
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col items-start gap-2 rounded-2xl bg-[#F8F8F8] border border-[#EEE] p-3"
        >
          <div className="relative flex w-full flex-1">
            <AutoResizeTextarea
              onKeyDown={handleKeyDown}
              onChange={(e) => setInput(e)}
              value={input}
              placeholder="Ask anything..."
              className="w-full bg-transparent focus:outline-none text-[14px] font-medium leading-normal placeholder:text-[#606060]"
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isLoading}
              className="rounded-lg bg-[#FF5B14] hover:bg-[#FF5B14]/90 disabled:opacity-50 size-6 shadow-none"
            >
              <ArrowRightIcon className="w-2.5" />
            </Button>
          </div>

          <ModelSelector
            selectedModel={selectedModel}
            onModelSelect={setSelectedModel}
          />
        </form>
      </div>
    </div>
  );
}
