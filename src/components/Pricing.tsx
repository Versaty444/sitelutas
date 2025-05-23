import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Check } from "lucide-react";

type Plan = {
  title: string;
  price: string;
  period: string;
  features: string[];
  message: string;
};

type PlanKey = "mensal" | "trimestral" | "anual" | "duasModalidades";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<PlanKey>("mensal");

  const plans: Record<PlanKey, Plan[]> = {
    mensal: [
      {
        title: "Mensal - 2x por semana",
        price: "R$ 130",
        period: "/mês",
        features: ["Acesso a 2 aulas por semana", "Horários flexíveis", "Acompanhamento de instrutores"],
        message: "Olá, tenho interesse no plano mensal 2x na semana."
      },
      {
        title: "Mensal - 3x por semana",
        price: "R$ 140",
        period: "/mês",
        features: ["Acesso a 3 aulas por semana", "Horários flexíveis", "Acompanhamento de instrutores"],
        message: "Olá, tenho interesse no plano mensal 3x na semana."
      },
      {
        title: "Mensal - 4x por semana",
        price: "R$ 150",
        period: "/mês",
        features: ["Acesso a 4 aulas por semana", "Horários flexíveis", "Acompanhamento de instrutores"],
        message: "Olá, tenho interesse no plano mensal 4x na semana."
      },
      {
        title: "Mensal - Plano Livre",
        price: "R$ 170",
        period: "/mês",
        features: ["Acesso ilimitado", "Horários flexíveis", "Acompanhamento de instrutores", "Treine quantas vezes quiser"],
        message: "Olá, tenho interesse no plano mensal livre."
      }
    ],
    trimestral: [
      {
        title: "Trimestral - 2x por semana",
        price: "R$ 117",
        period: "/mês",
        features: ["Acesso a 2 aulas por semana", "10% de desconto", "Acompanhamento de instrutores"],
        message: "Olá, tenho interesse no plano trimestral 2x na semana."
      },
      {
        title: "Trimestral - 3x por semana",
        price: "R$ 126",
        period: "/mês",
        features: ["Acesso a 3 aulas por semana", "10% de desconto", "Acompanhamento de instrutores"],
        message: "Olá, tenho interesse no plano trimestral 3x na semana."
      },
      {
        title: "Trimestral - 4x por semana",
        price: "R$ 135",
        period: "/mês",
        features: ["Acesso a 4 aulas por semana", "10% de desconto", "Acompanhamento de instrutores"],
        message: "Olá, tenho interesse no plano trimestral 4x na semana."
      },
      {
        title: "Trimestral - Plano Livre",
        price: "R$ 161",
        period: "/mês",
        features: ["Acesso ilimitado", "10% de desconto", "Acompanhamento de instrutores", "Treine quantas vezes quiser"],
        message: "Olá, tenho interesse no plano trimestral livre."
      }
    ],
    anual: [
      {
        title: "Anual - 2x por semana",
        price: "R$ 104",
        period: "/mês",
        features: ["Acesso a 2 aulas por semana", "20% de desconto", "Acompanhamento de instrutores"],
        message: "Olá, tenho interesse no plano anual 2x na semana."
      },
      {
        title: "Anual - 3x por semana",
        price: "R$ 112",
        period: "/mês",
        features: ["Acesso a 3 aulas por semana", "20% de desconto", "Acompanhamento de instrutores"],
        message: "Olá, tenho interesse no plano anual 3x na semana."
      },
      {
        title: "Anual - 4x por semana",
        price: "R$ 120",
        period: "/mês",
        features: ["Acesso a 4 aulas por semana", "20% de desconto", "Acompanhamento de instrutores"],
        message: "Olá, tenho interesse no plano anual 4x na semana."
      },
      {
        title: "Anual - Plano Livre",
        price: "R$ 149",
        period: "/mês",
        features: ["Acesso ilimitado", "20% de desconto", "Acompanhamento de instrutores", "Treine quantas vezes quiser"],
        message: "Olá, tenho interesse no plano anual livre."
      }
    ],
    duasModalidades: [
      {
        title: "Mensal - 2x por semana",
        price: "R$ 205",
        period: "/mês",
        features: ["Acesso a 2 aulas por semana", "Duas modalidades", "Acompanhamento de instrutores"],
        message: "Olá, tenho interesse no plano de 2 modalidades mensal 2x na semana."
      },
      {
        title: "Mensal - 3x por semana",
        price: "R$ 215",
        period: "/mês",
        features: ["Acesso a 3 aulas por semana", "Duas modalidades", "Acompanhamento de instrutores"],
        message: "Olá, tenho interesse no plano de 2 modalidades mensal 3x na semana."
      },
      {
        title: "Mensal - 4x por semana",
        price: "R$ 225",
        period: "/mês",
        features: ["Acesso a 4 aulas por semana", "Duas modalidades", "Acompanhamento de instrutores"],
        message: "Olá, tenho interesse no plano de 2 modalidades mensal 4x na semana."
      },
      {
        title: "Trimestral - 2x por semana",
        price: "R$ 185",
        period: "/mês",
        features: ["Acesso a 2 aulas por semana", "Duas modalidades", "10% de desconto"],
        message: "Olá, tenho interesse no plano de 2 modalidades trimestral 2x na semana."
      },
      {
        title: "Trimestral - 3x por semana",
        price: "R$ 175",
        period: "/mês",
        features: ["Acesso a 3 aulas por semana", "Duas modalidades", "10% de desconto"],
        message: "Olá, tenho interesse no plano de 2 modalidades trimestral 3x na semana."
      },
      {
        title: "Trimestral - 4x por semana",
        price: "R$ 165",
        period: "/mês",
        features: ["Acesso a 4 aulas por semana", "Duas modalidades", "10% de desconto"],
        message: "Olá, tenho interesse no plano de 2 modalidades trimestral 4x na semana."
      },
      {
        title: "Anual - 2x por semana",
        price: "R$ 170",
        period: "/mês",
        features: ["Acesso a 2 aulas por semana", "Duas modalidades", "20% de desconto"],
        message: "Olá, tenho interesse no plano de 2 modalidades anual 2x na semana."
      },
      {
        title: "Anual - 3x por semana",
        price: "R$ 160",
        period: "/mês",
        features: ["Acesso a 3 aulas por semana", "Duas modalidades", "20% de desconto"],
        message: "Olá, tenho interesse no plano de 2 modalidades anual 3x na semana."
      },
      {
        title: "Anual - 4x por semana",
        price: "R$ 150",
        period: "/mês",
        features: ["Acesso a 4 aulas por semana", "Duas modalidades", "20% de desconto"],
        message: "Olá, tenho interesse no plano de 2 modalidades anual 4x na semana."
      }
    ]
  };

  return (
    <section id="pricing" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Invista no seu bem-estar</h2>
          <p className="text-lg mb-4">Escolha o plano que melhor se adapta às suas necessidades</p> 
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {(["mensal", "trimestral", "anual", "duasModalidades"] as PlanKey[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-6 rounded-full text-sm md:text-base font-medium transition-all
                ${activeTab === tab ? 'bg-red-600 text-white' : 'bg-transparent text-red-500 border-2 border-red-500'}`}
            >
              {tab === 'mensal' ? 'Mensal' : 
               tab === 'trimestral' ? 'Trimestral' : 
               tab === 'anual' ? 'Anual' : 
               '2 Modalidades'}
            </button>
          ))}
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          loop
          autoplay={{ delay: 4000 }}
          className="pb-10"
        >
          {plans[activeTab].map((plan, index) => (
            <SwiperSlide key={index}>
              {/* CAIXA PRETA DO PLANO (TODA PRETA) */}
              <div className="h-full mx-2 rounded-xl border-2 border-gray-800 bg-black p-6 shadow-lg text-center flex flex-col">
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-red-500">{plan.title.split(' - ')[0]}</span> - {plan.title.split(' - ')[1]}
                </h3>
                
                {/* CAIXA DE PREÇO (UM TOM MAIS ESCURO QUE O FUNDO) */}
                <div className="mb-6">
                  <div className="inline-block bg-black px-6 py-4 rounded-lg border-2 border-black-800">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-black-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="mb-6 space-y-2 text-left flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={`https://api.whatsapp.com/send?phone=5531982921174&text=${encodeURIComponent(plan.message)}`}
                  className="mt-auto w-full text-center py-3 px-4 rounded-lg font-bold transition bg-red-600 hover:bg-red-700 text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escolher plano
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Seção de Descontos para Famílias e Casais */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Descontos Exclusivos para Famílias e Casais</h3>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-4"></div>
          </div>
          
          <div className="bg-black border-2 border-gray-800 rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Coluna esquerda - Descontos */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-red-500">Aproveite nossos descontos exclusivos:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>2 pessoas:</strong> 10% de desconto para cada</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>3 pessoas ou mais:</strong> 15% de desconto para cada</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Taxa de Matrícula:</strong> R$ 50,00</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Desconto de 20%</strong> para plano anual</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Desconto de 15%</strong> para plano trimestral</span>
                  </li>
                </ul>
              </div>
              
              {/* Coluna direita - Exemplos */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-red-500">Exemplos:</h4>
                <div className="space-y-6">
                  <div className="border-b border-gray-700 pb-4">
                    <p className="font-bold mb-2">Plano de 3x por semana para 2 pessoas:</p>
                    <p className="mb-1">Mensal individual: R$ 130,00</p>
                    <p className="mb-1">Com desconto (10%): R$ 117,00 cada</p>
                    <p className="text-red-500 font-bold">Mensal para 2 pessoas: R$ 234,00 (ao invés de R$ 260,00)</p>
                  </div>
                  <div>
                    <p className="font-bold mb-2">Plano de 4x por semana para 3 pessoas:</p>
                    <p className="mb-1">Mensal individual: R$ 140,00</p>
                    <p className="mb-1">Com desconto (15%): R$ 119,00 cada</p>
                    <p className="text-red-500 font-bold">Mensal para 3 pessoas: R$ 357,00 (ao invés de R$ 420,00)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a
                href={`https://api.whatsapp.com/send?phone=5531982921174&text=${encodeURIComponent("Olá, tenho interesse nos descontos para famílias e casais.")}`}
                className="inline-block py-3 px-8 rounded-lg font-bold transition bg-red-600 hover:bg-red-700 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba mais sobre os descontos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;