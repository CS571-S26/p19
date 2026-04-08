import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';
import Home from './pages/Home';
import Competition from './pages/Competition';
import About from './pages/About';
import './App.css';

export default function App() {
  return (
    <HashRouter>
      <StarBackground />
      <NavBar />
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
