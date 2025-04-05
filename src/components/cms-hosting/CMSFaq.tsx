import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
// Removed useTheme import as it's not directly used in this version

const FAQ = () => {
  // const { colors, gradients } = useTheme(); // Removed theme usage
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is CMS Hosting?',
      answer: 'CMS stands for Content Management System, which includes popular tools like Joomla, Drupal, WordPress, etc., so you can deploy your site using any of your preferred CMS which function just as well online as it does in-person with customers.'
    },
    {
      question: 'What is WordPress Hosting?',
      answer: 'WordPress is an open-source Content Management System (CMS) / blogging platform that allows the creation of a website in PHP without the need to code. WordPress Hosting is a web hosting product that is optimized for WordPress, usually comes with WordPress pre-installed. Our WordPress Hosting plans are hosted on the Cloud and are designed to deliver speed, optimized security, backups, scalability and automatic updates.'
    },
    {
      question: 'What makes websites on your Hosting Platform faster?',
      answer: 'During the deployment of your CMS site on our managed hosting platform, we deploy a unique optimization technology, known as ThunderStack. The ThunderStack technology is a potent combination of the powerful features of Varnish, Memcached, Apache, and Nginx. This unique formula gets you the best-managed CMS hosting that guarantees up to 100% better and fastest page load times.'
    },
    {
      question: 'Will CMS be updated automatically?',
      answer: 'Yes, our CMS Hosting will automatically install all core of your installed CMS updates for your websites.'
    },
    {
      question: 'Will I be able to add more websites to my existing plan in the future?',
      answer: 'To add more websites, you will be required to add a new WordPress Hosting plan.'
    },
    {
      question: 'Can I use an external email service with my WordPress Hosting plan?',
      answer: 'Yes, you can use any external 3rd party email service with your WordPress Hosting plan. You may also opt an e-mail hosting plan from us. See our e-mail hosting plans.'
    },
    {
      question: 'I have a WordPress website with thousands of daily visitors. Will you be able to handle it?',
      answer: 'Our WordPress hosting platform has the ability to host WordPress sites of all sizes. You can migrate to higher plan any time you want with just a single click.'
    },
    {
      question: 'Which server location should I use?',
      answer: 'Our VPS servers are located in, US, UK, Singapore & German. We advise choosing the location that is closest to your target audience. For example, if your visitors are based in Europe, our UK location will provide the lowest latency. Or, for example, if your visitors are largely located within Asia, our Singapore location will be the best option.'
    },
    {
      question: 'Is an Upgrade or Downgrade possible between the CMS Hosting Plans?',
      answer: 'Yes, you can now easily upgrade your plan from the control panel by simply selecting the new plan and paying. The amount you have already paid for the current plan will get adjusted on a pro rate basis. The downgrade option is not available for any of our CMS Hosting plans at this time.'
    },
    {
      question: 'Is the Money Back Gurantee applicable on CMS Hosting plans?',
      answer: 'Yes, all of our CMS hosting plans come with a 30 days money back guarantee for new users. If you dont like it for any reason you can get a refund for the un-used days.'
    }
  ];

  return (
    // Using a simpler background for demonstration
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          // Using whileInView for animation trigger on scroll, adjust if needed
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Animate only once when it enters the viewport
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Answers to common questions about our CMS and WordPress hosting.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              // Using whileInView for staggered animation trigger on scroll
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Animate only once
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-lg overflow-hidden bg-white shadow-md border border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                {/* Using Tailwind for icon color */}
                <span className="ml-4 text-2xl text-indigo-600 transform transition-transform duration-300">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.section // Use section for semantic correctness of content area
                    key="content" // Add key for AnimatePresence to track
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden" // Ensure content doesn't overflow during animation
                  >
                    {/* Add padding directly to the content div for better spacing */}
                    <div className="px-6 pb-4 pt-0 text-base text-gray-700">
                      {faq.answer}
                    </div>
                  </motion.section>
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