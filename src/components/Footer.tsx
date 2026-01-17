"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, X } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTerms, setShowTerms] = useState(false);
  const [showRefund, setShowRefund] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);

  const footerLinks = [
    {
      label: "Privacy Policy",
      onClick: () => setShowPrivacy(true),
    },
    {
      label: "Accessibility Statement",
      onClick: () => setShowAccessibility(true),
    },
    {
      label: "Terms & Conditions",
      onClick: () => setShowTerms(true),
    },
    {
      label: "Refund Policy",
      onClick: () => setShowRefund(true),
    },
  ];

  const socialIcons = [
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ]

  return (
    <>
      <footer className="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <svg
            className="absolute top-0 w-full h-32 text-teal-500/5"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            fill="currentColor"
          >
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Left: Logo + Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
                Paved
                <span className="text-teal-600">Healthcare</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs">
                Compassionate care. Healing homes. Your health, our heartbeat.
              </p>
              <div className="flex gap-4 pt-4">
                {socialIcons.map(({ Icon, href, label }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i + 0.4 }}
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-gray-200 hover:bg-teal-600 text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-xl"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Center: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5 text-gray-700"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-600" />
                <span className="font-medium">832-921-1232</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-600" />
                <a href="mailto:hope@pavedhealthcare.com" className="hover:text-teal-600 transition">
                  hope@pavedhealthcare.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <p>
                  12808 West Airport Blvd suite 255C <br />
                  Sugar Land Texas 77386-1364
                </p>
              </div>
            </motion.div>

            {/* Right: Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col items-start md:items-end space-y-3 text-sm text-gray-600"
            >
              {footerLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  type="button"
                  onClick={link.onClick}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.4 }}
                  whileHover={{ x: 4, color: "#14b8a6" }}
                  className="hover:text-teal-500 transition-all duration-300 text-left cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-8 border-t border-gray-300 text-center text-sm text-gray-500"
          >
            <p>
              © {currentYear} by Paved Healthcare. All rights reserved.{" "}
              <span className="text-teal-600 font-medium">Powered and secured by hope</span>
            </p>
          </motion.div>
        </div>
      </footer>
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          >
            <div className="bg-teal-600 text-white px-6 py-5 flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-bold">
                Paved HealthCare Services – Website Privacy Policy
              </h2>
              <button
                onClick={() => setShowPrivacy(false)}
                className="p-2 rounded-full hover:bg-teal-700 transition"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto flex-1 prose prose-sm md:prose-base max-w-none text-gray-800">
              <p className="text-gray-500 font-medium mb-6">
                Last updated: January 2026
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">1. Introduction</h3>
              <p>
                Paved HealthCare Services (“we,” “our,” or “us”) is committed to protecting the privacy of all visitors who access our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our site.
              </p>
              <p className="mt-3">
                This policy applies only to information collected through our website and not to clinical records or protected health information (PHI) governed by HIPAA. For PHI, please refer to our HIPAA Notice of Privacy Practices.
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">2. Information We Collect</h3>
              <p>We may collect the following types of information:</p>

              <div className="mt-4">
                <strong className="block text-teal-800 mb-2">A. Personal Information (Provided Voluntarily)</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Information submitted through contact forms or appointment requests</li>
                </ul>
              </div>

              <div className="mt-6">
                <strong className="block text-teal-800 mb-2">B. Automatically Collected Information</strong>
                <p className="mb-2">
                  When you visit our website, certain data may be collected automatically, including:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on the site</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
              </div>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">3. How We Use Your Information</h3>
              <p>We may use collected information to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Respond to inquiries or appointment requests</li>
                <li>Improve website functionality and user experience</li>
                <li>Send updates, newsletters, or service information (with your consent)</li>
                <li>Maintain website security and prevent misuse</li>
                <li>Comply with legal or regulatory requirements</li>
              </ul>
              <p className="mt-4 font-medium">
                We do not sell or rent your personal information.
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">4. Sharing Your Information</h3>
              <p>We may share information only in the following situations:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Website hosting, analytics, or email delivery partners who assist in operating our site
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority
                </li>
                <li>
                  <strong>Business Operations:</strong> If necessary to protect our rights, safety, or property
                </li>
              </ul>
              <p className="mt-4">
                All third-party partners are required to maintain confidentiality and security.
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">5. Cookies & Tracking Technologies</h3>
              <p>
                Our website may use cookies, pixels, or analytics tools to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Understand how visitors use the site</li>
                <li>Improve performance and navigation</li>
                <li>Personalize content</li>
              </ul>
              <p className="mt-4">
                You may disable cookies in your browser settings, but some features may not function properly.
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">6. Data Security</h3>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no online transmission is 100% secure, and we cannot guarantee absolute protection.
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">7. Children’s Privacy</h3>
              <p>
                Our website is not intended for children under 13. We do not knowingly collect information from children. If we learn that we have collected such data, we will delete it promptly.
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">8. External Links</h3>
              <p>
                Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those websites.
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">9. Updates to This Policy</h3>
              <p>
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated “Last Updated” date.
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">10. Contact Information</h3>
              <p>
                For questions about this Privacy Policy or your data, contact:
              </p>
              <div className="mt-4 space-y-1 not-prose">
                <p className="font-medium">Paved HealthCare Services</p>
                <p>
                  Email:{" "}
                  <a href="mailto:hope@pavedhealthcare.com" className="text-teal-600 hover:underline">
                    hope@pavedhealthcare.com
                  </a>
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 px-6 py-4 flex justify-end">
              <button
                onClick={() => setShowPrivacy(false)}
                className="px-6 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-medium"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {showAccessibility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          >
            <div className="bg-teal-600 text-white px-6 py-5 flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-bold">
                Paved HealthCare Services – Accessibility Statement
              </h2>
              <button
                onClick={() => setShowAccessibility(false)}
                className="p-2 rounded-full hover:bg-teal-700 transition"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto flex-1 prose prose-sm md:prose-base max-w-none text-gray-800">
              <p className="text-gray-500 font-medium mb-6">
                Compliance-Focused
              </p>

              <p className="mb-6">
                Paved HealthCare Services is committed to ensuring that our website is accessible to all individuals, including people with disabilities. We strive to meet or exceed the requirements of the Americans with Disabilities Act (ADA) and follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA to provide an inclusive online experience.
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">Our Accessibility Efforts</h3>
              <p>
                To support accessibility, we take the following measures:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Provide text alternatives (alt text) for images</li>
                <li>Maintain appropriate color contrast for readability</li>
                <li>Ensure our site is navigable by keyboard</li>
                <li>Use clear headings, labels, and structure</li>
                <li>Test pages with assistive technologies when possible</li>
                <li>Review accessibility features during website updates</li>
              </ul>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">Ongoing Improvements</h3>
              <p>
                We recognize that accessibility is an ongoing effort. We regularly review our website to identify and correct accessibility issues and to improve usability for all visitors.
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">Feedback and Assistance</h3>
              <p>
                If you experience difficulty accessing any part of our website or need information in an alternative format, we encourage you to contact us. We will respond promptly and work to provide the information you need.
              </p>

              <div className="mt-6 space-y-1 not-prose">
                <p className="font-medium">Contact:</p>
                <p>
                  Email:{" "}
                  <a href="mailto:hope@pavedhealthcare.com" className="text-teal-600 hover:underline">
                    hope@pavedhealthcare.com
                  </a>
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 px-6 py-4 flex justify-end">
              <button
                onClick={() => setShowAccessibility(false)}
                className="px-6 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-medium"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-teal-600 text-white px-6 py-5 flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-bold">
                PAVED Healthcare – Terms & Conditions
              </h2>
              <button
                onClick={() => setShowTerms(false)}
                className="p-2 rounded-full hover:bg-teal-700 transition"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto flex-1 prose prose-sm md:prose-base max-w-none">
              <p className="text-gray-500 font-medium mb-6">
                Effective Date: 01/01/2026
              </p>

              <ol className="space-y-8 text-gray-800">
                <li>
                  <strong className="text-teal-700 block mb-2 text-lg">1. Acceptance of Terms</strong>
                  <p>
                    By accessing or using the PAVED Healthcare website (“Site”), you agree to be bound by these Terms & Conditions (“Terms”), along with our Privacy Policy. If you do not agree, you must discontinue use of the Site. PAVED Healthcare may update these Terms at any time, and continued use of the Site constitutes acceptance of the updated Terms.
                  </p>
                </li>

                <li>
                  <strong className="text-teal-700 block mb-2 text-lg">2. Medical Emergencies</strong>
                  <p>If you are experience a medical emergency, please contact 911. </p>
                  <p>Emergencies are situations such as:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>shortness of breath</li>
                    <li>cardiac issues (heart attack)</li>
                    <li>chocking, head injuries, seizures, severe trauma such as bleeding, deep wounds, spinal injury or accidents
                      and severe allergic reactions (anaphylaxis). Key warning signs involve sudden chest pain, trouble breathing, confusion,
                      one sided weakness, vision changes or loss of consciousness.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className="text-teal-700 block mb-2 text-lg">3. Telehealth, Remote Care & Subscription Services</strong>
                  <p>
                    PAVED Healthcare offers clinical services through telehealth, home visits, and subscription-based care. These services are governed by separate clinical consent forms, which must be completed before receiving care.
                  </p>
                  <p className="mt-3 font-medium">Using this Site does not:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Establish a patient–provider relationship</li>
                    <li>Guarantee appointment availability</li>
                    <li>Provide real-time clinical monitoring</li>
                    <li>Messages submitted through the Site are not monitored 24/7.</li>
                  </ul>
                </li>

                <li>
                  <strong className="text-teal-700 block mb-2 text-lg">4. HIPAA & Privacy</strong>
                  <p>
                    PAVED Healthcare complies with applicable federal and Texas privacy laws, including HIPAA, once an individual becomes a patient.
                  </p>
                  <p className="mt-3 font-medium">However:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>The public-facing Site is not intended for transmitting Protected Health Information (PHI).</li>
                    <li>Do not submit sensitive medical information through general contact forms.</li>
                    <li>HIPAA protections apply only within our clinical systems and secure communication channels.</li>
                  </ul>
                  <p className="mt-3">
                    Please review our <span className="text-teal-600 font-medium">Privacy Policy</span> for details on how personal information is collected and used.
                  </p>
                </li>

                <li>
                  <strong className="text-teal-700 block mb-2 text-lg">5. User Responsibilities</strong>
                  <p>By using the Site, you agree to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Provide accurate and truthful information</li>
                    <li>Use the Site only for lawful purposes</li>
                    <li>Not attempt to disrupt, damage, or gain unauthorized access to the Site</li>
                    <li>Not upload harmful, offensive, or illegal content</li>
                    <li>Not use automated tools (scrapers, bots) to extract data</li>
                  </ul>
                  <p className="mt-3">
                    Any misuse may result in termination of access and potential legal action.
                  </p>
                </li>

                <li>
                  <strong className="text-teal-700 block mb-2 text-lg">6. Intellectual Property</strong>
                  <p>
                    All content on the Site—including text, graphics, logos, icons, images, videos, and educational materials—is the property of PAVED Healthcare or its licensors.
                  </p>
                  <p className="mt-3">Users may not:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Copy</li>
                    <li>Reproduce</li>
                    <li>Modify</li>
                    <li>Distribute</li>
                    <li>Sell</li>
                    <li>Publish</li>
                  </ul>
                  <p className="mt-3">…any Site content without written permission.</p>
                </li>

                <li>
                  <strong className="text-teal-700 block mb-2 text-lg">7. Third‑Party Links & Services</strong>
                  <p>
                    The Site may contain links to third‑party websites, tools, or services (e.g., payment processors, lab portals, scheduling platforms). These are provided for convenience only.
                  </p>
                  <p className="mt-3">PAVED Healthcare:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Does not control third‑party content</li>
                    <li>Is not responsible for their accuracy, security, or privacy practices</li>
                    <li>Does not endorse third‑party products or services</li>
                  </ul>
                  <p className="mt-3">Users access third‑party sites at their own risk.</p>
                </li>

                <li>
                  <strong className="text-teal-700 block mb-2 text-lg">8. No Warranty</strong>
                  <p>
                    The Site is provided “as is” and “as available” without warranties of any kind, express or implied.
                  </p>
                  <p className="mt-3">PAVED Healthcare does not guarantee:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Accuracy or completeness of content</li>
                    <li>Error-free or uninterrupted operation</li>
                    <li>Freedom from viruses or harmful components</li>
                  </ul>
                  <p className="mt-3">Use of the Site is at your own risk.</p>
                </li>

                <li>
                  <strong className="text-teal-700 block mb-2 text-lg">9. Limitation of Liability</strong>
                  <p>
                    To the fullest extent permitted by law, PAVED Healthcare and its clinicians, staff, contractors, and affiliates are not liable for any damages arising from:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Use or inability to use the Site</li>
                    <li>Reliance on Site content</li>
                    <li>Errors, omissions, or inaccuracies</li>
                    <li>Unauthorized access or data breaches</li>
                    <li>Delays, interruptions, or system failures</li>
                  </ul>
                  <p className="mt-3">
                    This limitation applies to all forms of damages, including direct, indirect, incidental, consequential, and punitive damages.
                  </p>
                </li>

                <li>
                  <strong className="text-teal-700 block mb-2 text-lg">10. Indemnification</strong>
                  <p>
                    You agree to indemnify and hold harmless PAVED Healthcare, its owners, clinicians, employees, and affiliates from any claims, losses, liabilities, damages, or expenses (including attorney fees) arising from:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Your use of the Site</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any applicable laws or third‑party rights</li>
                  </ul>
                </li>

                <li>
                  <strong className="text-teal-700 block mb-2 text-lg">11. Governing Law</strong>
                  <p>
                    These Terms are governed by the laws of the State of Texas, without regard to conflict-of-law principles. Any disputes must be resolved in a court of competent jurisdiction located in Texas.
                  </p>
                </li>

                <li>
                  <strong className="text-teal-700 block mb-2 text-lg">12. Changes to Terms</strong>
                  <p>
                    PAVED Healthcare may modify these Terms at any time. Updates will be posted on this page with a revised Effective Date. Continued use of the Site constitutes acceptance of any changes.
                  </p>
                </li>

                <li>
                  <strong className="text-teal-700 block mb-2 text-lg">13. Contact Information</strong>
                  <p>For questions about these Terms, please contact:</p>
                  <div className="mt-3 space-y-1 not-prose">
                    <p className="font-medium">PAVED Healthcare</p>
                    <p>Email: <a href="mailto:hope@pavedhealthcare.com" className="text-teal-600 hover:underline">hope@pavedhealthcare.com</a></p>
                    <p>Phone: 832-921-1231</p>
                    <p>Address: 12808 W. Airport Blvd. Sugar Land Texas</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="border-t border-gray-200 px-6 py-4 flex justify-end">
              <button
                onClick={() => setShowTerms(false)}
                className="px-6 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-medium"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {showRefund && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          >
            <div className="bg-teal-600 text-white px-6 py-5 flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-bold">
                Paved HealthCare Services – Refund Policy
              </h2>
              <button
                onClick={() => setShowRefund(false)}
                className="p-2 rounded-full hover:bg-teal-700 transition"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto flex-1 prose prose-sm md:prose-base max-w-none text-gray-800">
              <p className="text-gray-500 font-medium mb-6">
                Last updated: January 2026
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">Purpose</h3>
              <p>
                Paved HealthCare Services is committed to providing high-quality, patient-centered care. This Refund Policy outlines the circumstances under which refunds may be issued for services rendered.
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">1. General Policy</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All payments made for clinical services, consultations, and administrative fees are non-refundable once the service has been provided.</li>
                <li>Refunds may be considered only in specific, limited situations outlined below.</li>
              </ul>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">2. Refund Eligibility</h3>
              <p>Refunds may be issued under the following conditions:</p>
              <ul className="list-decimal pl-6 mt-3 space-y-4 font-medium">
                <li>
                  <span className="block text-teal-800">A. Duplicate Payments</span>
                  If a client is mistakenly charged twice for the same service, the duplicate payment will be refunded in full.
                </li>
                <li>
                  <span className="block text-teal-800">B. Billing Errors</span>
                  If an administrative or billing error occurs on the part of Paved HealthCare Services, corrections will be made promptly, and any overpayment will be refunded.
                </li>
                <li>
                  <span className="block text-teal-800">C. Service Not Rendered</span>
                  If a client pays for a service that was not provided due to scheduling, provider availability, or other operational issues, the client may choose:
                  <ul className="list-disc pl-8 mt-2 space-y-1 font-normal">
                    <li>A full refund, or</li>
                    <li>Application of the payment as a credit toward a future appointment.</li>
                  </ul>
                </li>
              </ul>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">3. Non-Refundable Items</h3>
              <p>The following are not eligible for refunds:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Completed clinical visits or consultations</li>
                <li>Wound care services already performed</li>
                <li>Travel fees, mobile visit fees, or after-hours surcharges</li>
                <li>Administrative fees (forms, letters, documentation requests)</li>
                <li>No-show or late cancellation fees</li>
                <li>Supplies purchased or used during treatment</li>
              </ul>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">4. Appointment Cancellations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations made 24 hours or more before the scheduled appointment may be eligible for a credit toward a future service.</li>
                <li>Cancellations made less than 24 hours before the appointment, or failure to attend, are subject to the full no-show fee and are not refundable.</li>
              </ul>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">5. Refund Request Process</h3>
              <p>
                Clients requesting a refund must submit a written request including:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Full name</li>
                <li>Date of service</li>
                <li>Reason for refund request</li>
                <li>Proof of payment (if available)</li>
              </ul>
              <p className="mt-4">
                Requests may be submitted via email to <strong>admin@pavedhealthcare.com</strong> or through the patient portal.
              </p>
              <p className="mt-3">
                Refunds, when approved, will be processed within 7–10 business days.
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">6. Method of Refund</h3>
              <p>
                Approved refunds will be issued using the original method of payment unless otherwise required by law or system limitations.
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">7. Provider Discretion</h3>
              <p>
                Paved HealthCare Services reserves the right to review each refund request individually. Decisions will be made in alignment with clinical documentation, compliance standards, and internal policies.
              </p>

              <h3 className="text-teal-700 font-bold text-lg mt-8 mb-3">8. Policy Updates</h3>
              <p>
                This policy may be updated periodically to reflect changes in regulations, payer requirements, or operational needs. The most current version will always be available upon request.
              </p>
            </div>

            <div className="border-t border-gray-200 px-6 py-4 flex justify-end">
              <button
                onClick={() => setShowRefund(false)}
                className="px-6 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-medium"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}