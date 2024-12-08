import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importar Router y sus componentes
import Navbar from './components/NavBar';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import About from './pages/About';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta para la página de inicio */}
        <Route path="/mystats" element={<MyPage />} /> {/* Ruta para la página de estadísticas */}
        <Route path="/about" element={<About />} /> {/* Ruta para la página "About Us" */}
      </Routes>
    </Router>
  );
}

export default App;
