"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Input from "../inputs/input";

interface EventFormProps {
  onSubmit: any;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
  return (
    <div className="pt-8 flex flex-col gap-4">
      <Input id="name" type="text" onChange={onSubmit} label="Event Name" />
      <Input
        id="description"
        type="text"
        onChange={onSubmit}
        label="Event Description"
        textarea
      />
    </div>
  );
};
//ghghgh
export default EventForm;
