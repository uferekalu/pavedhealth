"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Video, Heart, X, Send } from "lucide-react";
import Image from "next/image";

const bookingServices = [
  {
    title: "Wound Care Consultation",
    subtitle: "Heal with confidence",
    icon: <Stethoscope className="w-10 h-10" />,
    image: "/images/wound-care.png",
    description:
      "Our specialized Wound Care Consultation provides expert assessment and personalized treatment planning for acute and chronic wounds, including diabetic ulcers, pressure sores, surgical incisions, and traumatic injuries. We focus on advanced dressings, infection control, debridement when needed, offloading strategies, and patient education to promote optimal healing, reduce complications, and prevent recurrence. Ideal for patients seeking faster recovery and professional guidance in managing complex or slow-healing wounds.",
  },
  {
    title: "Telehealth Visit",
    subtitle: "Care from anywhere",
    icon: <Video className="w-10 h-10" />,
    image: "/images/telehealth.png",
    description:
      "Experience convenient, high-quality healthcare without leaving home through our secure Telehealth Visit service. Using video consultations, our licensed providers can assess symptoms, review medical history, examine visible conditions (including wounds via shared images), discuss treatment options, prescribe medications when appropriate, and coordinate follow-up care. Perfect for routine check-ins, post-treatment monitoring, minor concerns, or when travel is difficult—delivering timely, compassionate care with the same attention to detail as in-person visits.",
  },
  {
    title: "Medical Exam",
    subtitle: "Physical Assessment",
    icon: <Heart className="w-10 h-10" />,
    image: "/images/medical-exam.png",
    description:
      "Our comprehensive Medical Exam (Physical Assessment) offers a thorough evaluation of your overall health status. This includes vital signs measurement, head-to-toe examination, cardiovascular and respiratory assessment, neurological screening, musculoskeletal evaluation, and discussion of any current symptoms or concerns. It serves as an excellent preventive health check, annual wellness visit, pre-employment or preoperative requirement, or baseline assessment—helping detect early signs of issues and creating a personalized health maintenance plan.",
  },
  {
    title: "Injection Assistance",
    subtitle: "With a professional's hand",
    icon: <Heart className="w-10 h-10" />,
    image: "/images/injection.png",
    description:
      "Safe and comfortable Injection assistance is performed by trained healthcare professionals using sterile technique and best practices. We handle a wide range of injections including intramuscular (IM), subcutaneous (SC), intradermal, and vaccinations. Each session includes proper site selection, patient education on post-injection care, monitoring for immediate reactions, and documentation. Ideal for patients requiring regular injections (e.g., insulin, B12, hormones, biologics) or one-time immunizations in the comfort of your home.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const accordionVariants = {
  collapsed: { 
    height: 0, 
    opacity: 0, 
    overflow: "hidden" as const 
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { 
        duration: 0.4, 
      },
      opacity: { 
        duration: 0.25 
      },
    },
  },
};

export default function ServiceList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const toggleAccordion = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenIndex(openIndex === index ? null : index);
  };

  const openModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setFormData({ email: "", subject: `Consultation for ${serviceTitle}`, message: "" });  // Pre-populate subject
    setErrors({});
    setStatus("idle");
    setStatusMessage("");
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/send-consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: selectedService || "General",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send");
      }

      setStatus("success");
      setStatusMessage("Your message has been sent successfully!");
      setTimeout(() => {
        closeModal();
      }, 3000);
    } catch (err: any) {
      setStatus("error");
      setStatusMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h5 className="text-xl md:text-2xl font-bold text-gray-900">
            Select a service to begin
          </h5>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {bookingServices.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.4 },
                }}
                className="group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex flex-col md:flex-row items-center justify-between p-8 gap-8">
                  <div className="flex items-center gap-8 flex-1">
                    <div className="relative w-28 h-28 flex-shrink-0 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-medium text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{service.subtitle}</p>

                      <button
                        type="button"
                        onClick={(e) => toggleAccordion(index, e)}
                        className="text-teal-600 font-medium text-sm hover:underline mt-2 inline-block transition-colors cursor-pointer"
                      >
                        {isOpen ? "Read less" : "Read more"}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-12 text-right">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openModal(service.title)}
                      className="p-3 bg-teal-600 text-white font-medium rounded-xl shadow-lg hover:bg-teal-700 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      Consult
                    </motion.button>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      variants={accordionVariants}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      className="px-8 pb-8 text-gray-700 leading-relaxed border-t border-gray-100"
                    >
                      {service.description}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-teal-600 text-white px-8 py-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Consult: {selectedService}</h2>
                  <button onClick={closeModal} className="text-white/80 hover:text-white">
                    <X size={28} />
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tell us more about your needs..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full py-4 px-6 rounded-xl font-medium text-white flex items-center justify-center gap-3 transition-all ${
                    status === "loading" ? "bg-teal-400 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-700"
                  }`}
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>

                {statusMessage && (
                  <p
                    className={`text-center mt-2 text-sm ${
                      status === "success" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}