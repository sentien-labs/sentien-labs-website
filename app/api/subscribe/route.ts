import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Simple email storage — swap this for ConvertKit later
const DATA_FILE = path.join(process.cwd(), "data", "subscribers.json");

interface Subscriber {
  name: string;
  email: string;
  source: string;
  timestamp: string;
}

async function readSubscribers(): Promise<Subscriber[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeSubscribers(subscribers: Subscriber[]): Promise<void> {
  // Ensure data directory exists
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(subscribers, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const subscribers = await readSubscribers();

    // Check for duplicate
    const alreadyExists = subscribers.some(
      (s) => s.email.toLowerCase() === email.toLowerCase()
    );

    if (!alreadyExists) {
      subscribers.push({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        source: "toolkit-landing-page",
        timestamp: new Date().toISOString(),
      });
      await writeSubscribers(subscribers);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
