import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Sobre Nós</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              Patrizio de Sousa Januário

              Sou atleta profissional de MMA desde 2011, com mais de 14 anos de dedicação às artes marciais. Prajied preta de Muay Thai e faixa marrom de Jiu-Jítsu, tenho 12 lutas no cartel, com 10 vitórias e apenas 2 derrotas. Minha trajetória já me levou a lutar em países como Rússia, Itália e Malta, além de participar dos maiores eventos da América Latina.
            </p>
            <p className="text-lg mb-6">
              Fundador do Espaço de Lutas Tiradentes, criei esse projeto com o propósito de transformar vidas por meio das artes marciais. Aqui, oferecemos um ambiente seguro, acolhedor e motivador, onde qualquer pessoa — independentemente da idade, gênero ou condição física — pode treinar, evoluir e conquistar seus objetivos.

              Seja para competir, melhorar a saúde ou apenas se desafiar, aqui é o seu lugar.
              Venha fazer parte dessa família que cresce a cada dia!
            </p>
            <p className="text-lg">
              Com instrutores certificados e experientes, oferecemos treinamento de alta qualidade em Muay Thai, Boxe e Jiu-Jitsu, adaptando as aulas às necessidades individuais de cada praticante.
            </p>
          </div>

          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full aspect-video max-w-xl">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/D0AnWFQzYQs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
