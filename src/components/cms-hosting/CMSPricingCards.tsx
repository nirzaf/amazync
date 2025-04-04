import { motion } from 'framer-motion';
import { serverIcons } from '../../assets/server-icons';

type Plan = {
  name: string;
  price: string;
  period?: string;
  features: { label: string; value: string | boolean }[];
  popular?: boolean;
};

const CMSPricingCards = () => {
  // CMS-specific plans
  const cmsPlans: Plan[] = [
    {
      name: 'CMS Starter',
      price: '$6.99',
      period: 'mo',
      features: [
        { label: 'NVMe Storage', value: '5GB' },
        { label: 'Guaranteed RAM', value: '1GB' },
        { label: 'Pre-Installed CMS', value: true },
        { label: 'Bandwidth', value: 'Unmetered*' },
        { label: 'Ultra-Fast Website', value: true },
        { label: 'SSL', value: 'Free' },
        { label: 'Optimized CMS', value: true },
        { label: 'Automatic Core Updates', value: true },
        { label: 'SSH Access', value: true },
        { label: 'IP', value: 'Shared' }
      ]
    },
    {
      name: 'CMS Developer',
      price: '$14.99',
      period: 'mo',
      popular: true,
      features: [
        { label: 'NVMe Storage', value: '25GB' },
        { label: 'Guaranteed RAM', value: '2GB' },
        { label: 'Pre-Installed CMS', value: true },
        { label: 'Bandwidth', value: 'Unmetered*' },
        { label: 'Ultra-Fast Website', value: true },
        { label: 'SSL', value: 'Free' },
        { label: 'Optimized CMS', value: true },
        { label: 'Automatic Core Updates', value: true },
        { label: 'SSH Access', value: true },
        { label: 'IP', value: 'Shared' }
      ]
    },
    {
      name: 'CMS Turbo',
      price: '$21.99',
      period: 'mo',
      features: [
        { label: 'NVMe Storage', value: '50GB' },
        { label: 'Guaranteed RAM', value: '4GB' },
        { label: 'Pre-Installed CMS', value: true },
        { label: 'Bandwidth', value: 'Unmetered*' },
        { label: 'Ultra-Fast Website', value: true },
        { label: 'SSL', value: 'Free' },
        { label: 'Optimized CMS', value: true },
        { label: 'Automatic Core Updates', value: true },
        { label: 'SSH Access', value: true },
        { label: 'IP', value: 'Shared' }
      ]
    },
    {
      name: 'CMS Supersonic',
      price: '$29.99',
      period: 'mo',
      features: [
        { label: 'NVMe Storage', value: 'Unlimited' },
        { label: 'Guaranteed RAM', value: '8GB' },
        { label: 'Pre-Installed CMS', value: true },
        { label: 'Bandwidth', value: 'Unmetered*' },
        { label: 'Ultra-Fast Website', value: true },
        { label: 'SSL', value: 'Free' },
        { label: 'Optimized CMS', value: true },
        { label: 'Automatic Core Updates', value: true },
        { label: 'SSH Access', value: true },
        { label: 'IP', value: 'Dedicated (On Request)' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#0B2A97] mb-4">CMS Hosting Plans</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your CMS website with our optimized hosting solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cmsPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border ${plan.popular ? 'border-blue-500' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute top-5 right-0 bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-l-md shadow-md">
                  POPULAR
                </div>
              )}
              <div className={`p-6 ${plan.popular ? 'bg-[#0B2A97] text-white' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-lg ml-1 pb-1">/{plan.period}</span>}
                </div>
              </div>
              
              <div className="px-6 py-4 flex flex-col h-full">
                <div className="flex justify-center mb-6">
                  <img 
                    src={serverIcons[index]} 
                    alt={`${plan.name} Server`} 
                    className="h-24 w-auto object-contain" 
                  />
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">NVMe Storage</span>
                    <span className="font-bold text-[#0B2A97]">{plan.features[0].value}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Guaranteed RAM</span>
                    <span className="font-bold text-[#0B2A97]">{plan.features[1].value}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Bandwidth</span>
                    <span className="font-bold text-[#0B2A97]">{plan.features[3].value}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {plan.features.slice(4, 8).map((feature, i) => (
                    typeof feature.value === 'boolean' && feature.value ? (
                      <div key={i} className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature.label}</span>
                      </div>
                    ) : null
                  ))}
                </div>
                
                <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">SSL</span>
                  <span className="font-bold text-[#0B2A97]">{plan.features[5].value}</span>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="font-medium text-gray-700">IP</span>
                  <span className="font-bold text-[#0B2A97]">{plan.features[9].value}</span>
                </div>
                
                <div className="mt-auto">
                  <button 
                    className={`w-full py-3 rounded-md font-medium transition-colors duration-300 ${plan.popular ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-[#0B2A97] hover:bg-blue-800 text-white'}`}
                  >
                    GET STARTED
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Free Domain with Annual Plans</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">30-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">24/7 Technical Support</span>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          * Fair usage policy applies to unmetered bandwidth
        </div>
      </div>
    </section>
  );
};

export default CMSPricingCards;