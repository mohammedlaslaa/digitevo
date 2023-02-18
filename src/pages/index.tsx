import React from 'react';

import { DialogProvider } from 'utils/hooks/useDialog';

import type { NextPage } from 'next';

import MainSection from 'components/Home/MainSection';
import PresentationSection from 'components/Home/PresentationSection';
import ContactUsSection from 'components/Home/ContactUsSection';
import StepSection from 'components/Home/StepSection';

const Home: NextPage = () => (
  <main className="dark:bg-gray-800 bg-white relative">
    <DialogProvider>
      <MainSection />
      <PresentationSection />
      <StepSection />
      <ContactUsSection />
    </DialogProvider>
  </main>
);

export default Home;
