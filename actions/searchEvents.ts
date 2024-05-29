"use server";

import { db } from "@/lib/db";

export default async function searchEvents(searchTerm: string) {
  try {
    const events = await db.event.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        title: {
          contains: searchTerm,
          mode: "insensitive",
        },
      },
    });

    return events;
  } catch (error: any) {
    throw new Error(error);
  }
}
