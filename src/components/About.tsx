import { Shield, Users, Clock, Award, CheckCircle } from "lucide-react";

const values = [
  { icon: Shield, label: "Confiança" },
  { icon: Users, label: "Atendimento Humanizado" },
  { icon: Clock, label: "Pontualidade" },
  { icon: Award, label: "Qualidade" },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Mais de Duas Décadas de Experiência
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Estamos no mercado há mais de 20 anos, atuando com excelência nos segmentos de refrigeração comercial e doméstica. Nossa equipe é composta por técnicos qualificados e comprometidos com a satisfação do cliente.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Trabalhamos diariamente para desenvolver pessoas no intuito de promover um atendimento humanizado, cordial, rápido e eficiente. Propiciando, assim, um ambiente em que todos ganham: clientes, colaboradores e fornecedores.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-8">
              {[
                "Técnicos certificados e experientes",
                "Atendimento rápido e eficiente",
                "Orçamento sem compromisso",
                "Garantia em todos os serviços",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Values Card */}
          <div className="space-y-8">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Atuar forte no mercado de serviços de refrigeração, proporcionando soluções técnicas e viáveis para sua casa ou estabelecimento. Nosso compromisso é entregar qualidade, agilidade e o melhor custo-benefício para nossos clientes.
              </p>
            </div>

            {/* Values */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Nossos Valores</h3>
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">{value.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
