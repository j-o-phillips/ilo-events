import { NextResponse } from "next/server";
import { db } from "@/lib/db";

import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { title, description, imageSrc, date, maxTickets, price } = body;

  const event = await db.event.create({
    data: {
      title,
      description,
      imageSrc,
      date,
      maxTickets: parseInt(maxTickets),
      price: parseInt(price),
      userid: currentUser.id,
    },
  });

  return NextResponse.json(event);
}
