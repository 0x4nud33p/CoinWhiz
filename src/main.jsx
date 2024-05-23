import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { CryptoProvider } from './Api/CryptoContext.jsx';
import Layout from './Layout/Layout.jsx';
import Home from './Components/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
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
