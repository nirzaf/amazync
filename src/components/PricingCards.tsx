import { Check } from 'lucide-react';
import Button from './Button';

const PricingCards = () => {
  const plans = [
    {
      name: 'Starter Cloud',
      price: '$2.95',
      period: '/mo',
      features: [
        '1 Website',
        '50 GB SSD Storage',
        'Unmetered Bandwidth',
        'Free SSL Certificate',
        'Free Domain (1st Year)',
        '24/7 Support'
      ]
    },
    {
      name: 'Plus Cloud',
      price: '$4.95',
      period: '/mo',
      features: [
        'Unlimited Websites',
        '100 GB SSD Storage',
        'Unmetered Bandwidth',
        'Free SSL Certificate',
        'Free Domain (1st Year)',
        'Advanced Security',
        'Daily Backups'
      ]
    },
    {
      name: 'Turbo Cloud',
      price: '$8.95',
      period: '/mo',
      popular: true,
      features: [
        'Unlimited Websites',
        '200 GB SSD Storage',
        'Unmetered Bandwidth',
        'Free SSL Certificate',
        'Free Domain (1st Year)',
        'Advanced Security',
        'Daily Backups',
        'Turbo Performance',
        'WordPress Optimization'
      ]
    },
    {
      name: 'Business Cloud',
      price: '$14.95',
      period: '/mo',
      features: [
        'Unlimited Websites',
        '500 GB SSD Storage',
        'Unmetered Bandwidth',
        'Free SSL Certificate',
        'Free Domain (1st Year)',
        'Advanced Security',
        'Daily Backups',
        'Turbo Performance',
        'WordPress Optimization',
        'Dedicated Resources'
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Choose Your Perfect Plan</h2>
          <p className="mt-4 text-lg text-gray-600">2024 Spring Savings Event: Up to 77% Off</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-lg shadow-lg p-8 ${plan.popular ? 'border-2 border-blue-500' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <Button 
                  variant={plan.popular ? "primary" : "outline"} 
                  className="w-full mb-8"
                >
                  Select Plan
                </Button>
                <ul className="space-y-4 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;