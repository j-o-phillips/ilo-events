import Container from "@/components/Container";
import Search from "@/components/Search";
import getEvents from "@/actions/getEvents";
import getCurrentUser from "@/actions/getCurrentUser";
import EventCard from "@/components/EventCard";

const SearchPage = async () => {
  const events = await getEvents();
  // const currentUser = await getCurrentUser();

  if (events.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        No Events
      </div>
    );
  }

  return (
    <Container>
      <Search />
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
        {events.map((event: any) => {
          return <EventCard key={event.id} data={event} />;
        })}
      </div>
    </Container>
  );
};

export default SearchPage;
