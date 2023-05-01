import React from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';
import Typed from 'react-typed';

const MainSection: NextPage = () => (
  <section className="bg-white flex relative z-10 items-center overflow-hidden px-3 md:px-6">
    <div className="container p-4 mx-auto flex flex-col sm:flex-row relative items-center">
      <div className="w-full sm:w-1/2 flex flex-col relative z-20">
        <div className="mt-2 w-1/2 md:w-2/3 lg:w-2/4">
          <span className="inline-block w-3/4 h-1 lg:h-2 bg-violet-500 rounded-full" />
          <span className="inline-block w-[calc(2*((100%/4)/4))] h-1 lg:h-2 ml-1 bg-violet-500 rounded-full" />
          <span className="inline-block w-[calc((100%/4)/4)] h-1 lg:h-2 ml-1 bg-violet-500 rounded-full" />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl flex flex-col leading-none text-gray-800">
          L&apos;agence web
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-4 w-100 md:w-4/6 max-w-sm h-20">
          <Typed
            strings={[
              "L'agence web qui révolutionne le développement de projets grâce à un modèle de collaboration innovant.",
              'Rejoignez la première agence web qui favorise la collaboration entre professionnel du digital pour vos projets.',
              'Digitevo, la solution idéale pour les projets web qui nécessitent une collaboration flexible et performante.',
              "Innovons ensemble, l'agence web qui met en avant un nouveau modèle de collaboration.",
            ]}
            typeSpeed={40}
          />
        </p>
        <div className="flex md:mt-4">
          <a
            href="#contactus"
            className="uppercase py-2 px-4 rounded-lg bg-violet-500 border-2 border-transparent text-white text-xs md:text-base mr-4 hover:bg-orange-300"
          >
            Nous contacter
          </a>
        </div>
      </div>
      <div className="hidden h-96 sm:block sm:w-1/2 relative my-auto">
        <Image
          src="/images/computer_phone.svg"
          alt="Digital innovative"
          layout="fill"
        />
      </div>
    </div>
  </section>
);

export default MainSection;
