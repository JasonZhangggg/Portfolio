export const Navbar = () => {
  return (
    <>
      <nav className="pt-4 flex items-center justify-between text-black sticky top-0 z-50 px-[16vw] bg-white">
        <h1 className="text-3xl font-bold py-4">Jason Zhang</h1>
        <ul className=" flex justify-end text-xl font-semibold gap-4">
          <NavItem title="About" link="#About" />
          <NavItem title="Projects" link="#Projects" />
          <NavItem title="Play" link="#Play" />
          <NavItem
            title="LinkedIn"
            link="https://www.linkedin.com/in/jasonzhang-pdx/"
          />
          <NavItem
            title="Resume"
            link="https://drive.google.com/file/d/1CU9yq_NGcLe1ur0iS_aQateZ54lejB9-/view?usp=sharing"
          />
        </ul>
      </nav>
    </>
  );
};

const NavItem = ({ title, link }: { title: string; link: string }) => {
  return (
    <li
      className={
        "pt-2 border-t-4 border-transparent text-gray-600 hover:text-black"
      }
    >
      {link.includes("#") ? (
        <a href={link}>{title}</a>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      )}
    </li>
  );
};
