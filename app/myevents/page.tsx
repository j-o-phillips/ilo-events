import getEventsByUser from "@/actions/getEventsByUser";
import Container from "@/components/Container";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MyEvents = async () => {
  const events = await getEventsByUser();
  console.log(events);

  return (
    <Container>
      <div className="flex flex-row justify-end ">
        <Link href="/myevents/create">
          <Button>Create Event</Button>
        </Link>
      </div>
      {events?.length === 0 ? (
        <div className="py-2 ">You have not created any events yet...</div>
      ) : (
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
          {events?.map((event: any) => {
            return <EventCard key={event.id} data={event} />;
          })}
        </div>
      )}
    </Container>
  );
};

export default MyEvents;
