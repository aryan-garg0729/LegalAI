"use client";

import { StringToBoolean } from "class-variance-authority/types";
import React, { createContext, useState, ReactNode } from "react";
import { useContext } from "react";

export type messagestype = {
  user: string;
  text: string;
};

interface ChatContextType {
  ischatting: boolean;
  setchatting: (value: boolean) => void;
  isloading: boolean;
  setloading: (value: boolean) => void;
  casename: string;
  setcase: (value: string) => void;
  messages: messagestype[];
  setmessages: (
    value: messagestype[] | ((prevMessages: messagestype[]) => messagestype[])
  ) => void;
  lang: string;
  setlang: (value: string) => void;
}

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [ischatting, setchatting] = useState<boolean>(false);
  const [isloading, setloading] = useState<boolean>(false);
  const [casename, setcase] = useState<string>("");
  const [messages, setmessages] = useState<messagestype[]>([]);
  const [lang, setlang] = useState<string>("English");

  return (
    <ChatContext.Provider
      value={{
        ischatting,
        setchatting,
        isloading,
        setloading,
        casename,
        setcase,
        messages,
        setmessages,
        lang,
        setlang,
      }}
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
