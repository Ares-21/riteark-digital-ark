import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Send, Shield, Clock, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours with a tailored solution for your needs.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Direct Line",
      value: "+971 503 711 579",
      description: "Available 24/7 for urgent matters"
    },
    {
      icon: Mail,
      label: "Email",
      value: "ritearktechnologies@gmail.com",
      description: "We respond within 2 hours"
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value: "UAE",
      description: "Serving clients globally"
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "100% Confidential",
      description: "Your information is protected with enterprise-grade security"
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description: "Initial consultation within 24 hours of contact"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Direct access to our senior technology specialists"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Your <span className="gradient-text">Digital Fortress</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
              Ready to transform your business with cutting-edge technology solutions? 
              Our experts are standing by to create a custom strategy for your success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-up h-full">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 glow-elegant h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    Get Your Free Consultation
                  </h3>
                  <p className="text-muted-foreground">
                    Tell us about your challenges, and we'll craft a solution that fits your needs perfectly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div className="flex-1">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-2 bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all resize-none h-32"
                      placeholder="Describe your current challenges, goals, and what you're looking to achieve..."
                    />
                  </div>

                  <div className="mt-auto">
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full group"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in h-full">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 glow-elegant h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    Direct Contact Information
                  </h3>
                  <p className="text-muted-foreground">
                    Get in touch with our team for immediate assistance and expert guidance.
                  </p>
                </div>
                
                <div className="space-y-6 flex-1">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4 p-4 rounded-xl bg-background/20 border border-border/30 hover:bg-background/30 transition-all">
                      <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-gold">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{info.label}</h4>
                        <p className="text-lg font-medium gradient-text mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Guarantees */}
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    Our Commitment to You
                  </h4>
                  
                  <div className="space-y-3">
                    {guarantees.map((guarantee) => (
                      <div key={guarantee.title} className="flex items-start gap-3">
                        <guarantee.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-foreground text-sm">{guarantee.title}</h5>
                          <p className="text-xs text-muted-foreground">{guarantee.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="mt-6 bg-primary/10 border border-primary/20 rounded-xl p-4">
                  <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-primary" />
                    Emergency Support
                  </h5>
                  <p className="text-xs text-muted-foreground mb-3">
                    Critical security issues? Our emergency response team is available 24/7.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Phone className="w-4 h-4" />
                    Call Emergency Line
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;