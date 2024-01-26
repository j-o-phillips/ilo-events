"use client";

import Container from "@/components/Container";
import ImageUpload from "@/components/inputs/ImageUpload";
import EventForm from "@/components/myEvents/event-form";
import { useState } from "react";

interface EventFormState {
  name: string;
  description: string;
}

const CreateEvent = () => {
  const [image, setImage] = useState("");
  const [eventDetails, setEventDetails] = useState<EventFormState>({
    name: "",
    description: "",
  });
  console.log(image);
  console.log(eventDetails);

  return (
    <Container>
      <div className="flex flex-row w-full  justify-between ">
        <div className="flex flex-col  w-full">
          <div className="text-2xl self-center  ">Create your event</div>
          <EventForm onSubmit={setEventDetails} />
        </div>
        <div className="">
          <ImageUpload onChange={(value) => setImage(value)} value={image} />
        </div>
      </div>
    </Container>
  );
};

export default CreateEvent;
