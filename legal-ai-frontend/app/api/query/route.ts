import { NextResponse } from 'next/server';



export async function POST(request: Request) {
  const { query } = await request.json();
  
  // Call your Python backend API here
  const response = await fetch('http://6e06-34-124-224-225.ngrok-free.app/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query, 
      case_name: "KeshavNanda Bharti"
    })
  });

  const data = await response.json();
  console.log(data)
  return NextResponse.json({ answer: data.response });
}
