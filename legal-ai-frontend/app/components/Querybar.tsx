import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Querybar() {
  return (
    <div className="p-8 text-white">
      <div className="flex items-center bg-[#3B3B3B] px-6 py-4 rounded-3xl">
        <img src="./emblem-white.png" className="w-[3%]"></img>
        <Input
          type="text"
          placeholder="Enter your Query about case"
          className="bg-transparent text-white ml-1 font-semibold text-md border-none focus-visible:outline-none focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:text-[#a7a7a7] flex-grow "
        />
        <Button className=" bg-green-600 rounded-xl hover:bg-green-700">
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
