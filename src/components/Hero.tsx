import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Sparkles, ShieldCheck } from 'lucide-react';
import riteArkLogo from '@/assets/rite-ark-logo.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float delay-1000"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo Section */}
          <div className="mb-4 animate-fade-in -mt-4">
            <img 
              src={riteArkLogo} 
              alt="Rite Ark Technologies - Your Digital ARK of Trust" 
              className="mx-auto h-24 w-auto rounded-2xl shadow-elegant glow-gold"
            />
          </div>

          {/* Hero Content */}
          <div className="space-y-6 animate-slide-up">

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold tracking-tight">
              <span className="gradient-text">RITE ARK</span>
              <br />
              <span className="gradient-text">TECHNOLOGIES LLC</span>
            </h1>
            
            {/* Tagline */}
            <div className="inline-flex items-center justify-center gap-2 text-lg md:text-xl font-medium border border-yellow-400/50 rounded-full px-4 py-2" style={{color: '#FFECB3'}}>
              <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" style={{color: '#FFECB3'}} />
              <span>Your Digital ARK of Trust</span>
            </div>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
              Empowering businesses with cutting-edge cybersecurity, AI automation, 
              and digital marketing solutions that safeguard your future and accelerate growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                variant="hero" 
                size="hero" 
                onClick={() => scrollToSection('services')}
                className="group animate-glow"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="elegant" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="hover-lift"
              >
                <Sparkles className="w-5 h-5" />
                Get Consultation
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 grid grid-cols-3 gap-6 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-xs text-muted-foreground">Secure Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-xs text-muted-foreground">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">∞</div>
                <div className="text-xs text-muted-foreground">Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;