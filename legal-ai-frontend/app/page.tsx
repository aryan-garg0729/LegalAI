'use client';

import { useState, useEffect, useRef } from 'react';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { user: 'You', text: input };
    setMessages([...messages, userMessage]);

    const response = await fetch('/api/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: input }),
    });

    const data = await response.json();
    const botMessage = { user: 'LawyerBot', text: data.answer };

    setMessages([...messages, userMessage, botMessage]);
    setInput(''); // Clear input field
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-4">
        <h2 className="font-bold text-xl">Sidebar</h2>
        <ul className="mt-4 space-y-2">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow items-center justify-between bg-white">
        <main className="flex-grow p-4 overflow-y-auto w-full max-w-3xl">
          <div className="flex flex-col space-y-4">
            {messages.map((msg, index) => (
              <ChatMessage key={index} user={msg.user} text={msg.text} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </main>

        {/* Chat Input Area */}
        <footer className="w-full max-w-3xl p-4">
          <ChatInput input={input} setInput={setInput} handleSubmit={handleSubmit} />
        </footer>
      </div>
    </div>
  );
}
