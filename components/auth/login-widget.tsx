const LoginWidget = () => {
  return (
    <>
      <div className="h-[150px] w-[150px] bg-secondary fixed rounded-full right-8 top-28 shadow-xl z-10 ">
        <svg
          viewBox="0 0 110 110"
          xmlns="http://www.w3.org/2000/svg"
          className="p-2 animate-spin-slow"
        >
          <path
            fill="none"
            id="circlePath"
            d="
      M 15, 55
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    "
          />
          <text>
            <textPath href="#circlePath" textLength="234">
              LOGIN LOGIN LOGIN
            </textPath>
          </text>
        </svg>
      </div>
      <div className="w-[34px] fixed top-[161px] right-[90px] z-20">
        <img src="./images/ILO_sign_green.png" alt="iloSign" />
      </div>
    </>
  );
};

export default LoginWidget;
