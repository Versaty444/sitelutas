import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Fale conosco</h2>
          <p className="text-xl mb-4">E comece a treinar hoje!</p>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-center items-center text-center">
          <div className="flex flex-col items-center">
            <MapPin className="h-6 w-6 text-red-600 mb-2" />
            <h4 className="font-bold">Endereço</h4>
            <p>Rua congonhal 445, Santa Terezinha</p>
            <p>Belo Horizonte - MG, 31360-020</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Phone className="h-6 w-6 text-red-600 mb-2" />
            <h4 className="font-bold">Telefone</h4>
            <p> (31) 98292-1174</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Mail className="h-6 w-6 text-red-600 mb-2" />
            <h4 className="font-bold">E-mail</h4>
            <p>Patriziotiradentes@gmail.com </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold">Horário de funcionamento</h3>
            <div className="mt-4 text-center">
              <p><span className="font-bold">Segunda a Sexta:</span> 7h às 21h</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold">Redes sociais</h3>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/espacotiradentes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=5531982921174" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors">
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
