import React, { useEffect, useState } from 'react';

function Cryptos() {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        const fetchCryptos = async () => {
            try {
                const currency = 'usd';
                const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
                const response = await data.json();
                setCryptos(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCryptos(); 
    }, []);

    return (
        <div>
            <h1>Cryptocurrency Prices</h1>
            <ul>
                {cryptos.map((crypto) => (
                    <li key={crypto.id}>
                        {crypto.name} - {crypto.current_price} {crypto.symbol.toUpperCase()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cryptos;
