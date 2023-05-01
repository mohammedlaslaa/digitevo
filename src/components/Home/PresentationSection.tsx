import React from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';

const PresentationSection: NextPage = () => (
  <section className="bg-white px-3 md:px-6">
    <div className="container py-10 mx-auto">
      <div className="lg:flex lg:items-stretch ">
        <div className="hidden lg:block lg:w-1/3 relative">
          <Image
            src="/images/web_project.avif"
            alt="Projet web"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="w-full space-y-12 lg:w-2/3">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
              Notre expertise
            </h1>

            <div className="mt-2">
              <span className="inline-block w-40 h-1 bg-violet-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-violet-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-violet-500 rounded-full"></span>
            </div>
          </div>

          <div className="md:flex md:items-start md:-mx-4">
            <span className="inline-block p-2 text-violet-500 bg-violet-100 rounded-xl md:mx-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>

            <div className="mt-4 md:mx-4 md:mt-0">
              <h1 className="text-2xl font-semibold text-gray-700 capitalize">
                Développement web
              </h1>

              <p className="mt-3 text-gray-500">
                Site vitrine, e-commerce ou application, nous vous accompagnons
                dans le développement de votre projet. Nous proposons les
                dernières technologies, avec une ergonomie optimale.
              </p>
            </div>
          </div>

          <div className="md:flex md:items-start md:-mx-4">
            <span className="inline-block p-2 text-violet-500 bg-violet-100 rounded-xl md:mx-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </span>

            <div className="mt-4 md:mx-4 md:mt-0">
              <h1 className="text-2xl font-semibold text-gray-700 capitalize">
                Référécement naturel
              </h1>

              <p className="mt-3 text-gray-500">
                Envie d&apos;améliorer votre visibilité sur les moteurs de
                recherche. Etudions ensemble les axes d&apos;améliorations
                possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default PresentationSection;
