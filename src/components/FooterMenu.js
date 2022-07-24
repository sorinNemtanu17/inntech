import React from 'react';

export const FooterMenu = () => {
  return (
    <div className="flex justify-between md:pt-16 px-10 md:p-0 whitespace-nowrap">
      {/* Platforma */}
      <ul className="flex flex-col gap-2 text-white">
        <li>
          <a href="#" className="font-bold">
            Platforma
          </a>
        </li>
        <li>
          <a href="#" className="font-thin text-xs">
            Creeaza cont
          </a>
        </li>
        <li>
          <a href="#" className="font-thin text-xs">
            Acceseaza cont
          </a>
        </li>
      </ul>
      {/* Menu */}
      <ul className="flex flex-col gap-2 text-white">
        <li>
          <a href="#" className="font-bold">
            Meniu
          </a>
        </li>
        <li>
          <a href="#" className="font-thin text-xs">
            Despre noi
          </a>
        </li>
        <li>
          <a href="#" className="font-thin text-xs">
            Cum Functioneaza
          </a>
        </li>
        <li>
          <a href="#" className="font-thin text-xs">
            Sfaturi
          </a>
        </li>
        <li>
          <a href="#" className="font-thin text-xs">
            F.A.Q
          </a>
        </li>
        <li>
          <a href="#" className="font-thin text-xs">
            Contact
          </a>
        </li>
      </ul>
      {/* Legal */}
      <ul className="flex flex-col gap-2 text-white">
        <li>
          <a href="#" className="font-bold">
            Legal
          </a>
        </li>
        <li>
          <a href="#" className="font-thin text-xs">
            Termene si Conditii
          </a>
        </li>
        <li>
          <a href="#" className="font-thin text-xs">
            Politica Confidentialitate
          </a>
        </li>
        <li>
          <a href="#" className="font-thin text-xs">
            Politica Coo kies
          </a>
        </li>
        <li>
          <a href="#" className="font-thin text-xs">
            GDPR
          </a>
        </li>
        <li>
          <a href="#" className="font-thin text-xs">
            ANCP
          </a>
        </li>
      </ul>
    </div>
  );
};
