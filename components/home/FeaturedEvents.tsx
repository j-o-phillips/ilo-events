import Link from "next/link";
import Container from "../Container";
import EventCard from "../EventCard";
import getEvents from "@/actions/getEvents";

const FeaturedEvents = async () => {
  const featuredEvents = await getEvents();

  return (
    <div className="bg-primary text-white py-20 font-ivarReg">
      <Container>
        <div className="flex flex-row justify-around gap-8 flex-wrap">
          <div className="flex flex-col md:justify-between justify-center gap-8 md:gap-0 w-full sm:w-2/3 md:w-1/3 ">
            <h3 className="text-4xl md:text-5xl text-center md:text-left">
              Featured Events
            </h3>
            <p className="text-mdmd:text-lg">
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
          <div className="w-[300px] sm:w-auto py-12">
            {featuredEvents[0] && <EventCard data={featuredEvents[0]} />}
          </div>
          {featuredEvents[1] && <EventCard data={featuredEvents[0]} />}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedEvents;
