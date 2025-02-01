import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import AdboutPage from './pages/Adbout.js';
import PricesPage from './pages/Prices.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/adbout" element={<AdboutPage />} />
         
      <Route path="/prices" element={<PricesPage />} />
    </Routes>
  );
}

export default App;
