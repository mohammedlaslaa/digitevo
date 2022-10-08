import React from 'react';

import type { NextPage } from 'next';

import MainSection from 'components/Home/MainSection';
import PresentationSection from 'components/Home/PresentationSection';
import ContactUsSection from 'components/Home/ContactUsSection';
import StepSection from 'components/Home/StepSection';

const Home: NextPage = () => (
  <main className="dark:bg-gray-800 bg-white relative">
    <MainSection />
    <PresentationSection />
    <StepSection />
    <ContactUsSection />
  </main>
);

export default Home;
