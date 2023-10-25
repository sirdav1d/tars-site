'use client';

import Lottie from 'lottie-react';
import { GoTrophy } from 'react-icons/go';

type FeatureProps = {
  headline?: string;
  text?: string;
  benefits?: string[];
  positionImage?: string;
  lottie?: any;
};

export default function FeatureSection({
  headline,
  text,
  benefits,
  positionImage,
  lottie,
}: FeatureProps) {
  const styleLottie = {
    width: '90%',
    heigth: '90%',
  };
  return (
    <div
      data-position={positionImage}
      className="data-[position=left]:md:flex-row-reverse max-w-[1280px] md:mx-auto flex flex-col md:flex-row mx-6 gap-4 items-center"
    >
      <div className="flex w-full flex-col py-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h3 className="font-bold text-2xl text-center md:text-left font-montserratTitle">
              {headline}
            </h3>
            <span className="w-[120px] h-2 bg-brand-blue-500 rounded-full mt-1 drop-shadow-icons " />
          </div>

          <p className="hidden md:block">{text}</p>
        </div>

        <div className="mt-8 flex gap-5 flex-row items-center justify-center md:justify-start">
          {benefits?.map((b, index) => {
            return (
              <div
                className="flex md:justify-center gap-1 items-center "
                key={index}
              >
                <div className="text-brand-blue-500  drop-shadow-icons animate-pulse">
                  <GoTrophy size={20} className="md:w-6" />
                </div>

                <li className="text-xs md:text-base font-montserratTitle">{b}</li>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" w-full md:w-[100%] md:h-[400px]">
        <Lottie style={styleLottie} animationData={lottie}></Lottie>
      </div>
    </div>
  );
}
