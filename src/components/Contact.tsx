import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Send, Shield, Clock, Users, Globe } from 'lucide-react';

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

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours with a tailored solution for your needs.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Message Failed to Send",
        description: "Please try again or contact us directly at ritearktechnologies@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      value: "+971 503 711 579"
    },
    {
      icon: Mail,
      label: "Email",
      value: "ritearktechnologies@gmail.com"
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value: "UAE - Serving clients globally"
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
    <section id="contact" className="py-16 bg-gradient-subtle pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Build Your <span className="gradient-text">Digital Fortress</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Ready to transform your business with cutting-edge technology solutions? 
              Our experts are standing by to create a custom strategy for your success.
            </p>
          </div>

          {/* Two main boxes with equal height */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {/* Contact Form Box */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 glow-elegant h-full animate-slide-up">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  Get Your Free Consultation
                </h3>
                <p className="text-muted-foreground text-xs">
                  Tell us about your challenges, and we'll craft a solution that fits your needs perfectly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
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
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 glow-elegant h-full animate-fade-in">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  Direct Contact Information
                </h3>
                <p className="text-muted-foreground text-xs">
                  Get in touch with our team for immediate assistance and expert guidance.
                </p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center shadow-gold flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1 text-sm">{info.label}</h4>
                      <p className="text-base font-medium gradient-text mb-1">{info.value}</p>
                    </div>
                  </div>
                ))}
                
                {/* Social Media Links */}
                <div className="mt-6 pt-4 border-t border-border/20">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground mb-3">Follow Us</p>
                    <p className="text-xs text-muted-foreground">
                      <strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=61581266492380" target="_blank" rel="noopener noreferrer" className="gradient-text hover:underline">facebook.com/profile.php?id=61581266492380</a>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>Instagram:</strong> <a href="https://www.instagram.com/riteark/" target="_blank" rel="noopener noreferrer" className="gradient-text hover:underline">@riteark</a>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rite-ark-693a45385" target="_blank" rel="noopener noreferrer" className="gradient-text hover:underline">linkedin.com/in/rite-ark-693a45385</a>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>X (Twitter):</strong> <a href="https://x.com/RiteArkTech" target="_blank" rel="noopener noreferrer" className="gradient-text hover:underline">@RiteArkTech</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Commitment Section */}
          <div className="max-w-3xl mx-auto">
            <div>

              {/* Guarantees */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  Our Commitment to You
                </h3>
                
                {/* Three guarantees in horizontal row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {guarantees.map((guarantee) => (
                    <div key={guarantee.title} className="text-center">
                      <div className="flex justify-center mb-2">
                        <guarantee.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1 text-sm">{guarantee.title}</h4>
                      <p className="text-xs text-muted-foreground">{guarantee.description}</p>
                    </div>
                  ))}
                </div>

                {/* Emergency Contact - Centered full width */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
                  <h4 className="font-semibold text-foreground mb-1 flex items-center justify-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-primary" />
                    Emergency Support
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3">
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