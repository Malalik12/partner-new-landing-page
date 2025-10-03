
import React from 'react';
import Image from 'next/image';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-display text-xl font-bold text-white">{title}</h4>
      <p className="text-white/90">{children}</p>
    </div>
  </div>
);

const WhyAHS: React.FC = () => {
  return (
    <section className="bg-[#ff8f17] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Image 
        src="/images/sec-3-right.png" 
        alt="Decorative wavy lines" 
        className="absolute bottom-8 right-8 w-24 h-auto hidden md:block"
        aria-hidden="true"
        width={96}
        height={30}
      />
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="lg:w-7/12 space-y-8 lg:pl-5">
          <div className="flex items-center justify-center lg:justify-start gap-4">
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">
                  Why Stay with AHS?
              </h2>
              <Image 
                src="/images/sec-3-star.png" 
                alt="Decorative star" 
                className="w-10 h-10"
                width={40}
                height={40}
              />
          </div>
          <div className="space-y-6">
            <FeatureItem icon={<Image src="/images/Aligned-Curriculum.png" alt="Aligned Curriculum icon" width={64} height={64} />} title="Aligned Curriculum:">
              Matches Pakistan curriculum (Punjab Text, Oxford, Cambridge) + U.S. State Standards.
            </FeatureItem>
            <FeatureItem icon={<Image src="/images/Interactive-Learning.png" alt="Interactive Learning icon" width={64} height={64} />} title="Interactive Learning:">
              Engaging videos, practice questions, worksheets, and assessments.
            </FeatureItem>
            <FeatureItem icon={<Image src="/images/Track-Student-Progress.png" alt="Track Student Progress icon" width={64} height={64} />} title="Track Student Progress:">
              Simple dashboards for teachers & coordinators.
            </FeatureItem>
            <FeatureItem icon={<Image src="/images/Aligned-Curriculum (2).png" alt="Certificate icon" width={64} height={64} />} title="Aligned Curriculum:">
              Matches Pakistan curriculum (Punjab Text, Oxford, Cambridge) + U.S. State Standards.
            </FeatureItem>
          </div>
        </div>
        <div className="lg:w-5/12 w-full flex justify-center items-center mt-8 lg:mt-0">
            <Image 
                src="/images/third-section.png"
                alt="Students learning and engaging in a classroom"
                className="rounded-2xl w-full max-w-md transform hover:scale-105 transition-transform"
                width={600}
                height={450}
            />
        </div>
      </div>
    </section>
  );
};

export default WhyAHS;
