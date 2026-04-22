import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';
import Home from './pages/Home';
import Competition from './pages/Competition';
import About from './pages/About';
import Events from './pages/Events';
import Apply from './pages/Apply';
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
          <Route path="/events" element={<Events />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
