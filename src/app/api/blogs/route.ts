import { NextResponse } from "next/server";
import data from "../../../../mock-data/posts.json";

// GET route
export async function GET() {
  try {
    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
