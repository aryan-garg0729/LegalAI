// app/api/chat/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the incoming request body
    const { query, case_name } = await request.json();

    // Call the external Python API here
    const response = await fetch('http://127.0.0.1:5000/api/chat', {  // Replace with your Flask backend URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        case_name: case_name,
      }),
    });

    // Check if the response is successful
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch data from Python API' }, { status: response.status });
    }

    // Parse the response data
    const data = await response.json();

    // Send the response back to the client
    return NextResponse.json({ answer: data.response });

  } catch (error) {
    console.error("Error in API:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
