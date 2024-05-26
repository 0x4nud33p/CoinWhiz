import React, { useContext, useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { CryptoContext } from '../Api/CryptoContext';
import { addCoin } from '../Store/watchlistslice';
import { useDispatch } from 'react-redux';

const Market = () => {
    const { crypto } = useContext(CryptoContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const dispatch = useDispatch();

    const [selectedCoins, setSelectedCoins] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCrypto, setFilteredCrypto] = useState([]);

    useEffect(() => {
        if (crypto) {
            setFilteredCrypto(
                crypto.filter((coin) =>
                    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [crypto, searchTerm]);

    if (!crypto) {
        return (
            <div className="relative overflow-x-auto shadow-md p-6 bg-[#080c0e] font-mono">
                <Skeleton count={10} height={40} />
            </div>
        );
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCrypto.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCrypto.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCheckboxChange = (event, coin) => {
        if (event.target.checked) {
            dispatch(addCoin(coin));
            console.log(coin)
        }
    };


  return (
    <div>
      <div className="relative overflow-x-auto shadow-md p-6 bg-[#080c0e] font-mono">
        <div className="pb-4 bg-[#080c0e]">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
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
                className="flex pt-2 pl-10 h-10 px-3 py-2 w-80 text-sm bg-transparent border border-[#68007a] rounded-md placeholder:text-[#68007a] focus:outline-none focus:ring-1 focus:ring-[#68007a] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Dropdown />
          </div>
        </div>
        <table className="w-full text-sm text-left text-[#a564af]">
          <thead className="text-xs text-[#a564af] uppercase bg-[#080c0e] border-b border-[#68007a]">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Coin</th>
              <th scope="col" className="px-6 py-3">Current Price</th>
              <th scope="col" className="px-6 py-3">Market Cap</th>
              <th scope="col" className="px-6 py-3">24hr High</th>
              <th scope="col" className="px-6 py-3">24hr Low</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((crypto) => (
              <tr
                key={crypto.id}
                className="border-b bg-[#080c0e] border-[#68007a] hover:bg-[#551f5e]"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-[#68007a]"
                      onChange={(event) => handleCheckboxChange(event, crypto)}
                    />
                  </div>
                </td>
                <td className="px-6 py-4"></td>
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
