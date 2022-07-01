import eight from '../images/Path 234.svg';
import nineth from '../images/Path 233.svg';

import { howTo } from '../data';

export const HowTo = () => {
  return (
    <section className="mt-32 md:mt-52 bg-howToBg bg-cover h-[1235px] relative flex items-center">
      <div className="pt-32 mx-auto flex flex-wrap flex-col items-center gap-20 sm:gap-5 sm:flex-row justify-center">
        <img
          src={eight}
          alt=""
          className="absolute sm:z-10 -z-10 left-0 top-10"
        />
        <img
          src={nineth}
          alt=""
          className="absolute -z-10 right-0 -bottom-[100px]"
        />
        <h2 className="self-end text-3xl w-[100%] text-center uppercase sm:text-white font-bold text-black pb-10">
          cum functioneaza
        </h2>
        {howTo.map((item) => {
          const { id, title, icon, text } = item;
          return (
            <article
              key={id}
              className="bg-white rounded-3xl flex flex-col sm:w-[200px] p-5 shadow-md"
            >
              <img src={icon} alt="" className="w-20 sm:w-16 mx-auto" />

              <h3 className="text-md uppercase font-medium mx-auto sm:text-sm pt-2 text-primary">
                {title}
              </h3>
              <p className="text-md text-center sm:text-sm pt-2">{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
