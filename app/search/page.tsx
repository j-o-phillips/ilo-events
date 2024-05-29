"use client";

import Container from "@/components/Container";
import Search from "@/components/Search";
import getEvents from "@/actions/getEvents";
import { getSession } from "@/actions/getCurrentUser";
import EventCard from "@/components/EventCard";
import { redirect } from "next/navigation";
import searchEvents from "@/actions/searchEvents";
import { useEffect, useState } from "react";
import type { Event } from "@prisma/client";

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    searchEvents(searchTerm)
      .then((events) => {
        setEvents(events);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm]);

  return (
    <Container>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isLoading && (
        <div className="flex justify-center items-center min-h-80">
          Loading...
        </div>
      )}
      {events.length === 0 && !isLoading ? (
        <div className="flex justify-center items-center min-h-80">
          No Events
        </div>
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
          {events.map((event: any) => {
            return <EventCard key={event.id} data={event} />;
          })}
        </div>
      )}
    </Container>
  );
};

export default SearchPage;
