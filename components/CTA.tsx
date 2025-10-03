
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-ahs-cream py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="lg:w-1/2 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ahs-orange mb-4">
            Continue with AHS Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Give your students the future they deserve—with the support your organization needs.
          </p>
          <button className="font-display font-bold text-white bg-[#fd9a31] hover:bg-orange-500 rounded-full py-4 px-10 text-xl shadow-lg transform hover:scale-105 transition-transform">
            Upgrade Now
          </button>
        </div>
        <div className="lg:w-1/2 w-full max-w-lg">
          <img 
            src="data:image/svg+xml,%3csvg width='512' height='288' viewBox='0 0 512 288' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='512' height='288' rx='12' fill='%23212121'/%3e%3cg opacity='0.8'%3e%3ccircle cx='256' cy='144' r='32' fill='%23000000' fill-opacity='0.5'/%3e%3cpath d='M244 128L274 144L244 160V128Z' fill='white'/%3e%3c/g%3e%3crect x='24' y='248' width='464' height='6' rx='3' fill='%23424242'/%3e%3crect x='24' y='248' width='150' height='6' rx='3' fill='%233B82F6'/%3e%3ccircle cx='174' cy='251' r='5' fill='white'/%3e%3c/svg%3e"
            alt="A video player placeholder"
            className="rounded-xl shadow-2xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
