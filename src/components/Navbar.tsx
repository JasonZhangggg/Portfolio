export const Navbar = () => {
  return (
    <>
      <nav className="py-6 flex items-center justify-between text-black">
        <h1 className="text-3xl font-bold py-4">Jason Zhang</h1>
        <ul className=" flex justify-end text-xl font-semibold gap-4">
          <NavItem title="About" selected />
          <NavItem title="Projects" />
          <NavItem title="Play" />
          <NavItem title="LinkedIn" />
          <NavItem title="Resume" />
        </ul>
      </nav>
    </>
  );
};

const NavItem = ({
  title,
  selected = false,
}: {
  title: string;
  selected?: boolean;
}) => {
  return (
    <li
      className={`pt-2 border-t-4 ${
        selected
          ? "border-black text-black"
          : "border-transparent text-gray-600 hover:text-black"
      } `}
    >
      <a href={`#${title}`}>{title}</a>
    </li>
  );
};
