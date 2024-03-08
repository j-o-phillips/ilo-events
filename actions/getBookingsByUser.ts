import { SafeUser } from "@/app/types";
import { db } from "@/lib/db";
import { User } from "@prisma/client";

export default async function getBookingsByUser(user: SafeUser) {
  try {
    const bookings = await db.booking.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        event: true,
      },
      where: {
        userId: user.id,
      },
    });

    return bookings;
  } catch (error: any) {
    throw new Error(error);
  }
}
