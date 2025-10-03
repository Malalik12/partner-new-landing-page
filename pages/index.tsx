
import React from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import TrialInfo from '@/components/TrialInfo';
import WhyAHS from '@/components/WhyAHS';
import HowToContinue from '@/components/HowToContinue';
import Commitment from '@/components/Commitment';
import CTA from '@/components/CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Accelerated High School</title>
        <meta name="description" content="A visually appealing, responsive landing page for the Accelerated High School (AHS) partnership program, designed for non-profits." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-ahs-cream font-sans text-gray-800">
        <main>
          <Hero />
          <TrialInfo />
          <WhyAHS />
          <HowToContinue />
          <Commitment />
          <CTA />
        </main>
      </div>
    </>
  );
};

export default HomePage;
