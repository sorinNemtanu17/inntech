import React from 'react';

import bg from '../images/Path 225.svg';
import eight from '../images/Path 234.svg';
import nineth from '../images/Path 233.svg';
import ten from '../images/Path 238.svg';

import { howTo } from '../data';

export const HowTo = () => {
  return (
    <section className="grid grid-cols-4 grid-rows-4 pt-20 lg:pt-0">
      <img
        src={nineth}
        alt=""
        className="row-start-2 place-self-center row-span-2 col-start-4 "
      />
      <img src={bg} alt="" className="row-span-full col-span-full" />
      <img src={ten} alt="" className="row-span-full col-span-full" />

      <img src={eight} alt="" className="row-start-1 col-start-1 " />

      <div className="row-start-2 row-span-full col-span-full place-self-start flex flex-wrap items-center justify-center gap-5 max-w-md mx-auto lg:max-w-full">
        <h2 className="text-lg text-center uppercase text-black font-bold w-full self-start md:text-2xl sm:text-white">
          cum functioneaza
        </h2>
        {howTo.map((item) => {
          const { id, title, icon, text } = item;
          return (
            <article
              key={id}
              className="bg-white rounded-3xl flex flex-col p-5 shadow-md w-40 sm:w-44 self-baseline"
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
    </section>
  );
};
