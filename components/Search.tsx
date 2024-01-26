"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
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
          <input type="text" className="mx-4 outline-none bg-transparent" />
        </div>
        <div
          className="
                p-2 bg-green-900 rounded-full text-white
                "
        >
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  );
};

export default Search;
