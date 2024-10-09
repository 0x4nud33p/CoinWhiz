import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './Store/Store.js';
import { Provider } from 'react-redux';
import Home from './Components/Home.jsx'
import Layout from './Layout/Layout.jsx';
import { Toaster } from 'react-hot-toast';
import { CryptoProvider } from './Api/CryptoContext.jsx';
import { Market,Signin,Signup,Watchlist,About,CoinChart,UserProfile } from './Exports.js';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index path='/' element={<Home />} />
      <Route path='/market' element={<Market />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/watchlist' element={<Watchlist />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<UserProfile />} />
      <Route path='/coin/:id' element={<CoinChart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CryptoProvider>
        <RouterProvider router={router} />
        <Toaster />
      </CryptoProvider>
    </Provider>
  </React.StrictMode>
);
