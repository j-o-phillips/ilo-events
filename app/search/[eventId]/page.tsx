import getEventById from "@/actions/getEventById";
import EventClient from "./EventClient";
import getCurrentUser from "@/actions/getCurrentUser";

interface IParams {
  eventId?: string;
}

const EventPage = async ({ params }: { params: IParams }) => {
  const event = await getEventById(params);
  const currentUser = await getCurrentUser();

  if (!event) {
    return <div>No event found</div>;
  }

  return <EventClient event={event} currentUser={currentUser} />;
};

export default EventPage;
