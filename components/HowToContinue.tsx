
import React from 'react';
import Image from 'next/image';

const StepCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center w-full max-w-xs flex-1">
        <div className="mb-4 h-16 flex items-center justify-center">
            {icon}
        </div>
        <h3 className="font-sans text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{children}</p>
    </div>
);

const HowToContinue: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ahs-blue-bg relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">

        <Image 
            src="/images/sec-3-star.png" 
            alt="Decorative star" 
            className="absolute top-4 left-4 md:left-16 lg:left-32 w-12 h-12 transform -translate-y-1/2 hidden sm:block"
            aria-hidden="true"
            width={48}
            height={48}
        />
        
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#fd9a31] mb-12">
          How to Continue After Trial
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-12">
            <StepCard
                icon={<Image src="/images/Enroll-your-students.png" alt="Enroll students icon" width={64} height={64} />}
                title="Enroll your students"
            >
                Into the paid plan (50% discount automatically applied).
            </StepCard>
            
            <StepCard
                icon={<Image src="/images/Need-waiver.png" alt="Waiver form icon" width={64} height={64} />}
                title="Need 100% waiver?"
            >
                Just fill our quick form below.
            </StepCard>

            <StepCard
                icon={<Image src="/images/Confirmation-from.png" alt="Confirmation icon" width={64} height={64} />}
                title="Confirmation from"
            >
                AHS → your students continue learning without interruption.
            </StepCard>
        </div>

        <button className="font-display font-bold text-white bg-[#fd9a31] hover:bg-orange-500 rounded-full py-4 px-12 text-lg shadow-lg transform hover:scale-105 transition-transform">
            Upgrade Now
        </button>

        <Image 
            src="/images/sec-3-star.png" 
            alt="Decorative star" 
            className="absolute bottom-12 right-4 md:right-16 lg:right-32 w-12 h-12 hidden sm:block"
            aria-hidden="true"
            width={48}
            height={48}
        />
      </div>
    </section>
  );
};

export default HowToContinue;
