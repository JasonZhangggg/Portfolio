export const Navbar = () => {
  return (
    <>
      <nav className="pt-4 flex items-center justify-between text-black sticky top-0 z-50 px-[16vw] bg-white">
        <h1 className="text-3xl font-bold py-4">Jason Zhang</h1>
        <ul className=" flex justify-end text-xl font-semibold gap-4">
          <NavItem title="About" />
          <NavItem title="Projects" />
          <NavItem title="Play" />
          <NavItem title="LinkedIn" />
          <NavItem title="Resume" />
        </ul>
      </nav>
    </>
  );
};

const NavItem = ({ title }: { title: string; selected?: boolean }) => {
  return (
    <li
      className={
        "pt-2 border-t-4 border-transparent text-gray-600 hover:text-black"
      }
    >
      <a href={`#${title}`}>{title}</a>
    </li>
  );
};
