import React, { useEffect } from "react";

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen pt-32 pb-20 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">Terms & Conditions</h1>
      
      <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <p>
          These Terms and Conditions govern your use of the Royal Jordanian Transport website and services. By accessing this website, you accept these terms and conditions in full. Do not continue to use the website if you do not accept all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. License and Site Access</h2>
        <p>
          Unless otherwise stated, Royal Jordanian Transport and/or its licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Services Information</h2>
        <p>
          All service descriptions, pricing, and availability are subject to change at any time without notice. We make every effort to display as accurately as possible the details of our long-haul trucking and logistics solutions.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. User Conduct</h2>
        <p>
          You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful. 
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Limitation of Liability</h2>
        <p>
          In no event shall Royal Jordanian Transport, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort or otherwise.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Indemnification</h2>
        <p>
          You hereby indemnify to the fullest extent Royal Jordanian Transport from and against any and all liabilities, costs, demands, causes of action, damages and expenses (including reasonable attorney's fees) arising out of or in any way related to your breach of any of the provisions of these Terms.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Governing Law</h2>
        <p>
          These Terms will be governed by and construed in accordance with the laws of the State of Michigan, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Michigan for the resolution of any disputes.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
