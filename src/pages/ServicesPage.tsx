import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import PricingTable from '../components/PricingTable';

const ServicesPage: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    document.title = 'Our Services | MOTION+';
    
    // Scroll to the section based on hash
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, [location]);

  const eventPricing = [
    {
      title: 'Wedding Photography - Package A',
      description: '4 hours coverage',
      price: 'R6,000',
    },
    {
      title: 'Wedding Photography - Package B',
      description: '8 hours coverage + 100 edited photos',
      price: 'R12,000',
    },
    {
      title: 'Wedding Photography - Package C',
      description: 'Full day coverage + 200 edited photos',
      price: 'R18,000',
    },
    {
      title: 'Engagement Photoshoot',
      description: '1-hour session + 20 edited photos',
      price: 'R2,000',
    },
    {
      title: 'Birthday Party - Standard',
      description: '3 hours coverage + 50 edited photos',
      price: 'R3,500',
    },
    {
      title: 'Birthday Party - Premium',
      description: '6 hours coverage + 100 edited photos + photobook',
      price: 'R6,500',
    },
  ];

  const corporatePricing = [
    {
      title: 'Conference & Event - Half Day',
      description: '4 hours coverage',
      price: 'R4,500',
    },
    {
      title: 'Conference & Event - Full Day',
      description: '8 hours coverage',
      price: 'R8,500',
    },
    {
      title: 'Corporate Headshots (1-5 people)',
      description: 'Professional headshots with retouching',
      price: 'R1,000 per person',
    },
    {
      title: 'Corporate Headshots (6-10 people)',
      description: 'Professional headshots with retouching',
      price: 'R850 per person',
    },
    {
      title: 'Corporate Headshots (11+ people)',
      description: 'Professional headshots with retouching',
      price: 'R750 per person',
    },
  ];

  const portraitPricing = [
    {
      title: 'Family Portrait Session',
      description: '1-hour session + 30 edited photos',
      price: 'R2,500',
    },
    {
      title: 'Maternity Photoshoot',
      description: '2-hour session + 40 edited photos',
      price: 'R3,000',
    },
    {
      title: 'Newborn Photoshoot',
      description: '3-hour session + 50 edited photos',
      price: 'R4,500',
    },
  ];

  const lifestylePricing = [
    {
      title: 'Couple/Anniversary Photoshoot',
      description: '1-hour session + 25 edited photos',
      price: 'R2,200',
    },
    {
      title: 'Personal Branding Photography',
      description: '2-hour session + 50 edited photos',
      price: 'R3,500',
    },
  ];

  return (
    <>
      <Hero 
        title="Our Services & Pricing"
        subtitle="Professional photography packages tailored to your needs"
        backgroundImage="https://previews.dropbox.com/p/thumb/ACp8U4NVPADJ75oLn6e1qOx_sJBO2pVWlLlqr3wa57Tht7NTMnf9btk_vA8TuAArUk9PTQb0rWHDcj-dkLKkW0aktK84zj3bTl3WJcwqg9ZYMM8MgRqRBT_sCFC1Xu1LKlplHikXjGUsZaF22YcmMoxlnnUuKiY9I6eqSFpj7ULRlQC7Zp31wdfVgM1RPhrpnHEvrpOtrY5NTVJVw6VfjSfyUnaFu3T5xWd83pbtcWkgqu08edWXlanS0I-D5onqWPJmGZ_Zkd1b6aN8cyDtCT8KIqZlFnUhNVxgVtfsXjp_jpMQTgqGnAbUxNDK4QL9NOI/p.jpeg"
      />
      
      <section className="py-16 bg-black md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Photography Services</h2>
            <p className="max-w-3xl mx-auto text-gray-400">
              We offer a comprehensive range of professional photography services at competitive rates.
              All prices include professional editing and digital delivery of your photos.
            </p>
          </div>
          
          <div id="event" className="pt-16 -mt-16">
            <PricingTable category="Event" items={eventPricing} />
          </div>
          
          <div id="corporate" className="pt-16 -mt-16">
            <PricingTable category="Corporate" items={corporatePricing} />
          </div>
          
          <div id="portrait" className="pt-16 -mt-16">
            <PricingTable category="Portrait" items={portraitPricing} />
          </div>
          
          <div id="lifestyle" className="pt-16 -mt-16">
            <PricingTable category="Lifestyle" items={lifestylePricing} />
          </div>

          <div className="p-8 mt-12 bg-gray-900 rounded-lg">
            <h3 className="mb-4 text-2xl font-bold">Custom Packages</h3>
            <p className="mb-4 text-gray-300">
              Need something specific? We can create custom photography packages tailored to your unique requirements.
            </p>
            <p className="text-gray-300">
              Contact us to discuss your project and get a personalized quote.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;