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
      const response = await fetch('https://hzxmftyinuahpumwxqaz.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorText = 'Failed to send message';
        try {
          const data = await response.json();
          errorText = (data?.error || data?.message || errorText);
        } catch {}
        throw new Error(errorText);
      }

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours with a tailored solution for your needs.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form submission error:', error);
      const message = error instanceof Error ? error.message : 'Unknown error';
      toast({
        title: "Message Failed to Send",
        description: message || "Please try again or contact us directly at ritearktechnologies@gmail.com",
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
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-gold flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1 text-sm leading-tight">{info.label}</h4>
                      <p className="text-base font-medium gradient-text leading-tight break-words">{info.value}</p>
                    </div>
                  </div>
                ))}
                
                {/* Social Media Links */}
                <div className="mt-8 pt-6 border-t border-border/20">
                  <h4 className="text-sm font-semibold text-foreground mb-4">Connect With Us</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61581266492380" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 p-3 bg-background/30 border border-border/40 rounded-lg hover:bg-background/50 hover:border-primary/30 transition-all group"
                    >
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-medium text-foreground">Facebook</div>
                        <div className="text-xs text-muted-foreground truncate">Follow for updates</div>
                      </div>
                    </a>

                    <a 
                      href="https://www.instagram.com/riteark/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 p-3 bg-background/30 border border-border/40 rounded-lg hover:bg-background/50 hover:border-primary/30 transition-all group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zm5.82 13.613c0 1.536-1.248 2.784-2.784 2.784H8.967c-1.536 0-2.784-1.248-2.784-2.784V8.527c0-1.536 1.248-2.784 2.784-2.784h6.086c1.536 0 2.784 1.248 2.784 2.784v5.086z"/>
                          <path d="M12.017 7.729c-2.359 0-4.27 1.911-4.27 4.27s1.911 4.27 4.27 4.27 4.27-1.911 4.27-4.27-1.911-4.27-4.27-4.27zm0 6.826c-1.412 0-2.556-1.145-2.556-2.556s1.145-2.556 2.556-2.556 2.556 1.145 2.556 2.556-1.145 2.556-2.556 2.556z"/>
                          <ellipse cx="16.943" cy="7.056" rx=".956" ry=".956"/>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-medium text-foreground">Instagram</div>
                        <div className="text-xs text-muted-foreground truncate">@riteark</div>
                      </div>
                    </a>

                    <a 
                      href="https://www.linkedin.com/in/rite-ark-693a45385" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 p-3 bg-background/30 border border-border/40 rounded-lg hover:bg-background/50 hover:border-primary/30 transition-all group"
                    >
                      <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-medium text-foreground">LinkedIn</div>
                        <div className="text-xs text-muted-foreground truncate">Professional network</div>
                      </div>
                    </a>

                    <a 
                      href="https://x.com/RiteArkTech" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 p-3 bg-background/30 border border-border/40 rounded-lg hover:bg-background/50 hover:border-primary/30 transition-all group"
                    >
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-medium text-foreground">X (Twitter)</div>
                        <div className="text-xs text-muted-foreground truncate">@RiteArkTech</div>
                      </div>
                    </a>
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