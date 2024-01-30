"use client";

import Container from "../Container";

import Logo from "./Logo";

import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

export const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full z-10 shadow-sm bg-background">
      <div className="py-4 border-black border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between">
            <Logo />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};
