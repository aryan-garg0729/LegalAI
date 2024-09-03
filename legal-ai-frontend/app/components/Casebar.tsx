import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useChat } from "@/context/chatcontext";

export default function CaseBar() {
  const [inputValue, setInputValue] = useState("");
  const { setchatting, casename, setcase, setloading, setmessages, messages } =
    useChat();
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const sendQueryToBackend = async (query: string, caseNameToSend: string) => {
    setloading(true);
    const usrmsg = { user: "You", text: caseNameToSend };
    const arr = [];
    arr.push(usrmsg);
    try {
      const response = await axios.post(
        "/api/chat",
        {
          query: query,
          case_name: caseNameToSend,
        }
      );

      if (response.data) {
        const resmsg = { user: "bot", text: response.data.answer };
        arr.push(resmsg);
        setmessages([...messages, ...arr]);
        setchatting(true);
      } else {
        const resmsg = { user: "bot", text: "Failed to fetch data" };
        console.log("Failed to fetch data");
        arr.push(resmsg);
        setmessages([...messages, ...arr]);
      }
    } catch (error) {
      console.error("Error calling the API:", error);
    } finally {
      setloading(false);
    }
  };

  const handleButtonClick = () => {
    if (!casename) {
      setcase(inputValue);
      console.log("Button clicked with input:", inputValue);
      sendQueryToBackend("What is this case?", inputValue);
    } else {
      console.log("Button clicked with input:", inputValue);
      sendQueryToBackend(inputValue, casename);
    }
    setInputValue("");
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      if (!casename) {
        setcase(inputValue);
        console.log("Enter pressed with input:", inputValue);
        sendQueryToBackend("What is this case?", inputValue);
      } else {
        console.log("Enter pressed with input:", inputValue);
        sendQueryToBackend(inputValue, casename);
      }
      setInputValue("");
    }
  };

  return (
    <div className="px-12 py-4">
      <div className="flex items-center bg-[#3B3B3B] px-8 py-6 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-white pr-1"
        >
          <path
            fill-rule="evenodd"
            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
            clip-rule="evenodd"
          />
          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </svg>

        <span className="text-white font-semibold">Case</span>
        <Input
          type="text"
          placeholder="Enter here..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className="bg-transparent text-white ml-1 font-semibold text-md border-none focus-visible:outline-none focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:text-[#a7a7a7] flex-grow "
        />
        <Button
          className=" bg-green-600 rounded-lg hover:bg-green-700"
          onClick={handleButtonClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4"
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
