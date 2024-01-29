"use client";

import { SafeUser } from "@/app/types";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Booking, Event, User } from "@prisma/client";

interface EventClientProps {
  bookings?: Booking[];
  event: Event;
  currentUser?: SafeUser | null;
}

const EventClient: React.FC<EventClientProps> = ({ event, currentUser }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-ivarReg">
        <div className="flex flex-col gap-4 col-span-2">
          {" "}
          <h2 className="text-4xl">{event.title}</h2>
          <img src={event.imageSrc} alt="eventImg" />
          <div className="flex flex-col">
            <h5 className="text-2xl py-4">Description</h5>
            <p className="text-lg">{event.description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-xl">
          <div>
            <div>Price </div>
            <div>{event.price} credits</div>
          </div>

          <Button className="font-inter text-lg">BOOK TICKET</Button>
          <div className="flex flex-col py-4 gap-3">
            <div>
              <div>Location</div>
              <div>TBC</div>
            </div>
            <hr />
            <div>
              <div>Date</div>
              <div>{event.date}</div>
            </div>
            <hr />
            <div>
              <div>Participants</div>
              <div>Unknown</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EventClient;
