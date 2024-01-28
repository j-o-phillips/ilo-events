import { db } from "@/lib/db";
import getCurrentUser from "./getCurrentUser";

export default async function getEventsByUser() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return null;
  }

  try {
    const events = await db.event.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        userid: currentUser.id,
      },
    });

    return events;
  } catch (error: any) {
    throw new Error(error);
  }
}
