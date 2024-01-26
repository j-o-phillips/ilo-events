import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <Container>
      <div className="flex flex-row justify-end ">
        <Link href="/myevents/create">
          <Button>Create Event</Button>
        </Link>
      </div>
      <div>Events</div>
    </Container>
  );
};

export default Page;
