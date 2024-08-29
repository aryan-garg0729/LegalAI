"use client";

import { useState, useEffect, useRef } from "react";
import Topbar from "./components/Topbar";
import CaseBar from "./components/Casebar";
import Features from "./components/Features";

export default function ChatPage() {
  return (
    <div className="bg-[#202020] h-screen">
      <Topbar />
      <CaseBar />
      <Features />
    </div>
  );
}
