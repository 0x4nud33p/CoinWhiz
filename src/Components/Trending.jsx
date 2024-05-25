import React, { useContext, useState, useEffect } from 'react';
import { CryptoContext } from '../Api/CryptoContext';

function Trending() {
  const { crypto } = useContext(CryptoContext);

  const [selected, setSelected] = useState('Top 10');
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Top 10','Top 25', 'Top 50', 'Top 75', 'Top 100'];

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
