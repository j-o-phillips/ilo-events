"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button
      variant="link"
      className="font-normal w-full font-ivarReg"
      size="default"
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
