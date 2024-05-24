import React from 'react';

const Dashboard = () => {
  return (
    <section className="pt-16 bg-[#080c0e] pb-16 font-mono">
      {/* Added pb-16 for padding bottom */}
      <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col text-[#68007a] min-w-0 break-words rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 w-full shadow-xl border border-[#68007a]">
          <div className="px-6">
            <div className="text-center mt-10">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                User Name
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Email Address
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Portfolio
              </div>
              <div>
                <i className="fas fa-university mr-2 text-lg"></i>
                University of Computer Science
              </div>
            </div>
            <div className="py-10 border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-2 text-lg leading-relaxed text-blueGray-700">
                    An artist of considerable range, Jenna the name taken
                    by Melbourne-raised, Brooklyn-based Nick Murphy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
