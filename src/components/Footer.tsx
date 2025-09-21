import { Shield, Phone, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import riteArkLogo from '@/assets/rite-ark-logo.jpg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const services = [
    'Cybersecurity Solutions',
    'AI Automation',
    'Digital Marketing',
    'Software Development',
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={riteArkLogo} 
                alt="Rite Ark Technologies" 
                className="h-12 w-auto rounded-lg shadow-gold"
              />
              <div>
                <h3 className="text-xl font-bold gradient-text">RITE ARK</h3>
                <p className="text-sm text-muted-foreground">Technologies LLC</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Your trusted partner in cybersecurity, AI automation, and digital transformation. 
              Building digital fortresses that protect and empower your business for the future.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span className="font-medium gradient-text">Your Digital ARK of Trust</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Our Services</h4>
            <div className="space-y-3">
              {services.map((service) => (
                <div 
                  key={service}
                  className="text-muted-foreground text-sm"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="tel:+971503711579"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+971 503 711 579</span>
              </a>
              <a 
                href="mailto:ritearktechnologies@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>ritearktechnologies@gmail.com</span>
              </a>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="group"
            >
              Back to Top
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Rite Ark Technologies LLC. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Built with security and trust in mind</span>
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-primary" />
                <span className="text-primary font-medium">Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;