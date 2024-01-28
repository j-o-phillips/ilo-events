const LoginWidget = () => {
  return (
    <div className="h-[150px] w-[150px] bg-secondary fixed rounded-full right-8 top-28 shadow-xl">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="p-2 "
      >
        <path
          fill="none"
          id="circlePath"
          d="
      M 10, 50
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
  );
};

export default LoginWidget;
