import React from 'react';

import first from '../images/Path 237.svg';
import second from '../images/287927452(7).svg';
import third from '../images/287927452(10).svg';
import forth from '../images/Path 251.svg';

export const Header = () => {
  return (
    <section className="pt-72 sm:pt-52 pl-16 text-slate-700 relative">
      <img
        src={first}
        alt=""
        className="absolute -z-30 -right-[210px] top-[50px]"
      />
      <img
        src={second}
        alt=""
        className="absolute -z-20 -right-[50px] top-[150px]"
      />
      <img
        src={third}
        alt=""
        className="absolute max-w-[670px] -z-10 right-[60px] top-[200px]"
      />
      <img
        src={forth}
        alt=""
        className="absolute w-32 -z-10 right-[50%] -bottom-[280px] md:block hidden"
      />
      <h1 className="text-[70px] uppercase font-semibold md:whitespace-nowrap h-[120px]">
        lorem iptum
      </h1>
      <p className="md:max-w-[350px] max-w-[600px] text-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <button className="mt-10 uppercase rounded-2xl px-8 py-3 text-white border-0 text-sm bg-primary">
        fa-ti cont gratuit
      </button>
    </section>
  );
};
