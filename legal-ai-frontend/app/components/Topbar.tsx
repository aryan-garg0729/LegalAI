import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Topbar() {
  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src="./emblem-white.png" className="w-1/12" />
          <span className="font-bold text-4xl text-white">
            Legal-<span className="text-[#FF7722]">AI</span> Bot
          </span>
        </div>
        <div>
          <Select defaultValue="english">
            <SelectTrigger className="bg-transparent text-white rounded-3xl px-5 py-3">
              <SelectValue placeholder="Select a Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="marathi">Marathi</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="text-[#878787] p-4 text-sm">
        This bot will help you get information about any case and you can ask in
        prompt about the queries on the case
      </div>
    </div>
  );
}
