// app/api/chat/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { query, case_name, lang } = await request.json();

    const response = await fetch("http://127.0.0.1:5000/api/chat", {
      // Replace with your Flask backend URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
        case_name: case_name,
        lang: lang,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data from Python API" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({ answer: data.response });
  } catch (error) {
    console.error("Error in API:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
