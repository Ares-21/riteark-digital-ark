import { Button } from '@/components/ui/button';
import { Shield, Brain, Megaphone, ArrowRight, Lock, Cpu, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive protection for your digital assets with enterprise-grade security frameworks, threat monitoring, and incident response protocols.",
      features: ["24/7 Threat Monitoring", "Penetration Testing", "Compliance Management", "Security Audits"],
      accent: Lock,
    },
    {
      icon: Brain,
      title: "AI Automations & Software Solutions",
      description: "Intelligent automation systems that streamline operations, reduce costs, and eliminate human error while scaling your business efficiently.",
      features: ["Process Automation", "Custom AI Models", "Integration Solutions", "Performance Analytics"],
      accent: Cpu,
    },
    {
      icon: Megaphone,
      title: "Digital Marketing & Media IT Solutions",
      description: "Data-driven marketing solutions and custom software that amplify your brand presence and drive measurable business growth.",
      features: ["Marketing Automation", "Analytics Platforms", "Content Management", "Lead Generation"],
      accent: TrendingUp,
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Fortress-Grade</span> Solutions
              <br />for Every Challenge
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
              From cybersecurity fortifications to AI-powered automation, we deliver comprehensive 
              technology solutions that protect, optimize, and accelerate your business growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-subtle border border-border/50 hover:border-primary/50 transition-all duration-500 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex items-stretch animate-fade-in hover-lift`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content Side */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-gold group-hover:shadow-glow transition-all duration-300">
                        <service.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <service.accent className="w-6 h-6 text-primary/60" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground group-hover:gradient-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="elegant" 
                    className="w-fit group/btn"
                    onClick={() => scrollToSection('contact')}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Visual Side */}
                <div className="flex-1 relative min-h-[300px] lg:min-h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <service.icon className="w-32 h-32 text-primary/20 animate-float" />
                        <div className="absolute inset-0 w-32 h-32 border-2 border-primary/30 rounded-full animate-pulse"></div>
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/40 rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/40 rounded-full animate-bounce delay-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center animate-fade-in">
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 lg:p-12 glow-elegant">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Fortify Your <span className="gradient-text">Digital Future?</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our comprehensive technology solutions can transform 
                your business challenges into competitive advantages.
              </p>
              <Button 
                variant="hero" 
                size="hero"
                onClick={() => scrollToSection('contact')}
                className="animate-glow"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;