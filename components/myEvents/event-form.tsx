"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Input from "../inputs/input";

interface EventFormProps {
  onSubmit: any;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
  return (
    <div className="pt-8 flex flex-col gap-4">
      <Input id="title" type="text" onChange={onSubmit} label="Event Name" />
      <Input
        id="description"
        type="text"
        onChange={onSubmit}
        label="Event Description"
        textarea
      />
      <Input id="date" type="date" onChange={onSubmit} label="Event Date" />
      <Input
        id="price"
        type="number"
        onChange={onSubmit}
        label="Ticket Price"
      />
      <Input
        id="maxTickets"
        type="number"
        onChange={onSubmit}
        label="Maximum Tickets Available"
      />
    </div>
  );
};

export default EventForm;
