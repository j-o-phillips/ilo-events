import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex flex-row gap-24 flex-1 justify-end items-end">
      <div className="flex flex-col gap-3 ">
        <FaFacebook size={50} />
        <FaInstagramSquare size={50} />
        <FaLinkedin size={50} />
      </div>
      <div className="flex flex-col ">
        <div className="w-[34px] mb-3 ">
          <img src="./images/ILO_sign_green.png" alt="iloSign" />
        </div>
        <p className="text-xs text-primary/50 py-1">ILO @2024</p>
        <p className="text-xs text-primary/50 ">
          Website design by Jake Phillips
        </p>
      </div>
    </div>
  );
};

export default SocialIcons;
