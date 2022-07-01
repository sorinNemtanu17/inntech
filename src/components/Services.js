import fifth from '../images/Path 236.svg';
import sixth from '../images/Path 235.svg';
import seventh from '../images/Path 224.svg';

import { servicesList } from '../data';

export const Services = () => {
  return (
    <section className="md:pt-[500px] pt-[600px] relative">
      <img src={fifth} alt="" className="absolute -z-10 right-0 top-[400px]" />
      <img
        src={sixth}
        alt=""
        className="absolute w-[400px] -z-10 left-0 top-[400px]"
      />
      <img src={seventh} alt="" className="absolute -z-20 left-0 " />
      <div className="max-w-[550px] text-center uppercase font-semibold mx-auto md:mt-20 mt-20">
        <h2 className="text-5xl">Lorem, ipsum dolor sit (servicii)</h2>
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
      </button>
    </section>
  );
};
