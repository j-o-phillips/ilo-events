import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { eventId, eventDate, eventPrice } = body;

  if (!eventId || !eventDate || !eventPrice) return NextResponse.error();

  const eventAndBooking = await db.event.update({
    where: {
      id: eventId,
    },
    data: {
      bookings: {
        create: {
          userId: currentUser.id,
          date: eventDate,
          price: eventPrice,
        },
      },
    },
  });

  return NextResponse.json(eventAndBooking);
}
