// frontend\src\components\Footer\LegalAndPrivacy.tsx

import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Effective Date: May 22, 2025</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            At ARINSA AI MINDS ("we", "our", or "us"), we value your trust and are committed to safeguarding the personal data you share with us. This Privacy Policy sets out the basis on which we process personal information in connection with your use of our digital services and platforms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Scope and Application</h2>
          <p>
            This statement applies to all users who interact with ARINSA AI MINDS via our website, digital tools, or through other service offerings. By engaging with our platforms, you acknowledge and agree to the data practices described herein.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Types of Information We Collect</h2>
          <ul className="list-disc ml-5">
            <li><strong>Identity and Contact Data:</strong> Including your name, email address, phone number, and related identifiers.</li>
            <li><strong>Technical Data:</strong> IP addresses, browser characteristics, device identifiers, and interaction logs.</li>
            <li><strong>Usage Data:</strong> Information about your browsing actions and patterns on our website.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> Utilized to enhance your browsing experience and understand usage behavior.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. How We Use Your Information</h2>
          <p>Your information may be used for the following purposes:</p>
          <ul className="list-disc ml-5">
            <li>To deliver our services and maintain operational excellence</li>
            <li>To respond to service inquiries or support requests</li>
            <li>To optimize and personalize user experience across our digital platforms</li>
            <li>To deliver updates, news, and promotional content (subject to your preferences)</li>
            <li>To comply with legal, regulatory, or contractual obligations</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Disclosure of Information</h2>
          <p>
            We do not commercialize or sell your data. We may disclose information in limited circumstances to:
          </p>
          <ul className="list-disc ml-5">
            <li><strong>Authorized Service Providers:</strong> Who support us in delivering website functionality, communications, and analytics.</li>
            <li><strong>Legal or Regulatory Bodies:</strong> Where disclosure is mandated under applicable laws or legal processes.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Information Security</h2>
          <p>
            We implement commercially reasonable technical and organizational safeguards to protect your data. Nonetheless, due to the inherent nature of the internet, we cannot guarantee absolute security against unauthorized access.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Your Data Rights</h2>
          <p>
            Subject to applicable laws, you may have rights to:
          </p>
          <ul className="list-disc ml-5">
            <li>Access and review the personal data we hold about you</li>
            <li>Request corrections or updates to inaccurate data</li>
            <li>Withdraw consent previously granted</li>
            <li>Request deletion or limitation of certain data uses</li>
          </ul>
          <p className="mt-2">
            You may exercise these rights by contacting us at <a href="mailto:ans@arinsaaiminds.com" className="text-blue-600 underline">ans@arinsaaiminds.com</a>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. External Sites and Services</h2>
          <p>
            Our platform may link to third-party websites or services. ARINSA AI MINDS is not responsible for the privacy practices or content of such external entities. We encourage users to review third-party privacy policies prior to engagement.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Children’s Data</h2>
          <p>
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from minors. If such data is inadvertently collected, we will take steps to delete it promptly upon notification.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Updates to This Privacy Policy</h2>
          <p>
            This Privacy Policy may be updated periodically to reflect changes in our practices, technologies, or regulatory obligations. The "Effective Date" at the top indicates the most recent revision. Continued use of our services indicates your acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:</p>
          <p className="mt-1">
            ARINSA AI MINDS<br />
            Kolkata, West Bengal, India<br />
            Email: <a href="mailto:ans@arinsaaiminds.com" className="text-blue-600 underline">ans@arinsaaiminds.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
