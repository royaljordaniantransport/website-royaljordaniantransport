import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen pt-16 pb-20 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">Privacy Policy</h1>
      
      <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <p>
          Welcome to Royal Jordanian Transport. We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy applies to our website and governs data collection and usage.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, phone number, and physical address when you voluntarily submit it to us through our contact forms or when requesting a quote for our logistics and trucking services.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Use of Your Information</h2>
        <p>
          Royal Jordanian Transport collects and uses your personal information to operate its website and deliver the services you have requested. We may also use your personally identifiable information to inform you of other products or services available from us.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Sharing Information with Third Parties</h2>
        <p>
          We do not sell, rent, or lease our customer lists to third parties. We may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to us, and they are required to maintain the confidentiality of your information.
        </p>
        <p>
          Mobile Opt in, SMS Consent, and phone numbers collected for SMS communication purposes will not be shared with any third party or affiliates for marketing purposes.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Security of Your Personal Information</h2>
        <p>
          We secure your personal information from unauthorized access, use, or disclosure. We use appropriate security measures to protect against the loss, misuse, and alteration of data used by our system.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Changes to this Statement</h2>
        <p>
          Royal Jordanian Transport will occasionally update this Statement of Privacy to reflect company and customer feedback. We encourage you to periodically review this Statement to be informed of how we are protecting your information.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Contact Information</h2>
        <p>
          We welcome your questions or comments regarding this Statement of Privacy. If you believe that we have not adhered to this Statement, please contact us at <a href="mailto:royaljordaniantransport@gmail.com" className="text-primary hover:underline">royaljordaniantransport@gmail.com</a> or via phone at <a href="tel:+13136362932" className="text-primary hover:underline">+1 313-636-2932</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
