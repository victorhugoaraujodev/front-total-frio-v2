import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "(00) 0000-0000",
    subtitle: "(00) 90000-0000",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@refrigeracao.com.br",
    subtitle: null,
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Rua Exemplo, 123",
    subtitle: "Centro - Sua Cidade/UF",
  },
  {
    icon: Clock,
    title: "Horário",
    value: "Seg - Sex: 8h às 18h",
    subtitle: "Sáb: 8h às 12h",
  },
];

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Entre em Contato Conosco
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você. Solicite um orçamento sem compromisso!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:shadow-hover transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-muted-foreground">{info.value}</p>
                {info.subtitle && (
                  <p className="text-muted-foreground text-sm">{info.subtitle}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="gradient-primary rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <MessageCircle className="w-16 h-16 text-primary-foreground mx-auto mb-6 animate-float" />
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Fale Conosco pelo WhatsApp
            </h3>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Atendimento rápido e personalizado. Tire suas dúvidas e solicite um orçamento sem compromisso!
            </p>
            <a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-button hover:shadow-hover transition-all duration-300 text-lg px-10 py-6 gap-3">
                <Phone className="w-5 h-5" />
                Chamar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
