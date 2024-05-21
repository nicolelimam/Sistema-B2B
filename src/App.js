import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import CadastroPage from './Components/CadastroPage/CadastroPage'; 
import HomeDashboard from './Components/Vendedor/HomeDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path='/home-vendedor' element={<HomeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
