import getEventById from "@/actions/getEventById";
import getCurrentUser from "@/actions/getCurrentUser";
import BookingsClient from "./BookingsClient";

interface IParams {
  eventId?: string;
}

const BookingPage = async ({ params }: { params: IParams }) => {
  const event = await getEventById(params);
  const currentUser = await getCurrentUser();

  if (!event) {
    return <div>No event found</div>;
  }

  return <BookingsClient event={event} currentUser={currentUser} />;
};

export default BookingPage;
