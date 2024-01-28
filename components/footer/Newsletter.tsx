const Newsletter = () => {
  return (
    <div className="flex flex-col gap-8 flex-1">
      <h4 className="text-4xl font-ivarIta pb-6">Newsletter</h4>
      <input
        type="text"
        className="flex h-10 w-2/3 font-ivarReg rounded-3xl px-3 py-1
            outline-none placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Your email"
      />
      <p className="text-primary/50">ILO ApS | CVR: 44070413</p>
    </div>
  );
};

export default Newsletter;
