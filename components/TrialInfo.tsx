
import React from 'react';
import Image from 'next/image';

const TrialInfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full md:max-w-md">
        <h3 className="font-sans text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
);

const TrialInfo: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ahs-cream">
      <div className="container mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#fc9b35] mb-4">
          What Happens After the 1-Year Free Trial?
        </h2>
        
        <div className="flex justify-center items-center gap-4 max-w-3xl mx-auto mb-12">
            <Image 
                src="/images/sec-section-left.png" 
                alt="Decorative swirl" 
                className="w-12 h-12 hidden sm:block"
                aria-hidden="true"
                width={48}
                height={48}
            />
            <p className="text-lg text-gray-700 flex-1">
                We know sustainability matters. After your first free year with AHS, you can continue supporting your students with:
            </p>
            <Image 
                src="/images/sec-section-right.png" 
                alt="Decorative swirl" 
                className="w-12 h-12 hidden sm:block"
                aria-hidden="true"
                width={48}
                height={48}
            />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 text-left">
            <TrialInfoCard title="50% Discount for Every Student">
                <span className="text-teal-600 font-medium">Your organization</span> will automatically receive 50% off the total charges for each enrolled student. This allows you to keep providing world-class digital learning at a fraction of the cost.
            </TrialInfoCard>
            
            <TrialInfoCard title="100% Fee Waiver (Full Scholarship)">
                <span className="text-teal-600 font-medium">We understand that</span> sometimes even half the cost can be challenging. That's why we provide a simple request form where you can: Share your reason for requesting 100% off. Instantly apply for a full scholarship for your students. Our team reviews requests quickly, because no child should miss out on learning due to finances.
            </TrialInfoCard>
        </div>
      </div>
    </section>
  );
};

export default TrialInfo;
