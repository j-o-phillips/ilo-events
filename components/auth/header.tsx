interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center text-primary">
      <h1 className="text-4xl font-semibold font-ivarReg ">Ilo Events</h1>
      <p className="text-muted-foreground text-lg font-ivarIta">{label}</p>
    </div>
  );
};
