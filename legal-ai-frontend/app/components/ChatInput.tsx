"use client";
type ChatInputProps = {
  input: string;
  setInput: (input: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

export default function ChatInput({ input, setInput, handleSubmit }: ChatInputProps) {
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
        setInput(''); // Clear the input field after form submission
      }}
      className="flex space-x-2"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  );
}
