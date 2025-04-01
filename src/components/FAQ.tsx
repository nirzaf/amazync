import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const FAQ = () => {
  const { colors, gradients } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is web hosting?',
      answer: 'Web hosting is a service that allows you to publish your website on the internet. When you purchase a hosting plan, you\'re essentially renting space on a server where your website files are stored and served to visitors.'
    },
    {
      question: 'How do I transfer my existing website?',
      answer: 'We offer a free website migration service. Simply contact our support team, and they\'ll help you transfer your website files, databases, and configurations to our servers with minimal downtime.'
    },
    {
      question: 'What is the uptime guarantee?',
      answer: 'We offer a 99.9% uptime guarantee. This means your website should be accessible 99.9% of the time throughout the year. If we fail to meet this guarantee, you\'ll receive compensation as per our service level agreement.'
    },
    {
      question: 'Do you offer SSL certificates?',
      answer: 'Yes, we provide free SSL certificates with all our hosting plans. This ensures your website is secure and visitors can access it via HTTPS. The SSL certificate is automatically installed and configured for you.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/7 customer support through live chat, email, and phone. Our support team is highly trained and can help you with any hosting-related issues, from technical problems to billing questions.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-tl from-[#192C99] to-[#1934B6]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/80">
            Find answers to common questions about our hosting services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden bg-[#1435AA]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#1B42C0] transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <span className="text-2xl text-white">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-white/80"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;