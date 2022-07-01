import { useEffect, useRef, useState } from 'react';
import { navLinks } from '../data';
import brand from '../images/Group 1782.svg';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="block sm:flex px-10 items-center uppercase text-xs">
      <header className="p-4 w-28">
        <img src={brand} alt="" />
      </header>

      <ul className="sm:flex sm:flex-row items-center ml-auto mr-5 h-auto">
        {navLinks.map((link) => {
          const { id, text } = link;
          return (
            <li key={id}>
              <a className="px-4 py-2 sm:px-2 inline-block" href="#">
                {text}
              </a>
            </li>
          );
        })}

        <li className="py-2 pl-5">
          <button className="uppercase rounded-full px-4 py-1 border-0 text-sm bg-primary">
            log in
          </button>
        </li>
      </ul>
    </nav>
  );
};
