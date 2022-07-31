import third from '../images/Path 236.svg';
import first from '../images/Path 235.svg';
import second from '../images/Path 224.svg';
import React from 'react';
import { servicesList } from '../data';

export const Services = () => {
  return (
    <section className="grid grid-cols-2 mt-10">
      <div className="grid grid-cols-8 col-start-1 col-span-2 row-start-1 row-span-2">
        <img
          src={second}
          alt=""
          className="col-start-1 row-start-1 row-span-2 col-span-2 mt-5"
        />
        <img
          src={first}
          alt=""
          className="col-start-1 row-start-1 row-span-2 col-span-2"
        />
        <img
          src={third}
          alt=""
          className="col-start-8 row-start-1 justify-self-end"
        />
      </div>
      <div className="col-start-1 col-span-2 row-start-1 row-span-2 mt-10 md:mt-0 place-self-center">
        <div className="max-w-md mx-auto px-5">
          <h2 className="font-bold text-sm text-center uppercase mb-2 w-52 mx-auto sm:text-xl md:text-xl">
            Lorem, ipsum dolor sit (servicii)
          </h2>
          <p className="text-xs text-center mb-10 md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            inventore rem hic assumenda cumque eligendi. Natus modi corrupti
            explicabo debitis,
          </p>
        </div>
        <ul className="flex flex-wrap justify-center max-w-md lg:max-w-3xl mx-auto gap-2">
          {servicesList.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <li key={id} className="flex aspect-video items-center w-44">
                <img src={icon} className="w-12 inline-block" alt="" />
                <div className="">
                  <h3 className="uppercase text-sm font-medium white">
                    {title}
                  </h3>
                  <p className="text-xs">{text}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <button className="mx-auto mt-5 block uppercase rounded-full px-16 py-3 font-bold text-white border-0 text-xs bg-primary drop-shadow-lg">
          buton
        </button>
      </div>
    </section>
  );
};
