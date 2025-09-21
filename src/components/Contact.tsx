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

          {/* Two main boxes with equal height */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Contact Form Box */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 glow-elegant h-full animate-slide-up">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Get Your Free Consultation
                </h3>
                <p className="text-muted-foreground text-sm">
                  Tell us about your challenges, and we'll craft a solution that fits your needs perfectly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium text-sm">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium text-sm">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium text-sm">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all resize-none"
                    placeholder="Describe your current challenges, goals, and what you're looking to achieve..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full group mt-6"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Contact Information Box */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 glow-elegant h-full animate-fade-in">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Direct Contact Information
                </h3>
                <p className="text-muted-foreground text-sm">
                  Get in touch with our team for immediate assistance and expert guidance.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-gold flex-shrink-0">
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
            </div>
          </div>

          {/* Our Commitment Section */}
          <div className="max-w-4xl mx-auto">
            <div>

              {/* Guarantees */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Our Commitment to You
                </h3>
                
                {/* Three guarantees in horizontal row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {guarantees.map((guarantee) => (
                    <div key={guarantee.title} className="text-center">
                      <div className="flex justify-center mb-3">
                        <guarantee.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{guarantee.title}</h4>
                      <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                    </div>
                  ))}
                </div>

                {/* Emergency Contact - Centered full width */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Emergency Support
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Critical security issues? Our emergency response team is available 24/7.
                  </p>
                  <Button variant="outline" size="sm" className="mx-auto">
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