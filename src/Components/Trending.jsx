import React, { useContext, useState, useEffect } from 'react';
import { CryptoContext } from '../Api/CryptoContext';
import { addCoin } from '../Store/watchlistslice';
import { useDispatch } from 'react-redux';

function Trending() {

  const dispatch = useDispatch();
  const { crypto } = useContext(CryptoContext);

<<<<<<< HEAD
  const [selected, setSelected] = useState('Top 10');
=======
  // Dropdown state
  const [selected, setSelected] = useState('Top 25');
>>>>>>> parent of f0a8789 (update)
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Top 25', 'Top 50', 'Top 75', 'Top 100'];

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
    <div className='bg-[#080c0e] text-center text-[#68007a] font-mono'>
      <div className="relative inline-block ml-4  bg-[#080c0e] text-center mb-6 text-[#68007a]">
        <div
          className="flex items-center justify-between px-4 py-2 text-[#68007a] border border-[#68007a] rounded-md shadow-sm cursor-pointer select-none"
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
          <ul className="absolute z-10 w-30 mt-1 text-[#68007a] border border-[#68007a] rounded-md shadow-lg bg-[#080c0e]">
            {options.map((option) => (
              <li
                key={option}
                className={`px-4 py-2 cursor-pointer hover:bg-[#b978c6] ${
                  option === selected ? 'bg-[#b978c6]' : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='bg-[#080c0e] text-center text-[#68007a] w-full'>
        <table className="w-full text-sm text-left text-[#a564af]">
          <thead className="text-xs text-[#a564af] uppercase bg-[#080c0e] border-b border-[#68007a]">
            <tr>
              <th scope="col" className="p-4"> </th>
              <th scope="col" className="px-6 py-3">   </th>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Market Rank</th>
              <th scope="col" className="px-6 py-3">Coin</th>
              <th scope="col" className="px-6 py-3">Current Price</th>
              <th scope="col" className="px-6 py-3">Market Cap</th>
              <th scope="col" className="px-6 py-3">24hr High</th>
              <th scope="col" className="px-6 py-3">24hr Low</th>
            </tr>
          </thead>
          <tbody>
            {crypto.filter(cryptoItem => cryptoItem.market_cap_rank >= 1 && cryptoItem.market_cap_rank <= selectedNumber).map(filteredCrypto => (
              <tr
                key={filteredCrypto.id}
                className="border-b bg-[#080c0e] border-[#68007a] hover:bg-[#551f5e]"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center"></div>
                </td>
                <td className="px-6 py-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5"
                  onChange={(event) => handleCheckboxChange(event, filteredCrypto)}
                />
                </td>
                <td className="px-6 py-4">
                  <img src={filteredCrypto.image} alt={filteredCrypto.name} width="30" height="30" />
                </td>
                <td className="px-6 py-4">{filteredCrypto.market_cap_rank}</td>
                <td className="px-6 py-4">{filteredCrypto.name}</td>
                <td className="px-6 py-4">${filteredCrypto.current_price}</td>
                <td className="px-6 py-4">${filteredCrypto.market_cap}</td>
                <td className="px-6 py-4">${filteredCrypto.high_24h}</td>
                <td className="px-6 py-4">${filteredCrypto.low_24h}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Trending;
