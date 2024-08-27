'use client';

import { useState, useEffect, useRef } from 'react';
import ChatMessage from './components/ChatMessage';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { user: 'You', text: input };
    setMessages([...messages, userMessage]);

    // Check for theme change commands
    if (input.toLowerCase() === 'dark mode') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (input.toLowerCase() === 'light mode') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Handle normal input submission (e.g., send a request to the backend)
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
    }

    setInput(''); // Clear input field
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-10">
        <h1 className="text-xl font-bold text-black dark:text-white">Legal Assistant</h1>
        <button
          onClick={handleThemeToggle}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {isDarkMode ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-900 dark:text-white" />
          )}
        </button>
      </header>

      {/* Adjust the content to account for the fixed header height */}
      <div className="flex flex-col flex-grow pt-16 items-center justify-between bg-white dark:bg-gray-900">
        <main className="flex-grow p-4 overflow-y-auto w-full max-w-3xl">
          <div className="flex flex-col space-y-4">
            {messages.map((msg, index) => (
              <ChatMessage key={index} user={msg.user} text={msg.text} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </main>

        {/* Chat Input Area */}
        <footer className="w-full max-w-3xl p-4 bg-white dark:bg-gray-800">
          <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow border-none p-2 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Type your message..."
            />
            <button type="submit" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="text-2xl text-gray-900 dark:text-white">&#10148;</span> {/* Arrow icon */}
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
}
