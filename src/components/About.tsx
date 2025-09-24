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
    <section id="about" className="py-16 bg-gradient-subtle pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            {/* Your Trusted Technology Guardian */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Your Trusted Technology Guardian
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                In an era where digital threats evolve daily and business demands accelerate constantly, 
                you need more than just technology solutions—you need a digital ark that protects, 
                empowers, and propels your organization forward.
              </p>
            </div>

            {/* Our Mission */}
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                Our Mission
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                To be the fortress that shields your digital assets while being the catalyst 
                that transforms your business operations. We combine military-grade security 
                with innovative automation to create solutions that don't just meet today's 
                needs—they anticipate tomorrow's challenges.
              </p>
            </div>

            {/* Why Choose Rite Ark */}
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                Why Choose Rite Ark?
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Because your business deserves technology solutions that work as hard as you do, 
                with the peace of mind that comes from knowing your digital assets are protected 
                by the very best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;