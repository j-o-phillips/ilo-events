import { db } from "@/lib/db";

interface IParams {
  eventId?: string;
}

export default async function getEventById(params: IParams) {
  try {
    const { eventId } = params;

    const event = await db.event.findUnique({
      where: {
        id: eventId,
      },
      include: {
        user: true,
      },
    });

    if (!event) {
      return null;
    }

    return event;
  } catch (error: any) {
    throw new Error(error);
  }
}
