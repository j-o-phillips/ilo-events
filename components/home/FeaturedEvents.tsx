import Link from "next/link";
import Container from "../Container";
import EventCard from "../EventCard";
import getEvents from "@/actions/getEvents";

const FeaturedEvents = async () => {
  const featuredEvents = await getEvents();

  return (
    <div className="bg-primary text-white py-20 font-ivarReg">
      <Container>
        <div className="flex flex-row justify-around gap-8">
          <div className="flex flex-col justify-between w-[400px]">
            <h3 className="text-5xl">Featured Events</h3>
            <p className="text-lg">
              We have experienced traveling with babies and toddlers first-hand.
              It’s both magical and chaotic. Our retreats are designed for
              families that long for quality rest. Several times a year, we
              select unique, easily accessible destinations to create restful
              spaces for families. During your holiday with us, you don’t have
              to worry about bringing an extra pair of hands to care for your
              baby or finding child-friendly restaurants. We do it for you. Our
              offer includes daily Montessori childcare, a handcrafted menu for
              children and adults, baby gear on demand, and a restorative place
              for parents.
            </p>
            <Link href="/auth/login" className="font-inter">
              SEARCH ALL EVENTS
            </Link>
          </div>
          <div className="w-[400px]">
            {featuredEvents[0] && <EventCard data={featuredEvents[0]} />}
          </div>
          {featuredEvents[1] && <EventCard data={featuredEvents[0]} />}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedEvents;
