"use client";

import searchEvents from "@/actions/searchEvents";
import { Dispatch, SetStateAction, useState } from "react";
import { BiSearch } from "react-icons/bi";

type SearchProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};
const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  // const [searchResults, setSearchResults] = useState<Event[]>();

  // const handleSearch = () => {
  //   console.log(searchTerm);
  //   try {
  //     searchEvents(searchTerm)
  //       .then((events) => {
  //         setSearchResults(events);
  //       })
  //       .then(() => {
  //         console.log(searchResults);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div
      className="
    border-[1px]
    w-full
    md:w-1/3
    py-2
    rounded-full
    shadow-sm
    hover:shadow-md
    transition
    cursor-pointer
   
    "
    >
      <div className="flex flex-row items-center justify-between gap-2 mx-2">
        <div>
          <input
            type="text"
            name="search"
            id="search"
            className="mx-4 outline-none bg-transparent"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div
          className="
                p-2 bg-green-900 rounded-full text-white
                "
          // onClick={handleSearch}
        >
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  );
};

export default Search;
