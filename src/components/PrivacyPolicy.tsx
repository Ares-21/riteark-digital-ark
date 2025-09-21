import { Shield, Lock, Users, FileText, Globe, Clock } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <section id="privacy-policy" className="py-16 pt-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-8 py-4 mb-6">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold gradient-text">
                Privacy Policy
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Rite Ark Technologies LLC
            </h1>
            <p className="text-muted-foreground text-lg">
              Effective Date: 22.09.2025
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none text-foreground mb-8">
            <p className="text-lg leading-relaxed">
              Rite Ark Technologies LLC ("we," "our," "us") values your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, process, use, disclose, and safeguard your information when you use our services or interact with our website. It complies with United Arab Emirates (UAE) data protection regulations and adheres to international standards including the EU General Data Protection Regulation (GDPR) and global best practices.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Scope */}
            <div className="service-card p-6">
              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">1. Scope of Policy</h2>
                  <p className="text-muted-foreground mb-3">This Privacy Policy applies to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>All services provided by Rite Ark Technologies LLC, including Cybersecurity Services, Artificial Intelligence & Software Solutions, and Digital Marketing & Media Software Solutions.</li>
                    <li>Our website, online platforms, and communications.</li>
                    <li>All clients, partners, vendors, and website visitors.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Collection */}
            <div className="service-card p-6">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
                  <p className="text-muted-foreground mb-3">We may collect the following categories of personal data:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li><strong>Identity Information:</strong> Full name, company, designation, nationality.</li>
                    <li><strong>Contact Information:</strong> Email address, phone number, business address.</li>
                    <li><strong>Technical Information:</strong> IP address, browser type, device details, cookies, and log files.</li>
                    <li><strong>Service Information:</strong> Project requirements, business needs, communications, and support inquiries.</li>
                    <li><strong>Marketing Data:</strong> Preferences, feedback, interests, and interactions with our campaigns.</li>
                    <li><strong>Sensitive Data (if required):</strong> Only collected with explicit consent, for specific projects (e.g., security audits).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="service-card p-6">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-3">We use your personal data for purposes including:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li><strong>Service Delivery:</strong> To provide, manage, and improve our cybersecurity, AI, and marketing solutions.</li>
                    <li><strong>Account & Access Management:</strong> To authenticate users and enable secure system access.</li>
                    <li><strong>Customer Support:</strong> To respond to inquiries, troubleshoot, and provide technical help.</li>
                    <li><strong>Service Enhancement:</strong> To analyze usage patterns and optimize solutions.</li>
                    <li><strong>Marketing & Communication:</strong> To send updates, newsletters, offers, and service announcements (with opt-out).</li>
                    <li><strong>Compliance & Security:</strong> To meet UAE PDPL and international legal obligations, prevent fraud, and enhance cybersecurity.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal Basis */}
            <div className="service-card p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">4. Legal Basis for Processing</h2>
                  <p className="text-muted-foreground mb-3">We process your data on the following lawful grounds (UAE PDPL & GDPR-compliant):</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li><strong>Consent:</strong> When you explicitly agree to processing.</li>
                    <li><strong>Contractual Necessity:</strong> To fulfill service agreements.</li>
                    <li><strong>Legal Obligation:</strong> To comply with UAE and international laws.</li>
                    <li><strong>Legitimate Interests:</strong> To operate securely and improve our services.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="service-card p-6">
              <div className="flex items-start gap-4">
                <Lock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">5. Sharing of Data</h2>
                  <p className="text-muted-foreground mb-3">We will never sell your data. We may share information with:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li><strong>Trusted Service Providers:</strong> Cloud hosting, IT infrastructure, analytics, and marketing partners.</li>
                    <li><strong>Regulatory & Government Authorities:</strong> Where required under UAE or international law.</li>
                    <li><strong>Business Partners:</strong> For joint projects or collaborations, under confidentiality agreements.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* International Transfers */}
            <div className="service-card p-6">
              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">6. International Data Transfers</h2>
                  <p className="text-muted-foreground mb-3">Your data may be transferred and stored outside the UAE. We ensure compliance with UAE PDPL, GDPR, and global standards through:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Standard Contractual Clauses (SCCs).</li>
                    <li>Secure servers and encrypted transfers.</li>
                    <li>Data protection agreements with international vendors.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="service-card p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">7. Data Retention</h2>
                  <p className="text-muted-foreground mb-3">We retain personal data only for as long as necessary:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>To fulfill the purposes described in this policy.</li>
                    <li>To comply with legal, tax, and regulatory obligations.</li>
                    <li>After the retention period, data will be securely deleted or anonymized.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="service-card p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">8. Data Security</h2>
                  <p className="text-muted-foreground mb-3">We adopt robust security measures including:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>End-to-end encryption of data.</li>
                    <li>Secure firewalls, intrusion detection, and monitoring.</li>
                    <li>Access control policies for staff and third parties.</li>
                    <li>Regular vulnerability assessments and penetration testing.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="service-card p-6">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">9. Your Rights</h2>
                  <p className="text-muted-foreground mb-3">Under UAE PDPL and international law (GDPR-like rights), you have the right to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li><strong>Access:</strong> Request a copy of your personal data.</li>
                    <li><strong>Rectify:</strong> Correct inaccurate or incomplete data.</li>
                    <li><strong>Erase:</strong> Request deletion of data where permissible.</li>
                    <li><strong>Restrict Processing:</strong> Limit how we use your data.</li>
                    <li><strong>Data Portability:</strong> Receive your data in a structured format.</li>
                    <li><strong>Object:</strong> Opt-out of direct marketing or certain processing activities.</li>
                    <li><strong>Withdraw Consent:</strong> Remove consent for data processing at any time.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="service-card p-6 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Us</h2>
                  <p className="text-muted-foreground mb-3">
                    If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                  </p>
                  <div className="text-muted-foreground space-y-1">
                    <p><strong>Email:</strong> privacy@riteark.com</p>
                    <p><strong>Phone:</strong> +971 50 3711579</p>
                    <p><strong>Address:</strong> Rite Ark Technologies LLC, UAE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="service-card p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">11. Policy Updates</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. 
                    We will notify you of any material changes via email or through our website. The "Effective Date" at the top of this 
                    policy indicates when it was last revised.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;