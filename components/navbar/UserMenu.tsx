"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { LoginButton } from "../auth/login-button";
import { RegisterButton } from "../auth/register-button";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  console.log(currentUser);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex
        flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition
        "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <div>
              <Avatar src={currentUser?.image} />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute rounded-xl shadow-md w-[30vw] md:w-[20vw] lg:w-[10vw] bg-white
            overflow-hidden right-0 top-12 text-sm 
            "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="My events" />
                <MenuItem onClick={() => {}} label="My bookings" />

                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <LoginButton>
                  <MenuItem onClick={() => {}} label="Login" />
                </LoginButton>
                <RegisterButton>
                  <MenuItem onClick={() => {}} label="Signup" />
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
