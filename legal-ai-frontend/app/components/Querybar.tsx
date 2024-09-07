import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { messagestype, useChat } from "@/context/chatcontext";
import axios from "axios";

interface QuerybarProps {
  setchatloading: (value: boolean) => void;
}

export default function Querybar({ setchatloading }: QuerybarProps) {
  const { lang } = useChat();
  const [inputValue, setInputValue] = useState("");
  const [query, setquery] = useState("");
  const { casename, setmessages } = useChat();
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const sendQueryToBackend = async (query: string) => {
    setchatloading(true);
    try {
      const response = await axios.post("/api/chat", {
        query: query,
        case_name: casename,
        lang: lang,
      });
      if (response.data) {
        const resmsg = {
          user: "Legal-AI Bot",
          text: response.data.answer,
        } as messagestype;
        setchatloading(false);
        setmessages((prevmessage: messagestype[]) => [...prevmessage, resmsg]);
      } else {
        const resmsg = { user: "Legal-AI Bot", text: "Failed to fetch data" };
        console.log("Failed to fetch data");
        setchatloading(false);
        setmessages((prevmessage: messagestype[]) => [...prevmessage, resmsg]);
      }
    } catch (error) {
      console.error("Error calling the API:", error);
    }
  };

  const handleButtonClick = () => {
    setquery(inputValue);
    const usrmsg = { user: "You", text: inputValue };
    setmessages((prevmessage: messagestype[]) => [...prevmessage, usrmsg]);
    sendQueryToBackend(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      setquery(inputValue);
      const usrmsg = { user: "You", text: inputValue };
      setmessages((prevmessage: messagestype[]) => [...prevmessage, usrmsg]);
      sendQueryToBackend(inputValue);
      setInputValue("");
    }
  };
  return (
    <div className="p-8 flex items-center justify-center text-white">
      <div className="flex items-center bg-[#3B3B3B] px-5 py-3 rounded-full max-w-[90%]">
        <img src="./emblem-white.png" className="w-[3%]"></img>
        <Input
          type="text"
          placeholder="Enter your Query about case"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className="bg-transparent text-white ml-1  text-md border-none focus-visible:outline-none focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:text-[#c6c6c6] flex-grow "
        />
        <Button
          className="bg-transparent w-10 h-10 p-0 m-0 hover:bg-transparent hover:text-gray-300"
          onClick={handleButtonClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-12"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
              clip-rule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
