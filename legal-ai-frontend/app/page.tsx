"use client";

import { useState, useEffect, useRef } from "react";
import Topbar from "./components/Topbar";
import Smallbar from "./components/Smallbar";
import Features from "./components/Features";
import CaseBar from "./components/Casebar";
import Querybar from "./components/Querybar";
import ChatMessage from "./components/ChatMessage";

export default function ChatPage() {
  return (
    <div className="bg-[#202020]">
      <div className="min-h-screen flex flex-col">
        <Topbar />
        <Smallbar />
        {/* <CaseBar />
      <Features /> */}
        <div className="flex-grow overflow-hidden px-24 py-2">
          <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#3B3B3B] scrollbar-track-[#202020]">
            <ChatMessage key="1" user="You" text="hahahahahaha" />
          </div>
        </div>
        <div className="sticky bottom-0">
          <Querybar />
        </div>
      </div>
    </div>
  );
}
