import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './Store/Store.js';
import { Provider } from 'react-redux';
import Home from './Components/Home.jsx'
import Layout from './Layout/Layout.jsx';
import { Toaster } from 'react-hot-toast';
import { CryptoProvider } from './Api/CryptoContext.jsx';
import { Market,Signin,Signup,Watchlist,Chart } from './Exports.js';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index path='/Home' element={<Home />} />
      <Route path='/Market' element={<Market />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Signin' element={<Signin />} />
      <Route path='/Chart' element={<Chart />} />
      <Route path='Watchlist' element={<Watchlist />} />
      <Route index element={<Home />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <CryptoProvider>
      <RouterProvider router={router} />
    </CryptoProvider>
    </Provider>
  </React.StrictMode>
);
