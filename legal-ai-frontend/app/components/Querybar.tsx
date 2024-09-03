import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { messagestype, useChat } from "@/context/chatcontext";
import axios from "axios";

interface QuerybarProps {
  setchatloading: (value: boolean) => void;
}

export default function Querybar({ setchatloading }: QuerybarProps) {
  const [inputValue, setInputValue] = useState("");
  const [query, setquery] = useState("");
  const { casename, setmessages, messages } = useChat();
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const sendQueryToBackend = async (query: string) => {
    setchatloading(true);
    try {
      const response = await axios.post(
        "https://dummyjson.com/c/a3c1-689b-4d7d-8d88",
        {
          query: query,
          case_name: casename,
        }
      );
      if (response.data) {
        const resmsg = {
          user: "bot",
          text: response.data.answer,
        } as messagestype;
        setchatloading(false);
        setmessages((prevmessage: messagestype[]) => [...prevmessage, resmsg]);
      } else {
        const resmsg = { user: "bot", text: "Failed to fetch data" };
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
    <div className="p-8 text-white">
      <div className="flex items-center bg-[#3B3B3B] px-6 py-4 rounded-3xl">
        <img src="./emblem-white.png" className="w-[3%]"></img>
        <Input
          type="text"
          placeholder="Enter your Query about case"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className="bg-transparent text-white ml-1 font-semibold text-md border-none focus-visible:outline-none focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:text-[#a7a7a7] flex-grow "
        />
        <Button
          className=" bg-green-600 rounded-xl hover:bg-green-700"
          onClick={handleButtonClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
