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
    <>
      <nav className="navbar">
        <header className="">
          <img src={brand} alt="" className="w-3/5" />
        </header>

        <ul className="menu">
          {navLinks.map((link) => {
            const { id, text } = link;
            return (
              <li key={id} className="">
                <a
                  className="block cursor-pointer hover:text-primary md:p-0 text-xs uppercase whitespace-nowrap"
                  href="#"
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <button className="uppercase rounded-full px-4 py-1 ml-10 border-0 text-sm text-white bg-primary whitespace-nowrap hidden md:block drop-shadow-lg">
          log in
        </button>
        <IconMenu displayHidden={displayHidden} hidden={hidden} />
      </nav>
      <ul
        className={`menu-mobile ${
          hidden ? 'h-0 overflow-hidden p-0' : 'h-1/2 overflow-hidden'
        }`}
      >
        {navLinks.map((link) => {
          const { id, text } = link;
          return (
            <li key={id} className="">
              <a
                className="block cursor-pointer hover:text-primary uppercase whitespace-nowrap"
                href="#"
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
