import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Brain, Shield } from 'lucide-react';

const MartialArts = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const arts = [
    {
      title: 'Muay Thai',
      description: 'Conhecida como a "Arte das Oito Armas", o Muay Thai utiliza punhos, cotovelos, joelhos e canelas. Desenvolve força, resistência e técnicas eficientes de combate em pé.',
      benefits: ['Condicionamento físico completo', 'Autodefesa eficiente', 'Redução do estresse', 'Aumento da confiança'],
      image: 'https://rajadamnern.com/wp-content/uploads/2024/09/cover.jpg',
      icon: Shield
    },
    {
      title: 'Boxe',
      description: 'Arte marcial clássica que aprimora a técnica de socos, esquivas e movimentação. Ideal para quem busca melhorar reflexos, coordenação motora e resistência cardiovascular.',
      benefits: ['Melhora da coordenação', 'Queima calórica intensa', 'Desenvolvimento de reflexos', 'Técnicas de defesa pessoal'],
      image: 'https://static.todamateria.com.br/upload/bo/xe/boxe-og.jpg',
      icon: Shield
    },
    {
      title: 'MMA',
      description: 'O Mixed Martial Arts (MMA) combina diversas artes marciais, como Muay Thai, Jiu-Jitsu e Boxe. É um dos esportes de combate mais completos, exigindo habilidades tanto em pé quanto no solo.',
      benefits: ['Treinamento completo e dinâmico', 'Melhora da resistência cardiovascular', 'Habilidades de ataque e defesa', 'Aprimoramento da força e explosão'],
      image: 'https://i.postimg.cc/bJWcGNRQ/Getty-Images-2159892713-e1719755158390.webp',
      icon: Shield
    },
    {
      title: 'Jiu-Jitsu',
      description: 'Arte marcial que foca em técnicas de solo, alavancas e finalizações. Ensina como usar a técnica para superar a força, sendo eficiente para pessoas de todos os biotipos.',
      benefits: ['Defesa pessoal eficaz', 'Desenvolvimento da paciência', 'Melhora da flexibilidade', 'Fortalecimento muscular'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/GABRIEL_VELLA_vs_ROMINHO_51.jpg',
      icon: Brain
    },
    {
      title: 'Nogi',
      description: 'Nogi é uma variação do Jiu-Jitsu onde os praticantes lutam sem o uso do kimono, enfatizando técnicas de controle e finalizações com o uso de grips nas extremidades do corpo e movimentos mais rápidos.',
      benefits: ['Desenvolvimento de habilidades no solo', 'Aumento da velocidade e agilidade', 'Fortalecimento muscular', 'Aprendizado de técnicas adaptadas para combates sem kimono'],
      image: 'https://i.postimg.cc/ncDv9P1w/thought-id-share-a-few-pics-i-took-from-adcc-and-jj-con-v0-i7y0ocebqv1e1.webp',
      icon: Brain
    },
    {
      title: 'Jiu-Jitsu kids',
      description: 'Arte marcial que foca em técnicas de solo, alavancas e finalizações. Ensina como usar a técnica para superar a força, sendo eficiente para pessoas de todos os biotipos.',
      benefits: ['Defesa pessoal eficaz', 'Desenvolvimento da paciência', 'Melhora da flexibilidade', 'Fortalecimento muscular'],
      image: 'https://i.postimg.cc/VvsjCfDq/Festival-Kids-1200x800.jpg',
      icon: Brain
    }
  ];

  return (
    <section id="martial-arts" className="py-12 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
            Conheça nossas modalidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {arts.slice(0, 3).map((art, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className="bg-black rounded-xl overflow-hidden border border-red-800/20 hover:border-red-600/50 transition-all duration-300 shadow-xl hover:shadow-red-600/20 h-full">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <art.icon className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                      <h3 className="text-xl md:text-2xl font-bold text-white">{art.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3 hover:line-clamp-none transition-all duration-300">
                    {art.description}
                  </p>
                  
                  <div className="space-y-2 md:space-y-3">
                    <h4 className="font-semibold text-red-500 flex items-center gap-2 text-sm md:text-base">
                      <Shield className="w-4 h-4" />
                      Benefícios:
                    </h4>
                    <ul className="space-y-1.5 md:space-y-2">
                      {art.benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={hoveredCard === index || isMobile ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-center gap-2 text-xs md:text-sm text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
          {arts.slice(3).map((art, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              onHoverStart={() => setHoveredCard(index + 3)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className="bg-black rounded-xl overflow-hidden border border-red-800/20 hover:border-red-600/50 transition-all duration-300 shadow-xl hover:shadow-red-600/20 h-full">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <art.icon className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                      <h3 className="text-xl md:text-2xl font-bold text-white">{art.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3 hover:line-clamp-none transition-all duration-300">
                    {art.description}
                  </p>
                  
                  <div className="space-y-2 md:space-y-3">
                    <h4 className="font-semibold text-red-500 flex items-center gap-2 text-sm md:text-base">
                      <Shield className="w-4 h-4" />
                      Benefícios:
                    </h4>
                    <ul className="space-y-1.5 md:space-y-2">
                      {art.benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx + 3}
                          initial={{ opacity: 0, x: -20 }}
                          animate={hoveredCard === index + 3 || isMobile ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: (idx + 3) * 0.1 }}
                          className="flex items-center gap-2 text-xs md:text-sm text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MartialArts;
