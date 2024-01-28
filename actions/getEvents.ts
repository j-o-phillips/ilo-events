import { db } from "@/lib/db";

export default async function getEvents() {
  try {
    const events = await db.event.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return events;
  } catch (error: any) {
    throw new Error(error);
  }
}
