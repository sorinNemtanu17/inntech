import React from 'react';

import bg from '../images/Path 225.png';
import eight from '../images/Path 234.svg';
import nineth from '../images/Path 233.svg';
import ten from '../images/Path 238.svg';

import { howTo } from '../data';

export const HowTo = () => {
  return (
    <section className="">
      <div className="grid grid-cols-4">
        <img
          src={nineth}
          alt=""
          className="row-end-2 col-end-5 place-self-end"
        />
        <img src={bg} alt="" className="row-span-full col-span-full" />
        <div className="invisible row-span-full col-span-full bg-howToBg bg-cover bg-no-repeat bg-center md:visible">
          {/* <img src={ten} alt="" className="" /> */}
        </div>
        <img src={eight} alt="" className="row-start-1 col-start-1" />

        <div className="row-span-full col-span-full flex flex-wrap items-center justify-center gap-5 max-w-md mx-auto sm:row-span-2 sm:row-end-2 lg:max-w-full">
          <h2 className="text-lg text-center uppercase text-black font-bold w-full self-end md:text-2xl lg:text-white">
            cum functioneaza
          </h2>
          {howTo.map((item) => {
            const { id, title, icon, text } = item;
            return (
              <article
                key={id}
                className="bg-white rounded-3xl flex flex-col p-5 shadow-md w-40 sm:w-44 self-start"
              >
                <img src={icon} alt="" className="w-6 mx-auto sm:w-8" />

                <h3 className="text-xs uppercase font-medium mx-auto sm:text-sm text-primary">
                  {title}
                </h3>
                <p className="text-xs text-center sm:text-sm pt-2">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
