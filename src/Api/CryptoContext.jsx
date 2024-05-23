import React, { createContext, useState, useEffect } from 'react';

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const currency = 'usd';
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
        const data = await response.json();
        setCrypto(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCryptos();
  }, []);

  return (
    <CryptoContext.Provider value={{ crypto }}>
      {children}
    </CryptoContext.Provider>
  );
};
