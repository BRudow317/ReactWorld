import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import ResumePage from './pages/ResumePage/ResumePage.jsx';
import DemoPage from './pages/DemoPage/DemoPage.jsx';
import GoogleAddressPage from './pages/GoogleAddressPage/GoogleAddressPage.jsx';
import { Layout } from './layout/Layout.jsx';
import './themes/index.css';
import './themes/MediaTokens.css';

export const ROUTES = {
  HOME: '/',
  GOOGLEADDRESS: '/google-address',
  RESUME: '/resume',
  DEMO: '/demo',
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <BrowserRouter>
        <Routes>
            {/* Parent Route controls the Site Layout */}
            <Route path="/" element={<Layout />}> 
               {/* Index element controls the default page */}
               <Route index element={<HomePage />} />
               <Route path={ROUTES.GOOGLEADDRESS} element={<GoogleAddressPage />} />
               <Route path={ROUTES.RESUME} element={<ResumePage />} />
               <Route path={ROUTES.DEMO} element={<DemoPage />} />
               {/* These routes display to the user and map to your different pages. */}
            </Route>
        </Routes>
      </BrowserRouter>
      </React.StrictMode>
);