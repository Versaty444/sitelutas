import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/hero';
import About from './components/About';
import MartialArts from './components/MartialArts';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import Contact from './components/contact';
import Footer from './components/Footer';

function App() {
  console.log('App component rendered');

  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <MartialArts />
                <Schedule />
                <Pricing />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
