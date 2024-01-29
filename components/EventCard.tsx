"use client";

import { Event, User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface EventCardProps {
  data: Event;
  currentUser?: User;
}

const EventCard: React.FC<EventCardProps> = ({ data, currentUser }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/search/${data.id}`)}
      className="
        col-span-1
        cursor-pointer
        group
        font-ivarReg
        "
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-xl
            "
        >
          <Image
            fill
            alt="Event"
            src={data.imageSrc}
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
        </div>
        <div className="font-bold text-2xl">{data.title}</div>
        <div className="text-neutral-500">{data.description}</div>
        <div className="font-light text-neutral-500">{data.date}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold font-inter">CREDITS: {data.price}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
