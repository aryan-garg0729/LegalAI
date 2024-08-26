type ChatMessageProps = {
    user: string;
    text: string;
  };
  
  export default function ChatMessage({ user, text }: ChatMessageProps) {
    return (
      <div className={`flex ${user === 'You' ? 'justify-end' : 'justify-start'}`}>
        <div
          className={`rounded-lg p-3 max-w-xs ${
            user === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
          }`}
        >
          <span className="block font-semibold">{user}</span>
          <p>{text}</p>
        </div>
      </div>
    );
  }
  