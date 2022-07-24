import React, { useState } from 'react';
import { navLinks } from '../data';
import brand from '../images/Group 1782.svg';
import { IconMenu } from './assets/IconMenu';

export const Navbar = () => {
  const [hidden, setHidden] = useState(true);

  const displayHidden = () => {
    setHidden(!hidden);
  };

  return (
    <nav className="flex px-10 items-center uppercase text-xs relative">
      <header className="p-4 w-1/3">
        <img src={brand} alt="" />
      </header>

      <ul
        className={`absolute z-10 -bottom-full top-full right-10 transition duration-300 origin-top shadow-lg h-52 ${
          hidden ? 'scale-y-0' : 'scale-y-1'
        }`}
      >
        {navLinks.map((link) => {
          const { id, text } = link;
          return (
            <li key={id} className="">
              <a
                className="px-4 py-2 block cursor-pointer hover:bg-slate-300"
                href="#"
              >
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
      <IconMenu displayHidden={displayHidden} />
    </nav>
  );
};
