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



demo component 


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UV8PbPvQup1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortColumn, setSortColumn] = useState("price")
  const [sortDirection, setSortDirection] = useState("desc")
  const cryptoPrices = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: 56789.12,
      change24h: 2.5,
      marketCap: 1234567890,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: 1789.45,
      change24h: -1.2,
      marketCap: 234567890,
    },
    {
      name: "Litecoin",
      symbol: "LTC",
      price: 234.67,
      change24h: 0.8,
      marketCap: 45678901,
    },
    {
      name: "Ripple",
      symbol: "XRP",
      price: 0.56,
      change24h: -3.1,
      marketCap: 23456789,
    },
    {
      name: "Chainlink",
      symbol: "LINK",
      price: 28.9,
      change24h: 4.2,
      marketCap: 12345678,
    },
    {
      name: "Polkadot",
      symbol: "DOT",
      price: 42.12,
      change24h: -0.9,
      marketCap: 9876543,
    },
    {
      name: "Uniswap",
      symbol: "UNI",
      price: 21.34,
      change24h: 3.7,
      marketCap: 6543210,
    },
    {
      name: "Aave",
      symbol: "AAVE",
      price: 345.67,
      change24h: -2.4,
      marketCap: 4321098,
    },
  ]
  const filteredCrypto = cryptoPrices.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const sortedCrypto = filteredCrypto.sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
    return 0
  })
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("desc")
    }
  }
  const [news, setNews] = useState([
    {
      title: "Bitcoin Reaches New All-Time High",
      description:
        "The world's largest cryptocurrency, Bitcoin, has reached a new all-time high, surpassing $60,000 per coin.",
      date: "2023-04-12",
    },
    {
      title: "Ethereum Upgrades to London Hard Fork",
      description:
        "The Ethereum network has successfully completed the highly anticipated London hard fork, introducing several improvements to the network.",
      date: "2023-03-28",
    },
    {
      title: "Dogecoin Surges as Elon Musk Tweets About It",
      description:
        "The meme-inspired cryptocurrency Dogecoin has seen a significant price increase after Elon Musk, the CEO of Tesla, tweeted about it.",
      date: "2023-02-08",
    },
    {
      title: "Cardano Launches Smart Contract Functionality",
      description:
        "The Cardano blockchain has launched its much-anticipated smart contract functionality, opening the door for decentralized applications to be built on the network.",
      date: "2023-01-15",
    },
  ])
  return (
    <div className="flex flex-col h-full">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold">Crypto Price Tracker</h1>
      </header>
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search cryptocurrencies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>
        //nav below component
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-muted text-muted-foreground">
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("name")}>
                  Coin{" "}
                  {sortColumn === "name" && (
                    <span className="ml-2">{sortDirection === "asc" ? "\u25B2" : "\u25BC"}</span>
                  )}
                </th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("symbol")}>
                  Symbol{" "}
                  {sortColumn === "symbol" && (
                    <span className="ml-2">{sortDirection === "asc" ? "\u25B2" : "\u25BC"}</span>
                  )}
                </th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("price")}>
                  Price{" "}
                  {sortColumn === "price" && (
                    <span className="ml-2">{sortDirection === "asc" ? "\u25B2" : "\u25BC"}</span>
                  )}
                </th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("change24h")}>
                  24h Change{" "}
                  {sortColumn === "change24h" && (
                    <span className="ml-2">{sortDirection === "asc" ? "\u25B2" : "\u25BC"}</span>
                  )}
                </th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("marketCap")}>
                  Market Cap{" "}
                  {sortColumn === "marketCap" && (
                    <span className="ml-2">{sortDirection === "asc" ? "\u25B2" : "\u25BC"}</span>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedCrypto.map((coin) => (
                <tr key={coin.symbol} className="border-b">
                  <td className="px-4 py-2">{coin.name}</td>
                  <td className="px-4 py-2">{coin.symbol}</td>
                  <td className="px-4 py-2">${coin.price.toFixed(2)}</td>
                  <td className={`px-4 py-2 ${coin.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                    {coin.change24h.toFixed(2)}%
                  </td>
                  <td className="px-4 py-2">${coin.marketCap.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Crypto News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>{article.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{article.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}


