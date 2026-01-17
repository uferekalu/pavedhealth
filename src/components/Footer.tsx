"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, X } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTerms, setShowTerms] = useState(false);

  const footerLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Accessibility Statement" },
    {
      label: "Terms & Conditions",
      onClick: () => setShowTerms(true),
    },
    { href: "#", label: "Refund Policy" },
  ];

  const socialIcons = [
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

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
              {footerLinks.map((link, i) =>
                link.onClick ? (
                  <motion.button
                    key={link.label}
                    type="button"
                    onClick={link.onClick}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.4 }}
                    whileHover={{ x: 4, color: "#14b8a6" }}
                    className="hover:text-teal-500 transition-all duration-300 text-left"
                  >
                    {link.label}
                  </motion.button>
                ) : (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.4 }}
                    whileHover={{ x: 4, color: "#14b8a6" }}
                    className="hover:text-teal-500 transition-all duration-300"
                  >
                    {link.label}
                  </motion.a>
                )
              )}
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
    </>
  );
}