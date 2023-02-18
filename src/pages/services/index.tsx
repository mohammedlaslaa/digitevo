import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

function Services() {
  return (
    <section className="bg-white leading-6 relative items-center overflow-hidden p-4 space-y-3 md:px-20 lg:px-32 xl:px-48">
      <p className="lg:leading-10 text-center mx-auto lg:w-[70%] xl:p-6 text-gray-600 text-2xl md:text-3xl italic font-semibold">
        <q>
          Bienvenue chez Digitevo, une entreprise de services digitaux
          spécialisée dans le développement JavaScript
        </q>
      </p>
      <div className="text-center lg:text-left space-y-4 text-md lg:text-xl font-light">
        <p className="text-violet-600 mb-3 text-gray-500 first-line:uppercase first-line:tracking-widest first-letter:text-5xl lg:first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900">
          Nous sommes fiers de vous offrir une gamme complète de services pour
          répondre à tous vos besoins en matière de développement web. Notre
          équipe de développeurs utilise les dernières technologies et
          méthodologies pour créer des applications web performantes, fiables et
          scalables qui vous aideront à atteindre vos objectifs commerciaux.
          Nous proposons des services de développement personnalisés, y compris
          des sites web, des applications web, des applications mobiles, des
          systèmes de gestion de contenu et plus encore.
        </p>
        <div className="space-y-4">
          <div className="lg:flex">
            <div className="w-full lg:w-1/3 relative">
              <Image
                src="/images/collaboration.svg"
                alt="Digital innovative"
                width={600}
                height={400}
              />
            </div>

            <p className="w-full lg:w-2/3 self-center">
              Nous comprenons l&apos;importance d&apos;une présence en ligne
              forte pour les entreprises, et nous nous efforçons de fournir des
              solutions de qualité supérieure qui vous aideront à atteindre vos
              objectifs en ligne. Nos développeurs travaillent en étroite
              collaboration avec nos clients pour comprendre leurs besoins et
              leurs objectifs, et nous nous engageons à fournir un soutien
              continu pour vous assurer un développement web réussi. En plus de
              nos compétences en développement, nous offrons également des
              services de conception et de SEO pour vous aider à maximiser votre
              présence en ligne.
            </p>
          </div>
        </div>
        <p className="text-violet-600">
          N&apos;hésitez pas à&nbsp;
          <Link className="font-semibold underline" href="/#contactus">
            nous contacter
          </Link>
          &nbsp; pour en savoir plus sur nos services et comment nous pouvons
          vous aider à atteindre vos objectifs en ligne. Nous sommes impatients
          de vous aider à faire grandir votre entreprise avec des solutions de
          développement web de qualité supérieure.
        </p>
      </div>
    </section>
  );
}

export default Services;
