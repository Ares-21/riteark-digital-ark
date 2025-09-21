import { Shield, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Every solution we deliver is built with uncompromising security and reliability at its core."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We leverage cutting-edge technology to create solutions that drive your business forward."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Tailored solutions that address your specific challenges with laser-focused expertise."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We don't just provide services; we become your trusted technology partner for long-term success."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building <span className="gradient-text">Digital Fortresses</span>
              <br />for Modern Business
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
              At Rite Ark Technologies LLC, we understand that in today's digital landscape, 
              your technology infrastructure is the foundation of your success. We're here to 
              ensure that foundation is unshakeable.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Your Trusted Technology Guardian
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In an era where digital threats evolve daily and business demands accelerate constantly, 
                  you need more than just technology solutions—you need a digital ark that protects, 
                  empowers, and propels your organization forward.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">Our Mission</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To be the fortress that shields your digital assets while being the catalyst 
                  that transforms your business operations. We combine military-grade security 
                  with innovative automation to create solutions that don't just meet today's 
                  needs—they anticipate tomorrow's challenges.
                </p>
              </div>

              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 glow-gold">
                <h4 className="text-lg font-semibold mb-2 gradient-text">Why Choose Rite Ark?</h4>
                <p className="text-muted-foreground">
                  Because your business deserves technology solutions that work as hard as you do, 
                  with the peace of mind that comes from knowing your digital assets are protected 
                  by the very best.
                </p>
              </div>
            </div>

            {/* Right Content - Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className={`service-card animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-gold">
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-8 py-4">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold gradient-text">
                Your Digital ARK of Trust - Protecting What Matters Most
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;