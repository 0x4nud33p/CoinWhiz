import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { CryptoProvider } from './Api/CryptoContext.jsx';
import Layout from './Layout/Layout.jsx';
import Home from './Components/Home.jsx'
import { Market } from './Exports.js';
import {Trending} from './Exports.js';
import {Dashboard} from './Exports.js';
import {Signin} from  './Exports.js';
import {Signup} from './Exports.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index path='/Home' element={<Home />} />
      <Route path='/Market' element={<Market />} />
      <Route path='/Trending' element={<Trending />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Signin' element={<Signin />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CryptoProvider>
      <RouterProvider router={router} />
    </CryptoProvider>
  </React.StrictMode>
);
