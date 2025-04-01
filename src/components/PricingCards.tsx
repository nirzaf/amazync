import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';

type Plan = {
  name: string;
  price: string;
  period?: string;
  features: { label: string; value: string | boolean }[];
  popular?: boolean;
};

const PricingCards = () => {
  const [activeTab, setActiveTab] = useState('shared');
  
  // Section background is white to maintain alternating pattern

  const hostingTypes = [
    {
      id: 'shared',
      title: 'Shared Hosting',
      subtitle: 'Save More – High Speed'
    },
    {
      id: 'cms',
      title: 'CMS Hosting',
      subtitle: 'Best Online Store'
    },
    {
      id: 'reseller',
      title: 'Reseller Hosting',
      subtitle: 'Own Webhosting Business'
    },
    {
      id: 'vps',
      title: 'VPS Hosting',
      subtitle: 'NVMe Powered'
    },
    {
      id: 'email',
      title: 'E-mail Hosting',
      subtitle: '99.9% Inbox Delivery'
    }
  ];

  const allPlans: Record<string, Plan[]> = {
    shared: [
      {
        name: 'Business',
        price: '$1.63',
        features: [
          { label: 'NVMe Storage', value: '10GB' },
          { label: 'Bandwidth', value: '500GB' },
          { label: 'FTP Accounts', value: '10' },
          { label: 'Mail Accounts', value: 'Unlimited' },
          { label: 'Email List', value: '10' },
          { label: 'Database', value: '7' },
          { label: 'Sub-Domain', value: '15' },
          { label: 'Parked Domain', value: '15' },
          { label: 'Addon Domain', value: '5' },
          { label: 'Hourly Mails', value: '200' },
          { label: 'SSL', value: 'Free' },
          { label: 'WordPress Optimized', value: true },
          { label: 'Free Migration', value: true },
          { label: 'Live Support', value: true }
        ]
      },
      {
        name: 'Premium',
        price: '$1.96',
        features: [
          { label: 'NVMe Storage', value: '20GB' },
          { label: 'Bandwidth', value: '2TB' },
          { label: 'FTP Accounts', value: '10' },
          { label: 'Mail Accounts', value: 'Unlimited' },
          { label: 'Email List', value: '20' },
          { label: 'Database', value: '10' },
          { label: 'Sub-Domain', value: '20' },
          { label: 'Parked Domain', value: '20' },
          { label: 'Addon Domain', value: '10' },
          { label: 'Hourly Mails', value: '200' },
          { label: 'SSL', value: 'Free' },
          { label: 'WordPress Optimized', value: true },
          { label: 'Free Migration', value: true },
          { label: 'Live Support', value: true }
        ],
        popular: true
      },
      {
        name: 'Luxury',
        price: '$2.49',
        features: [
          { label: 'NVMe Storage', value: '30GB' },
          { label: 'Bandwidth', value: '3TB' },
          { label: 'FTP Accounts', value: 'Unlimited' },
          { label: 'Mail Accounts', value: 'Unlimited' },
          { label: 'Email List', value: 'Unlimited' },
          { label: 'Database', value: 'Unlimited' },
          { label: 'Sub-Domain', value: 'Unlimited' },
          { label: 'Parked Domain', value: 'Unlimited' },
          { label: 'Addon Domain', value: 'Unlimited' },
          { label: 'Hourly Mails', value: '200' },
          { label: 'SSL', value: 'Free' },
          { label: 'WordPress Optimized', value: true },
          { label: 'Free Migration', value: true },
          { label: 'Live Support', value: true }
        ]
      },
      {
        name: 'Agency',
        price: '$2.99',
        features: [
          { label: 'NVMe Storage', value: '50GB' },
          { label: 'Bandwidth', value: '5TB' },
          { label: 'FTP Accounts', value: 'Unlimited' },
          { label: 'Mail Accounts', value: 'Unlimited' },
          { label: 'Email List', value: 'Unlimited' },
          { label: 'Database', value: 'Unlimited' },
          { label: 'Sub-Domain', value: 'Unlimited' },
          { label: 'Parked Domain', value: 'Unlimited' },
          { label: 'Addon Domain', value: 'Unlimited' },
          { label: 'Hourly Mails', value: '200' },
          { label: 'SSL', value: 'Free' },
          { label: 'WordPress Optimized', value: true },
          { label: 'Free Migration', value: true },
          { label: 'Live Support', value: true }
        ]
      }
    ],
    cms: [
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
    ],
    reseller: [
      {
        name: 'Reseller 1',
        price: '$7.99',
        period: 'mo',
        features: [
          { label: 'NVMe Storage', value: '30GB' },
          { label: 'RAM Assured', value: '1GB' },
          { label: 'Clients Accounts', value: '20' },
          { label: 'Bandwidth', value: 'Unmetered*' },
          { label: 'Website Speed', value: '20x Faster' },
          { label: 'SSL', value: 'Free' },
          { label: 'WordPress Optimized', value: true },
          { label: 'Softaculous Auto Installer', value: true },
          { label: 'Your Own Branding', value: true },
          { label: 'WiseCP Billing Solution*', value: true },
          { label: 'Priority Support', value: true }
        ]
      },
      {
        name: 'Reseller 2',
        price: '$12.99',
        period: 'mo',
        popular: true,
        features: [
          { label: 'NVMe Storage', value: '60GB' },
          { label: 'RAM Assured', value: '2GB' },
          { label: 'Clients Accounts', value: '50' },
          { label: 'Bandwidth', value: 'Unmetered*' },
          { label: 'Website Speed', value: '20x Faster' },
          { label: 'SSL', value: 'Free' },
          { label: 'WordPress Optimized', value: true },
          { label: 'Softaculous Auto Installer', value: true },
          { label: 'Your Own Branding', value: true },
          { label: 'WiseCP Billing Solution*', value: true },
          { label: 'Priority Support', value: true }
        ]
      },
      {
        name: 'Reseller 3',
        price: '$18.99',
        period: 'mo',
        features: [
          { label: 'NVMe Storage', value: '100GB' },
          { label: 'RAM Assured', value: '3GB' },
          { label: 'Clients Accounts', value: '100' },
          { label: 'Bandwidth', value: 'Unmetered*' },
          { label: 'Website Speed', value: '20x Faster' },
          { label: 'SSL', value: 'Free' },
          { label: 'WordPress Optimized', value: true },
          { label: 'Softaculous Auto Installer', value: true },
          { label: 'Your Own Branding', value: true },
          { label: 'WiseCP Billing Solution*', value: true },
          { label: 'Priority Support', value: true }
        ]
      }
    ],
    vps: [
      {
        name: 'CLOUD VPS S',
        price: '$13.99',
        period: 'mo',
        features: [
          { label: 'vCPU Cores', value: '4' },
          { label: 'RAM', value: '8GB' },
          { label: 'Storage', value: '50GB NVMe/200GB SSD' },
          { label: 'Bandwidth', value: '32TB' },
          { label: 'Snapshot', value: '1' },
          { label: 'Dedicated IPv4', value: '1' },
          { label: 'Security at Our Core', value: true },
          { label: 'Provisioning in Minutes', value: true },
          { label: 'Free DNS Management', value: true },
          { label: 'Free Migration', value: true },
          { label: 'Managed Support*', value: true }
        ]
      },
      {
        name: 'CLOUD VPS M',
        price: '$23.99',
        period: 'mo',
        popular: true,
        features: [
          { label: 'vCPU Cores', value: '6' },
          { label: 'RAM', value: '16GB' },
          { label: 'Storage', value: '100GB NVMe/400GB SSD' },
          { label: 'Bandwidth', value: '32TB' },
          { label: 'Snapshot', value: '2' },
          { label: 'Dedicated IPv4', value: '1' },
          { label: 'Security at Our Core', value: true },
          { label: 'Provisioning in Minutes', value: true },
          { label: 'Free DNS Management', value: true },
          { label: 'Free Migration', value: true },
          { label: 'Managed Support*', value: true }
        ]
      },
      {
        name: 'CLOUD VPS L',
        price: '$33.99',
        period: 'mo',
        features: [
          { label: 'vCPU Cores', value: '8' },
          { label: 'RAM', value: '30GB' },
          { label: 'Storage', value: '200GB NVMe/800GB SSD' },
          { label: 'Bandwidth', value: '32TB' },
          { label: 'Snapshot', value: '3' },
          { label: 'Dedicated IPv4', value: '1' },
          { label: 'Security at Our Core', value: true },
          { label: 'Provisioning in Minutes', value: true },
          { label: 'Free DNS Management', value: true },
          { label: 'Free Migration', value: true },
          { label: 'Managed Support*', value: true }
        ]
      },
      {
        name: 'CLOUD VPS XL',
        price: '$53.99',
        period: 'mo',
        features: [
          { label: 'vCPU Cores', value: '10' },
          { label: 'RAM', value: '60GB' },
          { label: 'Storage', value: '400GB NVMe/1.6TB SSD' },
          { label: 'Bandwidth', value: '32TB' },
          { label: 'Snapshot', value: '4' },
          { label: 'Dedicated IPv4', value: '1' },
          { label: 'Security at Our Core', value: true },
          { label: 'Provisioning in Minutes', value: true },
          { label: 'Free DNS Management', value: true },
          { label: 'Free Migration', value: true },
          { label: 'Managed Support*', value: true }
        ]
      }
    ],
    email: [
      {
        name: 'eMail Lite',
        price: '$1.00',
        period: 'mo',
        features: [
          { label: 'MailBox', value: '01 (5GB)' },
          { label: 'Additional MailBox', value: '$0.5/mo' },
          { label: 'Additional MailBoxes Limit', value: 'Up to 9' },
          { label: 'SMTP, IMAP, POP3', value: true },
          { label: 'Web Mail Access', value: true },
          { label: 'Mobile Sync', value: true },
          { label: 'SSL', value: 'Free' },
          { label: 'Setup', value: 'Free*' },
          { label: 'DNS Management', value: 'Free' },
          { label: 'Money Back Guarantee', value: '30 Days' },
          { label: 'Super Support', value: '24x7' }
        ]
      },
      {
        name: 'eMail Business',
        price: '$1.50',
        period: 'mo',
        popular: true,
        features: [
          { label: 'MailBox', value: '01 (10GB)' },
          { label: 'Additional MailBox', value: '$1/mo' },
          { label: 'Additional MailBoxes Limit', value: 'Up to 24' },
          { label: 'SMTP, IMAP, POP3', value: true },
          { label: 'Web Mail Access', value: true },
          { label: 'Mobile Sync', value: true },
          { label: 'SSL', value: 'Free' },
          { label: 'Setup', value: 'Free*' },
          { label: 'DNS Management', value: 'Free' },
          { label: 'Money Back Guarantee', value: '30 Days' },
          { label: 'Super Support', value: '24x7' }
        ]
      },
      {
        name: 'eMail Pro',
        price: '$3.00',
        period: 'mo',
        features: [
          { label: 'MailBox', value: '01 (25GB)' },
          { label: 'Additional MailBox', value: '$2/mo' },
          { label: 'Additional MailBoxes Limit', value: 'Up to 49' },
          { label: 'SMTP, IMAP, POP3', value: true },
          { label: 'Web Mail Access', value: true },
          { label: 'Mobile Sync', value: true },
          { label: 'SSL', value: 'Free' },
          { label: 'Setup', value: 'Free*' },
          { label: 'DNS Management', value: 'Free' },
          { label: 'Money Back Guarantee', value: '30 Days' },
          { label: 'Super Support', value: '24x7' }
        ]
      }
    ]
  };

  return (
    <section className="py-20 bg-white">
      {/* Hosting Type Tabs */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {hostingTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`w-[200px] flex-shrink-0 flex flex-col items-center px-6 py-4 rounded-lg transition-all transform hover:scale-105 ${
                activeTab === type.id
                  ? 'bg-[#0037C1] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg font-semibold whitespace-nowrap">{type.title}</span>
              <span className="text-sm opacity-80 whitespace-nowrap">{type.subtitle}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 justify-items-center">
          {allPlans[activeTab]?.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-lg border-2 ${
                plan.popular ? 'border-[#0037C1]' : 'border-gray-100'
              } shadow-lg p-6 hover:shadow-xl transition-shadow w-[280px] h-[550px] flex flex-col justify-between mx-auto`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#0037C1] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-[#0037C1]">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500">/{plan.period}</span>
                  )}
                </div>
              </div>

              <div className="space-y-1 flex-grow overflow-y-auto">
                {plan.features.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center justify-between text-gray-600 text-sm hover:bg-gray-50 py-1 px-2 rounded-lg transition-colors"
                  >
                    <span className="w-[45%] truncate">{feature.label}</span>
                    <span className={`w-[45%] font-medium text-right truncate ${
                      typeof feature.value === 'boolean' ? 'text-[#0037C1]' : ''
                    }`}>
                      {typeof feature.value === 'boolean' ? '✓' : feature.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button
                  variant={plan.popular ? "primary" : "secondary"}
                  size="md"
                  className={`w-full transform transition-all hover:scale-105 text-white text-sm ${
                    plan.popular
                      ? 'bg-[#0037C1] hover:bg-[#0042E5] shadow-lg'
                      : 'bg-gray-500 hover:bg-gray-600'
                  }`}
                >
                  GET STARTED
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;