const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://i.postimg.cc/3R51q1sG/TIRADENTES.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
          Bem-vindo ao espaço
        </h1>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-red-600">
          TIRADENTES
        </h2>

        <a 
          href="#schedule" 
          className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg"
        >
          Confira nossos horários
        </a>
      </div>
    </section>
  );
};

export default Hero;
