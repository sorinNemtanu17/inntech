import React from 'react';

import first from '../images/Path 237.svg';
import second from '../images/287927452(7).svg';
import third from '../images/287927452(10).svg';
import forth from '../images/Path 251.svg';

export const Header = () => {
  return (
    <section className="relative mt-10 flex h-[722px] md:h-[802px]">
      <div className="w-80 mt-36 mx-auto md:ml-10">
        <h1 className="mb-5 text-2xl uppercase font-bold whitespace-nowrap md:text-6xl">
          lorem iptum
        </h1>
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <button className="mt-10 uppercase rounded-2xl px-8 py-3 text-white border-0 text-sm bg-primary">
          fa-ti cont gratuit
        </button>
      </div>
      <img
        src={forth}
        alt=""
        className="absolute bottom-20 md:left-1/3 md:-bottom-20"
      />
      <img
        src={third}
        alt=""
        className="md:w-3/5 absolute top-32 -z-10 md:right-10"
      />
      <img src={second} alt="" className="absolute top-20 right-0 -z-20" />
      <img
        src={first}
        alt=""
        className="absolute top-0 -right-1/3 -z-30 md:-right-32"
      />
      {/* <div className="relativ">
        <div className="">
          <img src={third} alt="" />
        </div>
        <div className="">
          <img src={second} alt="" />
        </div>
        <div className="">
          <img src={first} alt="" />
        </div>
        <div className="">
          <img src={forth} alt="" />
        </div>
      </div> */}
    </section>
  );
};
