import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, Briefcase, Heart, Image as ImageIcon } from 'lucide-react';
import Hero from '../components/Hero';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | MOTION+ Photography';
  }, []);

  const photoServices = [
    {
      title: 'Portrait Photography',
      includes: [
        {
          main: 'Individual Portrait Sessions',
          sub: [
            'Studio or location-based shoots for professional headshots, lifestyle portraits, or creative personal branding.',
          ]
        },
        {
          main: 'Couple & Engagement Shoots',
          sub: [
            'Intimate and romantic photo sessions capturing chemistry and connection.',
          ]
        },
        {
          main: 'Family Sessions',
          sub: [
            'Group portraits for families with creative direction and natural interaction.',
          ]
        },
      ],
      icon: <Heart className="w-6 h-6 text-brand-blue" />
    },
    {
      title: 'Event Photography',
      includes: [
        {
          main: 'Corporate Events',
          sub: [
            'Coverage for conferences, launches, award ceremonies, and networking events.',
          ]
        },
        {
          main: 'Private Events',
          sub: [
            'Birthdays, anniversaries, graduations, and private parties, with candid and posed shots.',
          ]
        },
        {
          main: 'Weddings',
          sub: [
            'Full-day or customized wedding photography packages including pre-wedding shoots and reception coverage.',
          ]
        },
      ],
      icon: <Heart className="w-6 h-6 text-brand-blue" />
    },
    {
      title: 'Commercial & Product Photography',
      includes: [
        {
          main: 'E-commerce Product Shoots',
          sub: [
            'Clean, high-quality images for online stores with consistent backgrounds.',
          ]
        },
        {
          main: 'Lifestyle Product Photography',
          sub: [
            'Creative, in-context shots to showcase products in use.',
          ]
        },
        {
          main: 'Menu & Food Photography',
          sub: [
            'High-end styling and photography for restaurants, chefs, and food brands.',
          ]
        },
      ],
      icon: <Users className="w-6 h-6 text-brand-blue" />
    },
    {
      title: ' Fashion Photography',
      includes: [
        {
          main: 'Lookbooks & Editorials',
          sub: [
            'Styled shoots for fashion designers, boutiques, or magazines.',
          ]
        },
        {
          main: 'Model Portfolio Shoots',
          sub: [
            'Studio and location shoots to build professional model portfolios.',
          ]
        },
      ],
      icon: <Users className="w-6 h-6 text-brand-blue" />
    },
    {
      title: 'Real Estate & Architecture',
      includes: [
        {
          main: 'Property Listings',
          sub: [
            'High-quality interior and exterior photos for real estate agents or developers.',
          ]
        },
        {
          main: 'Architectural Shoots',
          sub: [
            'Creative angles and lighting to highlight design and structure.',
          ]
        },
      ],
      icon: <ImageIcon className="w-6 h-6 text-brand-blue" />
    }
  ];

  const videoServices = [
    {
      title: 'Event Videography',
      includes: [
        {
          main: 'Weddings',
          sub: [
            'Cinematic storytelling covering the full day with optional highlight reels and full edits.',
          ]
        },
        {
          main: 'Corporate Events',
          sub: [
            'Professional recap videos, interviews, and promotional edits for company use.',
          ]
        },
        {
          main: 'Private Celebrations',
          sub: [
            'Birthday parties, baby showers, and other special moments documented creatively.',
          ]
        },
      ],
      icon: <Camera className="w-6 h-6 text-brand-blue" />
    },
    {
      title: 'Commercial & Promotional Videos',
      includes: [
        {
          main: 'Brand Videos',
          sub: [
            'Visual storytelling that showcases your brand’s mission, values, and products.',
          ]
        },
        {
          main: 'Product Promos',
          sub: [
            'Short, engaging videos for ads, social media, or product launches.',
          ]
        },
        {
          main: 'Corporate Profiles',
          sub: [
            'Company overview videos for websites, investor presentations, or onboarding.',
          ]
        },
      ],
      icon: <Camera className="w-6 h-6 text-brand-blue" />
    },
    {
      title: 'Social Media Content Creation',
      includes: [
        {
          main: 'Short Form Video (Reels, TikToks, Shorts)',
          sub: [
            'Trend-aware, engaging content tailored for platform algorithms.',
          ]
        },
        {
          main: 'Content Days',
          sub: [
            'ull-day content capture sessions for brands, influencers, or businesses needing bulk monthly content.',
          ]
        },
      ],
      icon: <Camera className="w-6 h-6 text-brand-blue" />
    },
    {
      title: 'Documentary & Storytelling',
      includes: [
        {
          main: 'Mini-Docs',
          sub: [
            'Short documentaries that capture real-life stories, brand journeys, or client experiences.',
          ]
        },
        {
          main: 'Behind-the-Scenes (BTS)',
          sub: [
            'Coverage of shoots, creative processes, and project development.',
          ]
        },
      ],
      icon: <Camera className="w-6 h-6 text-brand-blue" />
    },
    {
      title: 'Real Estate Videography',
      includes: [
        {
          main: 'Property Tours',
          sub: [
            'Dynamic walkthroughs of homes, offices, or developments using gimbal, drone, or handheld filming.',
          ]
        },
        {
          main: 'Architectural Showcases',
          sub: [
            'Highlight the design and features of high-end or modern builds.',
          ]
        },
      ],
      icon: <Camera className="w-6 h-6 text-brand-blue" />
    }
  ];

  interface IncludeItem {
    main: string;
    sub?: string[];
  }

  const ServiceCard: React.FC<{
    title: string;
    includes: (string | IncludeItem)[];
    icon: React.ReactNode;
  }> = ({ title, includes, icon }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 transition-all duration-300 bg-gray-900 rounded-lg shadow-lg hover:transform hover:scale-105"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      <div className="space-y-2">
        <h4 className="mb-3 font-medium text-gray-300">What's Included:</h4>
        <ul className="space-y-4">
          {includes.map((item, index) => (
            <li key={index}>
              {typeof item === 'string' ? (
                <div className="flex items-start gap-2 text-gray-400">
                  <span className="mt-1 text-brand-blue">•</span>
                  <span className="text-sm">{item}</span>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 text-brand-blue">•</span>
                    <span className="text-sm font-medium text-gray-300">{item.main}</span>
                  </div>
                  {item.sub && (
                    <ul className="ml-6 space-y-1">
                      {item.sub.map((subItem, subIndex) => (
                        <li key={subIndex} className="flex items-start gap-2 text-gray-400">
                          <span className="mt-1 text-brand-blue">-</span>
                          <span className="text-sm">{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  const ServiceSection: React.FC<{
    title: string;
    services: Array<{
      title: string;
      includes: (string | IncludeItem)[];
      icon: React.ReactNode;
    }>;
    id: string;
  }> = ({ title, services, id }) => (
    <div id={id} className="pt-16 mb-16 -mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          <span className="text-brand-blue">{title}</span> Services
        </h2>
        <div className="w-24 h-1 mx-auto bg-brand-blue"></div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            includes={service.includes}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Hero 
        title="Our Photography Services"
        subtitle="Professional photography packages tailored to capture your special moments"
        backgroundImage="https://ik.imagekit.io/secula/MOTION/iGovu_Final/Model_Pictures/1G5A2113.jpg?updatedAt=1756434246810"
      />
      
      <section className="py-16 bg-black md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What We Offer</h2>
            <p className="max-w-3xl mx-auto text-gray-400">
              We provide comprehensive photography services with professional equipment, expert editing, 
              and personalized attention to detail. Each package is designed to capture your unique story 
              and deliver exceptional results.
            </p>
          </div>
          
          <ServiceSection
            title="Photography"
            services={photoServices}
            id="photography"
          />
          
          <ServiceSection
            title="Videography"
            services={videoServices}
            id="videography"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 mt-16 text-center bg-gray-900 rounded-lg"
          >
            <ImageIcon className="w-12 h-12 mx-auto mb-4 text-brand-blue" />
            <h3 className="mb-4 text-2xl font-bold">Custom Packages</h3>
            <p className="max-w-2xl mx-auto mb-6 text-gray-300">
              Need something specific? We create custom packages tailored to your unique requirements. 
              Whether it's a special event, commercial project, or creative collaboration, we'll work with you to 
              design the perfect solution.
            </p>
            <p className="text-gray-400">
              Contact us to discuss your project and receive a personalized quote based on your specific needs.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;