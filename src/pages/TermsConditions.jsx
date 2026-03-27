import React from "react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="bg-background text-foreground min-h-screen pt-16 pb-20 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
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

        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 border-t border-gray-200 dark:border-gray-800 pt-8">SMS Terms & Conditions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">1. SMS Consent Communication</h3>
            <p>
              Information (Phone Numbers) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">2. Types of SMS Communications</h3>
            <p className="mb-2">
              If consent has been given to receive text messages from Royal Jordanian Transport, messages may be received related to the following:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Appointment reminders</li>
              <li>Follow-up messages</li>
            </ul>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4 border-l-4 border-primary italic">
              <p>
                Example: Thank you for reaching out to Royal Jordanian Transport. We've received your inquiry and are working on a solution. Our team will update you within 24-48 hours.
              </p>
            </div>
            <p>
              For any further questions, feel free to reply or contact us at <a href="tel:+1313-636-2932" className="text-primary hover:underline">+1 313-636-2932</a>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">3. Message Frequency</h3>
            <p>
              Message frequency may vary depending on the type of communication. For example, up to 10 SMS messages per week may be received related to appointments/billing, etc.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">4. Potential Fees for SMS Messaging</h3>
            <p>
              Standard message and data rates may apply, depending on the carrier's pricing plan. These fees may vary if the message is sent domestically or internationally.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">5. Opt-In Method</h3>
            <p className="mb-2">
              Opt-in to receive SMS messages from Royal Jordanian Transport can be done in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>We ask them verbally</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">6. Opt-Out Method</h3>
            <p>
              Opting out of receiving SMS messages can be done at any time by replying "STOP" to any SMS message received. Alternatively, direct contact can be made to request removal from the messaging list.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">7. Help</h3>
            <p className="mb-2">
              For any issues, reply with the keyword HELP. Alternatively, help can be obtained directly from us at <a href="tel:+1313-636-2932" className="text-primary hover:underline">+1 313-636-2932</a>.
            </p>
            <p className="font-semibold mt-4">Additional Options:</p>
            <p className="mt-1">
              If SMS messages are not desired, the SMS consent box on forms can be left unchecked.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">8. Standard Messaging Disclosures</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Message and data rates may apply.</li>
              <li>Opt out at any time by texting "STOP."</li>
              <li>For assistance, text "HELP" or visit our <Link to="/privacy-policy" className="text-primary hover:underline" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link> and <Link to="/terms-conditions" className="text-primary hover:underline" onClick={() => window.scrollTo(0, 0)}>Terms & Conditions</Link> pages.</li>
              <li>Message frequency may vary.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
