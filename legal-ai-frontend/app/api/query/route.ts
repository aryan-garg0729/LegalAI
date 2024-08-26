import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { query } = await request.json();
  
  // Call your Python backend API here
  const response = await fetch('http://localhost:5000/api/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  return NextResponse.json({ answer: data.answer });
}
