export const metadata = {
  title: "Privacy Policy | MedTrix Healthcare",
};

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-white text-lg font-semibold mb-3">{title}</h2>
      <div className="text-gray-400 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-1.5 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="w-[90%] md:w-[80%] mx-auto py-16">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: January 2025</p>
        </div>

        <div className="max-w-4xl">

          <Section title="Introduction">
            <p>MedTrix Healthcare ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            <p>Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.</p>
          </Section>

          <Section title="Information We Collect">
            <p>We may collect information about you in a variety of ways, including:</p>
            <BulletList items={[
              "Personal Data: Name, email address, phone number, and company name you voluntarily provide when contacting us or filling out forms.",
              "Usage Data: Information automatically collected when you visit our site, including IP address, browser type, pages visited, and time spent.",
              "Cookies and Tracking Technologies: We use cookies and similar tracking technologies to track activity on our site and hold certain information.",
            ]} />
          </Section>

          <Section title="How We Use Your Information">
            <p>We use the information we collect to:</p>
            <BulletList items={[
              "Respond to your inquiries and provide customer support",
              "Send you information about our services, updates, and promotional materials (with your consent)",
              "Improve our website and services",
              "Comply with legal obligations",
              "Protect against fraudulent or unauthorized activity",
            ]} />
          </Section>

          <Section title="Disclosure of Your Information">
            <p>We may share your information in the following situations:</p>
            <BulletList items={[
              "With service providers who assist us in operating our website and conducting our business",
              "To comply with applicable laws, regulations, or legal processes",
              "To protect the rights, property, or safety of MedTrix Healthcare, our clients, or others",
              "In connection with a merger, acquisition, or sale of all or a portion of our assets",
            ]} />
            <p className="mt-3">We do not sell, trade, or rent your personal information to third parties.</p>
          </Section>

          <Section title="Cookies">
            <p>We use cookies to enhance your experience on our website. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our site may not function properly.</p>
            <p>Types of cookies we use:</p>
            <BulletList items={[
              "Essential Cookies: Required for the website to function properly",
              "Analytics Cookies: Help us understand how visitors interact with our website",
              "Preference Cookies: Allow the website to remember your preferences",
            ]} />
          </Section>

          <Section title="Third-Party Services">
            <p>Our website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of any third-party sites and assume no responsibility for them. We encourage you to review the privacy policy of every site you visit.</p>
            <p>We may use third-party analytics services such as Google Analytics to help understand usage of our site. These services may collect information sent by your browser as part of a web page request.</p>
          </Section>

          <Section title="Data Security">
            <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          </Section>

          <Section title="Data Retention">
            <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
          </Section>

          <Section title="Your Rights">
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <BulletList items={[
              "The right to access the personal information we hold about you",
              "The right to request correction of inaccurate personal information",
              "The right to request deletion of your personal information",
              "The right to object to or restrict processing of your personal information",
              "The right to data portability",
              "The right to withdraw consent at any time",
            ]} />
            <p className="mt-3">To exercise any of these rights, please contact us at <a href="mailto:info@medtrixhealthcare.com" className="text-red-500 hover:text-red-400 transition-colors">info@medtrixhealthcare.com</a>.</p>
          </Section>

          <Section title="Children's Privacy">
            <p>Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us and we will take steps to remove such information.</p>
          </Section>

          <Section title="Changes to This Privacy Policy">
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
          </Section>

          <Section title="Contact Us">
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p><span className="text-white font-medium">MedTrix Healthcare</span></p>
              <p>Email: <a href="mailto:info@medtrixhealthcare.com" className="text-red-500 hover:text-red-400 transition-colors">info@medtrixhealthcare.com</a></p>
              <p>Website: <a href="https://www.medtrixhealthcare.com" className="text-red-500 hover:text-red-400 transition-colors">www.medtrixhealthcare.com</a></p>
            </div>
          </Section>

        </div>
      </div>
    </main>
  );
}
