import fifth from '../images/Path 236.svg';
import sixth from '../images/Path 235.svg';
import seventh from '../images/Path 224.svg';
import React from 'react';
import { servicesList } from '../data';

export const Services = () => {
  return (
    <section className="relative md:mt-32 mt-10">
      {/* <div className="mx-auto text-center max-w-[550px] uppercase">
        <h2 className="text-2xl font-semibold md:text-5xl">
          Lorem, ipsum dolor sit (servicii)
        </h2>
        <p className="text-xs pt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          inventore rem hic assumenda cumque eligendi. Natus modi corrupti
          explicabo debitis, numquam iste iure veritatis tempora ea ipsa
          consectetur quod distinctio!
        </p>
      </div>
      <ul className="w-fit mx-auto grid gap-5 md:grid-cols-4 md:grid-rows-2 grid-cols-2 grid-rows-8 sm:grid-rows-4 p-5 sm:px-20 py-20">
        {servicesList.map((item) => {
          const { id, icon, title, text } = item;
          return (
            <li key={id} className="flex w-[200px] p-5">
              <img src={icon} className="w-10 inline-block" alt="" />
              <div className="flex flex-col">
                <h3 className="uppercase text-sm font-medium white">{title}</h3>
                <p className="text-xs">{text}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="mx-auto block uppercase rounded-full px-16 py-3 text-white border-0 text-xs bg-primary">
        buton
      </button> */}
      <div>
        <img src={fifth} alt="" className="" />
        <img src={fifth} alt="" className="" />
        <img src={sixth} alt="" className="" />
        <img src={seventh} alt="" className="" />
      </div>
    </section>
  );
};
