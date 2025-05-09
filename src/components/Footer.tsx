const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4 space-x-0">
              <img 
                src="https://i.postimg.cc/ZKsR45Tb/iconizer-imf-svg.png" 
                alt="Logo" 
                className="w-24 h-auto mr-1" 
              />
              <span className="text-2xl font-bold">ESPAÇO<span className="text-red-600">TIRADENTES</span></span>
            </div>
            <p className="mb-4">
              Academia especializada em artes marciais, oferecendo treinamento de alta qualidade em Muay Thai, Boxe, Jiu-Jitsu, Jiu-Jitsu kids e Nogi.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600">Links rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-red-600 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-red-600 transition-colors">Sobre Nós</a></li>
              <li><a href="#martial-arts" className="hover:text-red-600 transition-colors">Artes Marciais</a></li>
              <li><a href="#schedule" className="hover:text-red-600 transition-colors">Horários</a></li>
              <li><a href="#pricing" className="hover:text-red-600 transition-colors">Preços</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600">Contato</h3>
            <ul className="space-y-2">
              <li>Rua congonhal 445, Santa Terezinha</li> 
              <li>Belo Horizonte - MG, 31360-020</li>
              <li>(31) 98292-1174</li>
              <li>Patriziotiradentes@gmail.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600">Horário</h3>
            <ul className="space-y-2">
              <li><span className="font-bold">Segunda a Sexta:</span> 7h às 21h</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} ESPAÇO TIRADENTES. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
