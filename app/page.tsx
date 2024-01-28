import Container from "@/components/Container";
import LoginWidget from "@/components/auth/login-widget";
import Blog from "@/components/home/Blog";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import Title from "@/components/home/Title";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-12">
        <Link href="/auth/login" className="cursor-pointer">
          <LoginWidget />
        </Link>
        <Title />
        <FeaturedEvents />
        <Blog />
      </div>
    </>
  );
}
