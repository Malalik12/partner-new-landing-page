
import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#ffebd7]">
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
        
        <div 
          className="absolute top-[55%] -translate-y-1/2 -left-32 w-64 h-64 bg-[#FADCB9] rounded-full opacity-90 hidden lg:block"
          aria-hidden="true" 
        />
        
        <div className="flex flex-col lg:flex-row items-center justify-start">
          
          <div className="lg:w-2/3 text-center lg:text-left relative z-10 lg:pl-16">
            <h1 className="font-display text-5xl sm:text-6xl tracking-wide leading-relaxed font-medium">
              <span className="text-ahs-orange">Partner with AHS</span>
              <br />
              <span className="text-[#168597]">Education Without</span>
              <br />
              <span className="text-[#168597]">Boundaries.</span>
            </h1>
            <p className="font-display mt-6 text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
              At Accelerated High School (AHS), we believe quality education should be accessible to all children—especially those supported by non-profits. That's why we created a special plan designed for your organization.
            </p>
          </div>
          
          <div className="lg:w-1/3 flex justify-center lg:justify-start relative mt-8 lg:mt-0">
            
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-auto aspect-square bg-[#fed09f] rounded-full z-0"
              aria-hidden="true"
            />
            
            <Image 
              src="/images/first-section.png" 
              alt="AHS Mascot shaking hands with a child" 
              className="relative z-10 w-full max-w-md lg:max-w-lg object-contain"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
