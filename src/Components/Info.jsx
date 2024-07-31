import React from 'react';

function Info() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4 lg:space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Trusted by Crypto Enthusiasts Worldwide
          </h2>
          <p className="max-w-[600px] text-gray-700 md:text-lg lg:text-xl">
            Our platform has earned the trust of thousands of crypto traders, thanks to our commitment to security,
            compliance, and user satisfaction.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-6 min-[400px]:flex-row lg:justify-end">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Info;
