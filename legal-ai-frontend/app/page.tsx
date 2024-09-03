"use client";

import { useEffect, useRef, useState } from "react";
import Topbar from "./components/Topbar";
import Smallbar from "./components/Smallbar";
import Features from "./components/Features";
import CaseBar from "./components/Casebar";
import { Skeleton } from "@/components/ui/skeleton";
import Querybar from "./components/Querybar";
import ChatMessage from "./components/ChatMessage";
import { useChat } from "@/context/chatcontext";

export default function ChatPage() {
  const { ischatting, isloading, messages } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [chatloading, setchatloading] = useState(false);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const setchatload = (val: boolean) => {
    setchatloading(val);
  };

  return (
    <div className="h-screen bg-[#202020] flex flex-col">
      <div className="flex-none">
        <Topbar />
        {/* Chatting */}
        {ischatting ? (
          <Smallbar />
        ) : isloading ? (
          <div className="flex justify-center items-center pt-32">
            <div className="flex flex-col gap-3">
              <div className="flex justify-center items-center gap-3 text-[#878787] pb-6">
                <span className=" font-semibold text-xl">Loading</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-loader-2 animate-spin"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 3a9 9 0 1 0 9 9" />
                </svg>
              </div>
              <Skeleton className="h-8 w-[750px]" />
              <Skeleton className="h-10 w-[1000px]" />
              <Skeleton className="h-6 w-[250px]" />
              <Skeleton className="h-8 w-[550px]" />
            </div>
          </div>
        ) : (
          <>
            <CaseBar />
            <Features />
          </>
        )}
      </div>

      {ischatting ? (
        <>
          <div className="flex-grow overflow-y-auto px-8 py-2">
            {/* Chatting */}
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#3B3B3B] scrollbar-track-[#202020]">
              {messages.map((msg, index) => (
                <ChatMessage key={index} user={msg.user} text={msg.text} />
              ))}
              {chatloading ? (
                <>
                  <Skeleton className="h-8 w-[550px] mx-7 my-3" />
                  <Skeleton className="h-8 w-[750px] mx-7 my-3" />
                  <Skeleton className="h-8 w-[350px] mx-7 my-3" />
                </>
              ) : (
                <></>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>
          {/* Querybar */}
          <div className="flex-none">
            <Querybar setchatloading={setchatload} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
