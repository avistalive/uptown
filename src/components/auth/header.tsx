interface HeaderProps {
  label: string;
}
const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex flex-col items-center gap-y-2">
        <h1 className="text-2xl font-light tracking-tight text-midnight">
          Welcome to <span className="font-ivy-presto italic font-normal">Uptown</span>
        </h1>
      </div>
      <p className="text-gray-500 text-sm font-light mt-1 text-center">{label}</p>
    </div>
  );
};

export default Header;
