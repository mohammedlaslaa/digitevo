import React from 'react';

import Image from 'next/image';

const StepSection = () => (
  <section className="text-gray-600 body-font px-3 md:px-6">
    <div className="container px-2 py-10 mx-auto flex flex-wrap">
      <div className="flex flex-wrap w-full justify-between dark:text-white">
        <div className="lg:w-2/5 xl:w-3/5">
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="uppercase font-medium title-font text-sm text-gray-900 mb-1 dark:text-white">
                Planification
              </h2>
              <p className="leading-relaxed">
                Évaluation des besoins / Rédaction du cachier des charges
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="uppercase font-medium title-font text-sm text-gray-900 mb-1 dark:text-white">
                Conception
              </h2>
              <p className="leading-relaxed">
                Création des wirefrales / Création des maquettes / Définition de
                la structure de l&apos;application / Rédaction des contenus
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="uppercase font-medium title-font text-sm text-gray-900 mb-1 dark:text-white">
                Développement
              </h2>
              <p className="leading-relaxed">
                Développement Front-end / Développement Back-end / Intégration
                des contenus
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="uppercase font-medium title-font text-sm text-gray-900 mb-1 dark:text-white">
                Recettage
              </h2>
              <p className="leading-relaxed">Tests / Débuggage / Formation</p>
            </div>
          </div>
          <div className="flex relative">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="uppercase font-medium title-font text-sm text-gray-900 mb-1 dark:text-white">
                Mise en ligne
              </h2>
              <p className="leading-relaxed">
                Installation sur serveur de l&apos;application / Déploiement de
                l&apos;application sur le serveur de production
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-full lg:w-3/5 xl:w-2/5 relative">
          <Image
            src="/images/application-development.svg"
            alt="Application development"
            layout="fill"
          />
        </div>
      </div>
    </div>
  </section>
);

export default StepSection;
