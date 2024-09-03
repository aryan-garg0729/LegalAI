import { useChat } from "@/context/chatcontext";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Smallbar() {
  const { casename, setcase } = useChat();
  const [val, setval] = useState("");

  const handleInputChange = (e: any) => {
    setval(e.target.value);
  };

  const handlechange = () => {
    setcase(val);
  };

  return (
    <div className="flex justify-center items-center text-white">
      <div className="flex justify-center items-center gap-2 rounded-xl px-6 py-2 bg-[#3B3B3B]">
        <div>{casename}</div>
        <Dialog>
          <DialogTrigger>
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
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </DialogTrigger>
          <DialogContent className="bg-[#202020] text-white border-0">
            <DialogHeader>
              <DialogTitle className="border-0">Update/Change Case</DialogTitle>
              <DialogDescription className="text-[#7C7C7C]">
                Please enter the case you want to search about.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center">
              <Input
                type="text"
                placeholder="Enter here..."
                value={val}
                onChange={handleInputChange}
                className="border-0 focus-visible:ring-offset-0 ring-offset-0 text-black"
              ></Input>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  className="bg-[#292929] text-white hover:bg-[#2c2c2c]"
                >
                  Close
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  type="submit"
                  className="bg-[#D9D9D9] text-black hover:bg-[#c8c8c8]"
                  onClick={handlechange}
                >
                  Confirm
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
