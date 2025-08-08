import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="pt-4 flex flex-col md:flex-row items-center justify-between text-black sticky top-0 z-50 px-4 sm:px-8 md:px-[8vw] lg:px-[16vw] bg-white w-full max-w-screen-sm md:max-w-none mx-auto">
        <div className="w-full md:w-auto flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold py-2 sm:py-4">Jason Zhang</h1>
          <button
            className="md:hidden material-symbols-outlined"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row md:items-center md:justify-end w-[16rem] md:w-auto items-end justify-end text-base sm:text-lg font-semibold gap-2 sm:gap-4 pb-4 md:pb-0 absolute md:static top-16 right-4 md:right-0 left-auto md:left-0 md:translate-x-0 bg-white shadow-lg rounded-xl md:shadow-none md:rounded-none`}
          style={{
            // On mobile, position the menu on the right side
            ...(isMenuOpen
              ? { alignItems: 'flex-end', right: '1rem', left: 'auto', transform: 'none' }
              : {}),
          }}
        >
          <NavItem title="About" link="#About" />
          <NavItem title="Projects" link="#Projects" />
          <NavItem title="Play" link="#Play" />
          <NavItem
            title="LinkedIn"
            link="https://www.linkedin.com/in/jasonzhang-pdx/"
          />
          <NavItem
            title="Resume"
            link="https://drive.google.com/file/d/1Bz5FL15ggsrPFi1-UWeZ0HRecDpihovq/view?usp=sharing"
          />
        </ul>
      </nav>
    </>
  );
};

const NavItem = ({ title, link }: { title: string; link: string }) => {
  return (
    <li className="w-full md:w-auto text-center">
      <div className="pt-2 border-t-2 md:border-t-4 border-transparent text-gray-600 hover:text-black">
        {link.includes("#") ? (
          <a href={link} className="block py-2 px-4">{title}</a>
        ) : (
          <a href={link} target="_blank" rel="noopener noreferrer" className="block py-2 px-4">
            {title}
          </a>
        )}
      </div>
    </li>
  );
};