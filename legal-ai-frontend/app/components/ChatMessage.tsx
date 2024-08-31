type ChatMessageProps = {
  user: string;
  text: string;
};

export default function ChatMessage({ user, text }: ChatMessageProps) {
  return (
    <div
      className={`flex ${
        user === "You" ? "justify-end" : "justify-start"
      } mx-8 my-6`}
    >
      <div
        className={`rounded-lg p-3 max-w-xs ${
          user === "You" ? "bg-blue-600 text-white" : "bg-[#D9D9D9] text-black"
        } break-words`}
      >
        <span className="block font-semibold">{user}</span>
        <p>{text}</p>
      </div>
    </div>
  );
}
