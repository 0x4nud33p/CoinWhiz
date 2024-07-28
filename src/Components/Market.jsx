import React, { useContext, useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Skeleton from 'react-loading-skeleton';
import { motion } from 'framer-motion';
import 'react-loading-skeleton/dist/skeleton.css';
import { CryptoContext } from '../Api/CryptoContext';
import { addCoin } from '../Store/watchlistslice';
import { useDispatch } from 'react-redux';

const Market = () => {
  const { crypto } = useContext(CryptoContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCrypto, setFilteredCrypto] = useState([]);
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    if (crypto) {
      setFilteredCrypto(
        crypto.filter((coin) =>
          coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [crypto, searchTerm]);

  const handleSort = (column) => {
    const direction =
      sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(direction);
    setSortColumn(column);

    const sorted = [...filteredCrypto].sort((a, b) => {
      if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredCrypto(sorted);
  };

  if (!crypto) {
    return (
      <div className="relative overflow-x-auto shadow-md p-6 bg-white text-black font-mono">
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
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <div className="relative overflow-x-auto shadow-md p-6 bg-white text-black font-mono">
        <div className="pb-4 bg-white">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="flex items-center">
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-6 text-black"
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
                className="flex pt-2 pl-10 h-10 px-3 py-2 w-full md:w-80 text-sm text-black bg-transparent border border-black rounded-md placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-2 cursor-pointer"></th>
                <th className="px-4 py-2 cursor-pointer"></th>
                <th
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => handleSort('name')}
                >
                  Coin
                  {sortColumn === 'name' && (
                    <span className="ml-2">
                      {sortDirection === 'asc' ? '\u25B2' : '\u25BC'}
                    </span>
                  )}
                </th>
                <th
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => handleSort('symbol')}
                >
                  Symbol
                  {sortColumn === 'symbol' && (
                    <span className="ml-2">
                      {sortDirection === 'asc' ? '\u25B2' : '\u25BC'}
                    </span>
                  )}
                </th>
                <th
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => handleSort('current_price')}
                >
                  Price
                  {sortColumn === 'current_price' && (
                    <span className="ml-2">
                      {sortDirection === 'asc' ? '\u25B2' : '\u25BC'}
                    </span>
                  )}
                </th>
                <th
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => handleSort('high_24h')}
                >
                  24h High
                  {sortColumn === 'high_24h' && (
                    <span className="ml-2">
                      {sortDirection === 'asc' ? '\u25B2' : '\u25BC'}
                    </span>
                  )}
                </th>
                <th
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => handleSort('low_24h')}
                >
                  24h Low
                  {sortColumn === 'low_24h' && (
                    <span className="ml-2">
                      {sortDirection === 'asc' ? '\u25B2' : '\u25BC'}
                    </span>
                  )}
                </th>
                <th
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => handleSort('market_cap')}
                >
                  Market Cap
                  {sortColumn === 'market_cap' && (
                    <span className="ml-2">
                      {sortDirection === 'asc' ? '\u25B2' : '\u25BC'}
                    </span>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((crypto) => (
                <motion.tr
                  key={crypto.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="border-b bg-white border-gray-200 hover:bg-gray-200"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5"
                        onChange={(event) => handleCheckboxChange(event, crypto)}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <img
                      src={crypto.image}
                      alt={crypto.name}
                      width="30"
                      height="30"
                      className="rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4">{crypto.name}</td>
                  <td className="px-6 py-4">{crypto.symbol}</td>
                  <td className="px-6 py-4">${crypto.current_price}</td>
                  <td className="px-6 py-4">${crypto.high_24h}</td>
                  <td className="px-6 py-4">${crypto.low_24h}</td>
                  <td className="px-6 py-4">${crypto.market_cap}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-wrap justify-center bg-white p-2">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
          className={`mx-1 my-2 px-4 py-2 rounded-md text-sm font-medium ${
            currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-black text-white hover:bg-gray-500'
          }`}
        >
          Previous
        </motion.button>
        {Array.from({ length: totalPages }, (_, index) => (
          <motion.button
            key={index + 1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: (index + 1) * 0.1 }}
            onClick={() => handleClick(index + 1)}
            className={`mx-1 my-2 px-4 py-2 rounded-md text-sm font-medium ${
              currentPage === index + 1
                ? 'bg-gray-500 text-white'
                : 'bg-white text-black hover:bg-gray-300'
            }`}
          >
            {index + 1}
          </motion.button>
        ))}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`mx-1 my-2 px-4 py-2 rounded-md text-sm font-medium ${
            currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-black text-white hover:bg-gray-500'
          }`}
        >
          Next
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Market;
