import { Snowflake, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Snowflake className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Refrigeração</h3>
                <p className="text-sm text-primary-foreground/60">Serviços Especializados</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Há mais de 20 anos oferecendo soluções em refrigeração comercial, doméstica e climatização.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#servicos" className="hover:text-primary transition-colors">Refrigeração Comercial</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Refrigeração Doméstica</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Câmaras Frias</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Ar-Condicionado</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>(00) 0000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>contato@refrigeracao.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Rua Exemplo, 123<br />Centro - Sua Cidade/UF</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-6">Redes Sociais</h4>
            <p className="text-primary-foreground/70 mb-4">
              Siga-nos nas redes sociais e fique por dentro das novidades!
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>© {currentYear} Refrigeração - Serviços Especializados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
