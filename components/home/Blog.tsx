import Container from "../Container";

const Blog = () => {
  return (
    <Container>
      <div className="flex flex-col text-primary font-ivarReg py-4 md:py-14 gap-8 items-center">
        <h3 className="text-4xl md:text-5xl">Blog</h3>
        <p className="w-full md:w-1/2 text-center text-md md:text-lg">
          We’ve been there. Bringing a baby to this world can be a revolution.
          Here are a few resources, written from a personal perspective that
          hopefully will make you feel seen, when navigating the parenthood
          world
        </p>
        <p className="font-inter pt-8 md:py-12">NO CURRENT BLOG POSTS</p>
      </div>
    </Container>
  );
};

export default Blog;
