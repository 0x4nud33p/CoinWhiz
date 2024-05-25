import React, { useContext, useState } from 'react';
import Dropdown from './Dropdown';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CryptoContext } from '../Api/CryptoContext';


const Market = () => {
  const { crypto } = useContext(CryptoContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (!crypto) {
    return (
      <div className="relative overflow-x-auto shadow-md p-6 bg-[#080c0e] font-mono">
        <Skeleton count={10} height={40} />
      </div>
    );
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = crypto.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(crypto.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md p-6 bg-[#080c0e] font-mono">
        <div className="pb-4 bg-[#080c0e]">
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="flex items-center">
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-6 text-[#a564af]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="flex  pt-2 pl-10 h-10 px-3 py-2 w-80 text-sm bg-transparent border border-[#68007a] rounded-md placeholder:text-[#68007a] focus:outline-none focus:ring-1 focus:ring-[#68007a] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Search"
              />
            </div>
            <Dropdown />
          </div>
        </div>
        <table className="w-full text-sm text-left text-[#a564af]">
          <thead className="text-xs text-[#a564af] uppercase bg-[#080c0e] border-b border-[#68007a]">
            <tr>
              <th scope="col" className="p-4"> </th>
              <th scope="col" className="px-6 py-3">  </th>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Coin</th>
              <th scope="col" className="px-6 py-3">Current Price</th>
              <th scope="col" className="px-6 py-3">Market Cap</th>
              <th scope="col" className="px-6 py-3">24hr High</th>
              <th scope="col" className="px-6 py-3">24hr Low</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(crypto => (
              <tr
                key={crypto.id}
                className="border-b bg-[#080c0e] border-[#68007a] hover:bg-[#551f5e]"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center"></div>
                </td>
                <td className="px-6 py-4"><label className="relative block cursor-pointer select-none">
                <input type="checkbox" className="absolute opacity-0 h-0 w-0 peer" />
                <svg
                  className="relative w-4 h-4 md:w-8 md:h-18 lg:w-10 lg:h-10 fill-current text-[#706f70] transition-transform duration-300 peer-checked:text-[#68007a] peer-hover:scale-110"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g>
                      <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521 c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506 c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625 c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191 s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586 s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path>
                    </g>
                  </g>
                </svg>
                </label></td>
                <td className="px-6 py-4">
                  <img src={crypto.image} alt={crypto.name} width="30" height="30" />
                </td>
                <td className="px-6 py-4">{crypto.name}</td>
                <td className="px-6 py-4">${crypto.current_price}</td>
                <td className="px-6 py-4">${crypto.market_cap}</td>
                <td className="px-6 py-4">${crypto.high_24h}</td>
                <td className="px-6 py-4">${crypto.low_24h}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination component */}
      <div className="flex flex-wrap justify-center bg-[#080c0e] p-2">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="m-1 cursor-pointer text-xs md:text-sm font-semibold text-[#68007a] disabled:opacity-50"
      >
        &larr; Previous
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index + 1)}
          className={`m-1 flex items-center rounded-md border border-[#68007a] px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm text-[#68007a] hover:scale-105 ${
            currentPage === index + 1 ? 'bg-[#68007a] text-white' : ''
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="m-1 text-xs md:text-sm font-semibold text-[#68007a] disabled:opacity-50"
      >
        Next &rarr;
      </button>
    </div>
    </div>
  );
};

export default Market;
