"use client";

import Container from "@/components/Container";
import ImageUpload from "@/components/inputs/ImageUpload";
import EventForm from "@/components/myEvents/event-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface EventFormState {
  title: string;
  description: string;
  date: string;
  maxTickets: number;
  price: number;
}

const CreateEvent = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
  const [eventDetails, setEventDetails] = useState<EventFormState>({
    title: "",
    description: "",
    date: "",
    maxTickets: 0,
    price: 0,
  });

  const onCreateEvent = (image: string, eventDetails: EventFormState) => {
    setIsLoading(true);

    const body = {
      ...eventDetails,
      imageSrc: image,
    };

    fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then(() => {
        toast.success("Listing Created!");
        router.push("/myevents");
      })
      .catch(() => {
        toast.error("Something went worng");
      })
      .finally(() => {
        setIsLoading(false);
      });

    setIsLoading(false);
  };

  return (
    <Container>
      <div className="flex flex-row w-full  justify-between flex-wrap ">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="text-2xl self-center  ">Create your event</div>
          <EventForm onSubmit={setEventDetails} />
        </div>
        <div className="flex flex-col items-center gap-12">
          <ImageUpload onChange={(value) => setImage(value)} value={image} />
          <Button
            onClick={() => {
              onCreateEvent(image, eventDetails);
            }}
            disabled={isLoading}
          >
            Create
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CreateEvent;
