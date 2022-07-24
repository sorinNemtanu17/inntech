import React from 'react';

import brand from '../images/Group 1782 copy.svg';
import facebook from '../images/Facebook.svg';
import instegram from '../images/Instagram.svg';
import likedin from '../images/linkedin.svg';
import { FooterMenu } from './FooterMenu';

export const Footer = () => {
  return (
    <footer>
      <div className="bg-footerBg grid gap-10 p-5 md:grid-cols-2">
        <div className="flex flex-col gap-10 row-start-2 md:pt-16 md:pl-16 md:row-start-1 md:items-start">
          <img src={brand} alt="" className="w-[150px]" />
          <div className="flex gap-8">
            <img src={facebook} alt="" className="w-5" />
            <img src={instegram} alt="" className="w-5" />
            <img src={likedin} alt="" className="w-5" />
          </div>
        </div>
        <FooterMenu />
      </div>

      <div className="bg-bottomBg bg-cover h-[93px] w-full flex justify-center items-center">
        <h3 className="text-white text-xs font-thin">
          Copyright © 2021 . Toate drepturile rezervate.{' '}
        </h3>
      </div>
    </footer>
  );
};
