import Container from "../Container";
import FooterMenu from "./FooterMenu";
import Newsletter from "./Newsletter";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="bg-secondary text-primary py-16 mt-24">
      <Container>
        <div className="flex md:flex-row flex-col w-full justify-between gap-12 md:gap-0">
          <Newsletter />
          <FooterMenu />
          <SocialIcons />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
