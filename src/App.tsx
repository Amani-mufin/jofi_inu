import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './home/LandingPage'; 

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <p className="text-4xl font-bold text-blue-500">Theodora</p>
        <Routes>
          <Route path="/" element={<LandingPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
