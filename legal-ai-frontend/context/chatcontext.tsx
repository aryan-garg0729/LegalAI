"use client";

import React, { createContext, useState, ReactNode } from "react";
import { useContext } from "react";
interface ChatContextType {
  ischatting: boolean;
  setchatting: (value: boolean) => void;
  isloading: boolean;
  setloading: (value: boolean) => void;
}

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [ischatting, setchatting] = useState<boolean>(false);
  const [isloading, setloading] = useState<boolean>(false);

  return (
    <ChatContext.Provider
      value={{ ischatting, setchatting, isloading, setloading }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }

  return context;
};
