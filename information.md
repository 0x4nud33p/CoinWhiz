export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;


VITE_APP_WRITE_PROJECT_URL=https://cloud.appwrite.io/v1
VITE_APP_WRITE_PROJECT_ID=66540918000ca5b96681
VITE_APP_WRITE_DATABASE_ID=6654105600341b67608a
VITE_APP_WRITE_COLLECTION_ID=6654107e002f6586780f



// card component : 
{crypto.map((item, index) => (
            <div key={index} className="px-2">
              <div className="border border-[#68007a] relative h-[400px] w-[300px] rounded-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="z-0 h-3/4 w-full max-w-xs rounded-md object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <div className="flex items-center">
                    <h1 className="text-sm text-[#68007a] bg-gradient-to-r from-[#68007a] via-[#70217e] to-[#68007a] bg-clip-text font-extrabold text-transparent text-center select-auto">
                      Current Price: ${item.current_price.toFixed(3)}
                    </h1>
                  </div>
                  <div className="space-x-2 mt-2">
                    <button
                      type="button"
                      className={`font-medium text-sm px-1 py-2 text-center ${
                        item.price_change_percentage_24h >= 0
                          ? 'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300'
                          : 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300'
                      }`}
                    >
                      {item.price_change_percentage_24h >= 0 
                        ? `+${item.price_change_percentage_24h.toFixed(2)}%` 
                        : `${item.price_change_percentage_24h.toFixed(2)}%`}
                    </button>
                    <button className="p-2 inline-flex cursor-pointer items-center text-sm hover:text-[#68007a] font-semibold text-[#68007a] border border-[#68007a]">
                      Add to Watchlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}