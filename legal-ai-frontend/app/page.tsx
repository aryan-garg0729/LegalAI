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
    <div className="bg-[#202020] h-screen">
      <Topbar />
      <Smallbar />
      {/* <CaseBar />
      <Features /> */}
      <Querybar />
    </div>
  );
}
