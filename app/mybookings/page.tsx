import getBookingsByUser from "@/actions/getBookingsByUser";
import getCurrentUser from "@/actions/getCurrentUser";
import Container from "@/components/Container";
import BookingCard from "@/components/BookingCard";

const MyBookings = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return "Login required";

  const bookings = await getBookingsByUser(currentUser);

  return (
    <Container>
      <div
        className="
pt-10
grid
grid-cols-1
sm:grid-cols-2
md:grid-cols-3
lg:grid-cols-4
xl:grid-cols-5
2xl:grid-cols-6
gap-8
"
      >
        {bookings?.map((booking: any) => {
          return <BookingCard key={booking.id} data={booking.event} />;
        })}
      </div>
    </Container>
  );
};

export default MyBookings;
