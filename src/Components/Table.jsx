import React, { useContext } from 'react';
import Dropdown from './Dropdown';
import { CryptoContext } from '../Api/CryptoContext'

const Table = () => {
  const { crypto } = useContext(CryptoContext);

  if (!crypto) return <p>Loading...</p>;

  return (
    <div className="relative overflow-x-auto shadow-md p-6 sm:rounded-lg">
      <div className="pb-4 bg-[#080c0e] mt-14">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="flex items-center">
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-[#a564af]"
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
              className="block pt-2 pl-10 text-sm text-[#a564af] border border-[#68007a] rounded-lg w-80 bg-[#080c0e] active:border-[#68007a]"
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
            <th scope="col" className="px-6 py-3">Image</th>
            <th scope="col" className="px-6 py-3">Coin</th>
            <th scope="col" className="px-6 py-3">Current Price</th>
            <th scope="col" className="px-6 py-3">Market Cap</th>
            <th scope="col" className="px-6 py-3">24hr High</th>
            <th scope="col" className="px-6 py-3">24hr Low</th>
          </tr>
        </thead>
        <tbody>
          {crypto.map(crypto => (
            <tr
              key={crypto.id}
              className="border-b bg-[#080c0e] border-[#68007a] hover:bg-[#551f5e]"
            >
              <td className="w-4 p-4">
                <div className="flex items-center"></div>
              </td>
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
  );
};

export default Table;
