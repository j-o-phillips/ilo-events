import Container from "../Container";

const Title = () => {
  return (
    <Container>
      <header className="w-full md:w-2/3 py-8">
        <h1 className="text-6xl md:text-8xl font-ivarIta text-primary">
          Events <span className="font-ivarReg">created</span> for parents
          <span className="font-ivarReg"> by parents</span>
        </h1>
      </header>
      <div className="flex flex-row gap-4 justify-around flex-wrap py-8">
        <img
          src="/images/Home1.png"
          alt=""
          className="w-full md:w-2/5 h-auto"
        />

        <img
          src="/images/Home2.png"
          alt=""
          className="hidden md:block w-2/5 h-auto"
        />
      </div>
      <div className="w-full md:w-2/3 py-8">
        <h2 className="text-5xl md:text-6xl font-ivarReg text-primary">
          We create events for families to reconnect with each other.{" "}
          <span className="font-ivarIta">
            We want you to take a break. A real one.
          </span>
        </h2>
      </div>
    </Container>
  );
};

export default Title;
