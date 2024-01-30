const FooterMenu = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 flex-1">
      <h4 className="text-4xl font-ivarIta pb-6">Menu</h4>
      <div className="grid grid-cols-2 grid-rows-3 font-inter  md:gap-2">
        <div>HOME</div>
        <div>ABOUT</div>
        <div>LOGIN</div>
        <div>CONTACT</div>
        <div>PRIVACY POLICY</div>
        <div>TERMS & CONDITIONS</div>
      </div>
    </div>
  );
};

export default FooterMenu;
