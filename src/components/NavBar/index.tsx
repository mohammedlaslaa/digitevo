import React, { useEffect, useState, useRef } from 'react';

import Link from 'next/link';
import { APPEAR_FROM_RIGHT } from 'utils/constants/animation';
import Image from 'next/image';

const pages = [
  { title: 'Notre expertise', to: '/services' },
  { title: 'Le process', to: '/process' },
  { title: 'Contactez-nous', to: '/#contactus' },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState<{
    menu: boolean | string;
    button: boolean;
  }>({
    menu: false,
    button: false,
  });
  const [isHover, setIsHover] = useState(false);
  const isOpenTimer = useRef<NodeJS.Timeout | number>();

  const toggleIsOpen = () => {
    if (isOpen.menu) {
      setIsOpen({ menu: 'leave', button: false });

      isOpenTimer.current = setTimeout(
        () => setIsOpen({ menu: false, button: false }),
        APPEAR_FROM_RIGHT
      );
    } else {
      setIsOpen({
        menu: true,
        button: true,
      });
    }

    setIsHover(false);
  };

  useEffect(() => () => clearTimeout(isOpenTimer.current), []);

  return (
    <header className="flex items-center z-20 w-full py-4">
      {isOpen.menu && (
        <div
          className={`fixed h-full w-full right-0 top-0 z-30 transition duration-1000 ${
            isOpen.menu !== 'leave' ? 'bg-violet-100/95' : 'bg-transparent'
          }`}
        >
          <div
            className={`flex flex-col right-0 fixed h-full w-full md:w-1/2 lg:w-1/3 bg-violet-300 text-white pt-20 z-30 lg:text-3xl space-y-3 ${
              isOpen.menu === 'leave'
                ? 'animate-leave-to-right'
                : 'animate-appear-from-right'
            }`}
          >
            <Link href="/">
              <button
                className="py-2 px-6 lg:mt-6 hover:text-black"
                onClick={toggleIsOpen}
              >
                Accueil
              </button>
            </Link>
            {pages.map(({ title, to }) => (
              <Link href={to} key={to}>
                <button
                  className="py-2 px-6 hover:text-black"
                  onClick={toggleIsOpen}
                >
                  {title}
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-gray-800 font-marck text-6xl h-16">
          <Link href="/">
            <a className="relative flex items-center">
              <div className="hidden sm:block">
                <Image
                  src="/images/digitevo_logo.png"
                  alt="Logo Digitevo"
                  width={60}
                  height={60}
                />
              </div>
              <p className="sm:ml-2">
                dig<span className="text-violet-500">it</span>evo
              </p>
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="w-10 h-10 relative focus:outline-none ml-4 z-40"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => toggleIsOpen()}
          >
            <span
              className={`block absolute h-0.5 w-8 ml-0 right-0 bg-current transform transition duration-500 ease-in-out ${
                isHover ? 'bg-gray-500' : ''
              } ${isOpen.button ? 'rotate-45' : '-translate-y-1.5'}`}
            />
            <span
              className={`block absolute h-0.5 w-7 right-0 bg-current transform transition duration-500 ease-in-out ${
                isHover ? 'bg-gray-500' : ''
              } ${isOpen.button ? 'opacity-0' : ''}`}
            />
            <span
              className={`block absolute h-0.5 ${
                isOpen.menu && isOpen.menu !== 'leave' ? 'w-8' : 'w-6'
              } right-0 bg-current transform transition duration-500 ease-in-out ${
                isHover ? 'bg-gray-500' : ''
              } ${isOpen.button ? '-rotate-45' : 'translate-y-1.5'}`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
