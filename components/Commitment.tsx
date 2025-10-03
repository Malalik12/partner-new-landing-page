
import React from 'react';
import Image from 'next/image';
import { CheckmarkIcon } from './icons/CommitmentIcons';

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-center gap-3">
    <div className="flex-shrink-0 w-8 h-8 bg-[#ffefdf] rounded-full flex items-center justify-center">
      <CheckmarkIcon />
    </div>
    <span className="text-lg text-white">{children}</span>
  </li>
);

const Commitment: React.FC = () => {
  return (
    <section className="bg-[#168597] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Image 
        src="/images/sec-4-right.png" 
        alt="Decorative star"
        className="absolute top-10 right-10 w-12 h-12 hidden sm:block"
        aria-hidden="true"
        width={48}
        height={48}
      />
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 z-10">
        <div className="lg:w-7/12 lg:pl-8">
          <div className="flex items-center gap-4 mb-6">
            <Image src="/images/Our-Commitment.png" alt="Handshake commitment icon" width={64} height={64} />
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">Our Commitment</h2>
          </div>
          <p className="text-xl text-white/90 mb-6">
            Education should never stop because of finances. With AHS, your students:
          </p>
          <ul className="space-y-4">
            <ListItem>Learn without barriers.</ListItem>
            <ListItem>Gain confidence through interactive, modern lessons.</ListItem>
            <ListItem>Prepare for a brighter future.</ListItem>
          </ul>
          <Image 
            src="/images/sec-4.png"
            alt="Decorative wavy lines"
            className="mt-6 w-20 h-auto"
            aria-hidden="true"
            width={80}
            height={24}
          />
        </div>
        <div className="lg:w-5/12 mt-8 lg:mt-0">
          <Image 
            src="/images/sec-main-4.png" 
            alt="Student learning on a computer" 
            className="rounded-2xl w-full transform hover:scale-105 transition-transform"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Commitment;
