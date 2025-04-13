import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    { title: 'Mensal - 2x por semana', price: 'R$ 130', period: '/mês', features: ['Acesso a 2 aulas por semana', 'Horários flexíveis', 'Acompanhamento de instrutores'], cta: 'Escolher plano', message: 'Olá, tenho interesse no plano mensal 2x na semana.' },
    { title: 'Mensal - 3x por semana', price: 'R$ 140', period: '/mês', features: ['Acesso a 3 aulas por semana', 'Horários flexíveis', 'Acompanhamento de instrutores'], cta: 'Escolher plano', message: 'Olá, tenho interesse no plano mensal 3x na semana.' },
    { title: 'Mensal - 4x por semana', price: 'R$ 150', period: '/mês', features: ['Acesso a 4 aulas por semana', 'Horários flexíveis', 'Acompanhamento de instrutores'], cta: 'Escolher plano', message: 'Olá, tenho interesse no plano mensal 4x na semana.' },
    { title: 'Trimestral - 2x por semana', price: 'R$ 117', period: '/mês', features: ['Acesso a 2 aulas por semana', '10% de desconto', 'Acompanhamento de instrutores'], cta: 'Escolher plano', message: 'Olá, tenho interesse no plano trimestral 2x na semana.' },
    { title: 'Trimestral - 3x por semana', price: 'R$ 126', period: '/mês', features: ['Acesso a 3 aulas por semana', '10% de desconto', 'Acompanhamento de instrutores'], cta: 'Escolher plano', message: 'Olá, tenho interesse no plano trimestral 3x na semana.' },
    { title: 'Trimestral - 4x por semana', price: 'R$ 135', period: '/mês', features: ['Acesso a 4 aulas por semana', '10% de desconto', 'Acompanhamento de instrutores'], cta: 'Escolher plano', message: 'Olá, tenho interesse no plano trimestral 4x na semana.' },
    { title: 'Anual - 2x por semana', price: 'R$ 104', period: '/mês', features: ['Acesso a 2 aulas por semana', '20% de desconto', 'Acompanhamento de instrutores'], cta: 'Escolher plano', message: 'Olá, tenho interesse no plano anual 2x na semana.' },
    { title: 'Anual - 3x por semana', price: 'R$ 112', period: '/mês', features: ['Acesso a 3 aulas por semana', '20% de desconto', 'Acompanhamento de instrutores'], cta: 'Escolher plano', message: 'Olá, tenho interesse no plano anual 3x na semana.' },
    { title: 'Anual - 4x por semana', price: 'R$ 120', period: '/mês', features: ['Acesso a 4 aulas por semana', '20% de desconto', 'Acompanhamento de instrutores'], cta: 'Escolher plano', message: 'Olá, tenho interesse no plano anual 4x na semana.' },
    { title: 'Mensal - Plano Livre', price: 'R$ 170', period: '/mês', features: ['Acesso livre', 'Horários flexíveis', 'Acompanhamento de instrutores'], cta: 'Escolher plano', message: 'Olá, tenho interesse no plano mensal livre.' },
    { title: 'Trimestral - Plano Livre', price: 'R$ 161', period: '/mês', features: ['Acesso livre', '10% de desconto', 'Acompanhamento de instrutores'], cta: 'Escolher plano', message: 'Olá, tenho interesse no plano trimestral livre.' },
    { title: 'Anual - Plano Livre', price: 'R$ 149', period: '/mês', features: ['Acesso livre', '20% de desconto', 'Acompanhamento de instrutores'], cta: 'Escolher plano', message: 'Olá, tenho interesse no plano anual livre.' }
  ];

  return (
    <section id="pricing" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Invista no seu bem-estar</h2>
          <p className="text-lg mb-4">Escolha o plano que melhor se adapta às suas necessidades</p> 
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div key={index} className="rounded-3xl border border-gray-700 bg-black p-4 shadow-lg text-center">
              <h3 className="text-lg font-bold mb-1">{plan.title}</h3>
              <div className="mb-3">
                <span className="text-2xl font-bold">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <ul className="mb-4 space-y-1 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-3 w-3 text-red-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={`https://api.whatsapp.com/send?phone=5531982921174&text=${encodeURIComponent(plan.message)}`} 
                 className="block text-center py-2 px-3 rounded-lg font-bold transition bg-red-600 hover:bg-red-700 text-white" 
                 target="_blank" 
                 rel="noopener noreferrer">{plan.cta}</a>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-black p-6 rounded-xl text-center mx-auto max-w-3xl">
          <h3 className="text-2xl font-bold mb-4 text-white">Descontos Exclusivos para Famílias e Casais</h3>
          <p className="text-lg mb-4 text-white">Aproveite nossos descontos exclusivos para famílias e casais:</p>
          <div className="text-lg text-white mb-4">
            <p><strong>2 pessoas:</strong> 10% de desconto para cada</p>
            <p><strong>3 pessoas ou mais:</strong> 15% de desconto para cada</p>
          </div>
          <div className="text-lg text-white mb-4">
            <p><strong>Exemplo para 2 pessoas no plano de 3x por semana:</strong></p>
            <p>Mensal individual: R$ 130,00 → Com desconto (10%): R$ 117,00 cada</p>
            <p>Mensal para 2 pessoas: R$ 234,00 (ao invés de R$ 260,00)</p>
          </div>
          <div className="text-lg text-white mb-4">
            <p><strong>Exemplo para 3 pessoas no plano de 4x por semana:</strong></p>
            <p>Mensal individual: R$ 140,00 → Com desconto (15%): R$ 119,00 cada</p>
            <p>Mensal para 3 pessoas: R$ 357,00 (ao invés de R$ 420,00)</p>
          </div>
          <div className="text-lg text-white mb-4">
            <p><strong>Taxa de Matrícula:</strong> R$ 50,00</p>
            <p><strong>Desconto de 20% para plano anual</strong></p>
            <p><strong>Desconto de 15% para plano trimestral</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
