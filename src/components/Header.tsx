import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://i.postimg.cc/ZKsR45Tb/iconizer-imf-svg.png"
              alt="Logo Espaço Tiradentes"
              className="w-24 h-auto cursor-pointer"
              onClick={() => scrollToSection('about')}
            />
            <span
              className="text-2xl font-bold cursor-pointer"
              onClick={() => scrollToSection('about')} 
            >
              ESPAÇO<span className="text-red-600">TIRADENTES</span>
            </span>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a
              onClick={() => scrollToSection('home')}
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Início
            </a>
            <a
              onClick={() => scrollToSection('about')}
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Sobre Nós
            </a>
            <a
              onClick={() => scrollToSection('martial-arts')}
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Artes Marciais
            </a>
            <a
              onClick={() => scrollToSection('schedule')}
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Horários
            </a>
            <a
              onClick={() => scrollToSection('pricing')}
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Preços
            </a>
            <a
              onClick={() => scrollToSection('contact')}
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Contato
            </a>
          </nav>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
              <a
                onClick={() => scrollToSection('home')}
                className="hover:text-red-600 transition-colors"
              >
                Início
              </a>
              <a
                onClick={() => scrollToSection('about')}
                className="hover:text-red-600 transition-colors"
              >
                Sobre Nós
              </a>
              <a
                onClick={() => scrollToSection('martial-arts')}
                className="hover:text-red-600 transition-colors"
              >
                Artes Marciais
              </a>
              <a
                onClick={() => scrollToSection('schedule')}
                className="hover:text-red-600 transition-colors"
              >
                Horários
              </a>
              <a
                onClick={() => scrollToSection('pricing')}
                className="hover:text-red-600 transition-colors"
              >
                Preços
              </a>
              <a
                onClick={() => scrollToSection('contact')}
                className="hover:text-red-600 transition-colors"
              >
                Contato
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
