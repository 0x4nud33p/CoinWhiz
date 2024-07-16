import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { CryptoContext } from '../Api/CryptoContext';
import { addCoin } from '../Store/watchlistslice';
import { useDispatch } from 'react-redux';

function Trending() {
  const dispatch = useDispatch();
  const { crypto } = useContext(CryptoContext);
  const [selected, setSelected] = useState('Top 25');
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Top 10', 'Top 25', 'Top 50', 'Top 75', 'Top 100'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const handleCheckboxChange = (event, coin) => {
    if (event.target.checked) {
      dispatch(addCoin(coin));
    }
  };

  const selectedNumber = parseInt(selected.split(' ')[1], 10);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-black text-center font-mono"
    >
      <div className="relative inline-block ml-4 bg-white text-black text-center mb-6">
        <div
          className="flex items-center justify-between px-4 py-2 text-black border border-black rounded-md shadow-sm cursor-pointer select-none"
          onClick={toggleDropdown}
        >
          <span className="block truncate">{selected}</span>
          <svg
            className={`transform ${isOpen ? 'rotate-180' : ''} ml-2 h-5 w-5`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v10.586l3.707-3.707a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L9 14.586V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {isOpen && (
          <ul className="absolute z-10 w-30 mt-1 text-black border border-black rounded-md shadow-lg bg-white">
            {options.map((option) => (
              <li
                key={option}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                  option === selected ? 'bg-gray-200' : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="bg-white text-black w-full">
        <table className="w-full text-sm text-left text-gray-800">
          <thead className="text-xs uppercase bg-white border-b border-black">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Market Rank
              </th>
              <th scope="col" className="px-6 py-3">
                Coin
              </th>
              <th scope="col" className="px-6 py-3">
                Current Price
              </th>
              <th scope="col" className="px-6 py-3">
                Market Cap
              </th>
              <th scope="col" className="px-6 py-3">
                24hr High
              </th>
              <th scope="col" className="px-6 py-3">
                24hr Low
              </th>
            </tr>
          </thead>
          <tbody>
            {crypto
              .filter(
                (cryptoItem) =>
                  cryptoItem.market_cap_rank >= 1 &&
                  cryptoItem.market_cap_rank <= selectedNumber
              )
              .map((filteredCrypto) => (
                <motion.tr
                  key={filteredCrypto.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="border-b bg-white border-black hover:bg-gray-200"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5"
                        onChange={(event) =>
                          handleCheckboxChange(event, filteredCrypto)
                        }
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <img
                      src={filteredCrypto.image}
                      alt={filteredCrypto.name}
                      width="30"
                      height="30"
                    />
                  </td>
                  <td className="px-6 py-4">{filteredCrypto.market_cap_rank}</td>
                  <td className="px-6 py-4">{filteredCrypto.name}</td>
                  <td className="px-6 py-4">${filteredCrypto.current_price}</td>
                  <td className="px-6 py-4">${filteredCrypto.market_cap}</td>
                  <td className="px-6 py-4">${filteredCrypto.high_24h}</td>
                  <td className="px-6 py-4">${filteredCrypto.low_24h}</td>
                </motion.tr>
              ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default Trending;
