"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { LoginButton } from "../auth/login-button";
import { RegisterButton } from "../auth/register-button";
import Link from "next/link";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative font-inter">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="p-4 py-1 px-2 border-[1px] border-primary flex
        flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition
        "
        >
          <AiOutlineMenu />
          <div>
            <div>
              <Avatar src={currentUser?.image} />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute rounded-xl shadow-md w-[30vw] md:w-[20vw] lg:w-[10vw] border border-neutral-200
            overflow-hidden right-0 top-16 text-sm  bg-white 
            "
        >
          <div className="flex flex-col cursor-pointer bg-background ">
            {currentUser ? (
              <>
                <Link
                  onClick={toggleOpen}
                  href="/search"
                  className="
                px-4 py-3 hover:bg-neutral-100 transition font-semibold
                "
                >
                  SEARCH EVENTS
                </Link>
                <Link
                  onClick={toggleOpen}
                  href="/myevents"
                  className="
                px-4 py-3 hover:bg-neutral-100 transition font-semibold
                "
                >
                  MY EVENTS
                </Link>
                <Link
                  onClick={toggleOpen}
                  href="/mybookings"
                  className="
                px-4 py-3 hover:bg-neutral-100 transition font-semibold
                "
                >
                  MY BOOKINGS
                </Link>

                <hr />
                <MenuItem onClick={() => signOut()} label="LOGOUT" />
              </>
            ) : (
              <>
                <LoginButton>
                  <MenuItem onClick={() => {}} label="LOGIN" />
                </LoginButton>
                <RegisterButton>
                  <MenuItem onClick={() => {}} label="SIGNUP" />
                </RegisterButton>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
