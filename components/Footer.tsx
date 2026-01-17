
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t pt-10 pb-6 text-gray-600 text-sm">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h5 className="font-bold text-gray-800 mb-4 uppercase tracking-wider">Institucional</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition">Quem Somos</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Trabalhe Conosco</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-gray-800 mb-4 uppercase tracking-wider">Ajuda e Suporte</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition">Trocas e Devoluções</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Prazos de Entrega</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Como Comprar</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Fale Conosco</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-gray-800 mb-4 uppercase tracking-wider">Atendimento</h5>
          <ul className="space-y-2">
            <li className="font-bold text-lg text-blue-800">(62) 3591-1005</li>
            <li className="flex items-center gap-1">Seg a Sex: <span className="text-gray-900 font-medium">8:00 às 18:00</span></li>
            <li className="flex items-center gap-1">Sáb: <span className="text-gray-900 font-medium">8:00 às 12:00</span></li>
            <li className="mt-3 text-xs leading-relaxed">
              Av. Perimetral, St. Campinas<br/>
              Goiânia - GO, CEP 74500-000
            </li>
          </ul>
        </div>
        
        <div>
           <h5 className="font-bold text-gray-800 mb-4 uppercase tracking-wider">Pagamento</h5>
           <div className="flex gap-2 flex-wrap">
             {/* Payment Methods Placeholders */}
             <div className="bg-white border w-10 h-6 rounded flex items-center justify-center text-[8px] font-bold">VISA</div>
             <div className="bg-white border w-10 h-6 rounded flex items-center justify-center text-[8px] font-bold">MASTER</div>
             <div className="bg-white border w-10 h-6 rounded flex items-center justify-center text-[8px] font-bold">ELO</div>
             <div className="bg-white border w-10 h-6 rounded flex items-center justify-center text-[8px] font-bold">PIX</div>
             <div className="bg-white border w-10 h-6 rounded flex items-center justify-center text-[8px] font-bold">BOLETO</div>
           </div>
           <div className="mt-6">
              <h5 className="font-bold text-gray-800 mb-3 uppercase tracking-wider">Segurança</h5>
              <div className="flex gap-2">
                <div className="bg-gray-200 h-8 w-16 rounded"></div>
                <div className="bg-gray-200 h-8 w-16 rounded"></div>
              </div>
           </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 text-center text-xs">
        <p className="font-semibold text-gray-700">&copy; {new Date().getFullYear()} Total Frio Refrigeração e Peças Ltda. Todos os direitos reservados.</p>
        <p className="mt-1 text-gray-400">CNPJ: 00.000.000/0001-00. Preços e condições de pagamento exclusivos para compras via internet.</p>
      </div>
    </footer>
  );
};

export default Footer;
