import React from 'react';

import first from '../images/Path 237.svg';
import second from '../images/287927452(7).svg';
import third from '../images/287927452(10).svg';
import forth from '../images/Path 251.svg';

export const HeaderGrid = () => {
  return (
    <section className="grid grid-cols-3">
      <div className="grid grid-cols-12 row-start-1 col-start-1 col-span-3">
        <img
          src={forth}
          alt=""
          className="row-start-3 col-start-6 row-span-2"
        />
        <img
          src={first}
          alt=""
          className="col-end-13 row-end-2 row-span-2 col-span-2"
        />
        <img
          src={second}
          alt=""
          className="col-end-13 row-end-4 col-span-6 row-span-4 mt-8 lg:mt-16"
        />
        <img
          src={third}
          alt=""
          className="row-end-4 col-end-12 row-span-4 col-span-6 mt-10"
        />
      </div>
      <div className="row-start-1 col-start-1 col-end-4 w-80 mt-10 ml-10 md:mt-20 lg:mt-32 lg:ml-20">
        <h1 className="mb-5 text-2xl uppercase font-bold whitespace-nowrap sm:text-4xl md:text-6xl">
          lorem iptum
        </h1>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <button className="mt-10 uppercase rounded-2xl font-bold px-6 py-3 text-white border-0 text-xs bg-primary sm:py-4 md:px-8 sm:text-sm md:text-base">
          fa-ti cont gratuit
        </button>
      </div>
    </section>
  );
};
