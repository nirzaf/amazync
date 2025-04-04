import { motion } from 'framer-motion';
import { Button } from '../shared';

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
        { label: 'IP', value: 'Shared' },
        { label: 'Priority Managed Support', value: true }
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
        { label: 'IP', value: 'Shared' },
        { label: 'Priority Managed Support', value: true }
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
        { label: 'IP', value: 'Shared' },
        { label: 'Priority Managed Support', value: true }
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
        { label: 'IP', value: 'Dedicated (On Request)' },
        { label: 'Priority Managed Support', value: true }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your CMS Hosting Plan</h2>
          <div className="flex justify-center gap-8 mb-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Advanced Stack</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Lightning-Fast Website</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Managed Support</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cmsPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${plan.popular ? 'bg-blue-700 text-white' : 'bg-white text-gray-800'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 transform translate-x-8 translate-y-4 rotate-45">
                  POPULAR
                </div>
              )}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-lg ml-1 pb-1">/{plan.period}</span>}
                </div>
                <div className="flex justify-center mb-6">
                  <img 
                    src={`https://ik.imagekit.io/qch9hivley/cms-server-icon-${index + 1}.svg?updatedAt=1743447500000`} 
                    alt={`${plan.name} Server`} 
                    className="h-16 w-auto"
                  />
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className={`flex-shrink-0 ${typeof feature.value === 'boolean' && feature.value ? '' : 'invisible'}`}>
                        <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-2">
                        <span className={`${plan.popular ? 'text-white/80' : 'text-gray-600'} text-sm`}>{feature.label}</span>
                        {typeof feature.value !== 'boolean' && (
                          <span className={`block font-semibold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{feature.value}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Button 
                  className={`w-full py-3 ${plan.popular ? 'bg-white text-blue-700 hover:bg-gray-100' : 'bg-blue-700 text-white hover:bg-blue-800'}`}
                >
                  GET STARTED
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          * Fair usage policy applies to unmetered bandwidth
        </div>
      </div>
    </section>
  );
};

export default CMSPricingCards;