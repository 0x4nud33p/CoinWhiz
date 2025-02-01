# CoinWhiz - Cryptocurrency Price Tracker

*A simple and intuitive cryptocurrency price tracker built using the MERN stack.*

## 📌 Project Overview
CoinWhiz is a cryptocurrency price tracking web application that provides real-time data on various cryptocurrencies. It fetches live market data using the **CoinGecko API** and offers an interactive user experience powered by **Redux** for state management.

## 🚀 Features
- Real-time cryptocurrency prices & market data
- Search and filter cryptocurrencies by name or symbol
- Detailed coin information including market cap, volume, and price changes
- Responsive UI for seamless experience across devices
- Optimized state management with **Redux**
- Secure backend with **Express.js & MongoDB**

## 🛠️ Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API:** CoinGecko API
- **State Management:** Redux Toolkit

## 🔧 Installation & Setup
### Prerequisites
- Node.js installed
- MongoDB running locally or via Atlas

### Steps to Run the Project
#### 1️⃣ Clone the Repository
```sh
$ git clone https://github.com/anudeep009/CoinWhiz.git
$ cd CoinWhiz
```

#### 2️⃣ Install Dependencies
```sh
$ cd client && npm install
$ cd server && npm install
```

#### 3️⃣ Set Up Environment Variables
Create a `.env` file in the `server` directory and add:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

#### 4️⃣ Start the Development Server
```sh
# Start backend server
$ cd server && npm start

# Start frontend
$ cd client && npm start
```
The application will be available at:  `http://localhost:3000`

## 📌 Contributing
Feel free to open issues or submit PRs to improve the project. Contributions are always welcome!

## 📜 License
This project is licensed under the **MIT License**.

## 🔗 Links
- **GitHub Repository:** [CoinWhiz](https://github.com/anudeep009/CoinWhiz)
- **Live Demo:** *[CoinWhiz](https://coin-whiz.vercel.app/)*
