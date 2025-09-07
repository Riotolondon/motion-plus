import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Award, Clock, Heart } from 'lucide-react';
import Hero from '../components/Hero';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | MOTION+ Photography';
  }, []);

  const features = [
    {
      icon: <Camera className="w-8 h-8 text-brand-blue" />,
      title: 'Professional Equipment',
      description: 'We use top-of-the-line cameras, lenses, lighting, and video equipment to deliver exceptional quality photos and videos.'
    },
    {
      icon: <Award className="w-8 h-8 text-brand-blue" />,
      title: 'Experienced Team',
      description: 'Our photographers and videographers bring years of experience and artistic vision to every shoot.'
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-blue" />,
      title: 'Timely Delivery',
      description: 'We understand the importance of receiving your content promptly and deliver edited photos and videos on schedule.'
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-blue" />,
      title: 'Passion for Visual Storytelling',
      description: 'We are passionate about photography and videography and dedicated to capturing beautiful, meaningful content.'
    }
  ];

  return (
    <>
      <Hero 
        title="About MOTION+"
        subtitle="Professional photographers & videographers capturing life's precious moments"
        backgroundImage="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <section className="py-16 bg-black md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Our <span className="text-brand-blue">Story</span>
              </h2>
              <p className="mb-4 text-gray-300">
                MOTION+ was founded with a simple mission: to capture life's most precious moments with creativity, skill, and passion through both photography and videography.
              </p>
              <p className="mb-4 text-gray-300">
                Our journey began when a group of photography and videography enthusiasts came together, united by their love for visual storytelling and their desire to create meaningful content for clients.
              </p>
              <p className="mb-4 text-gray-300">
                Today, we've grown into a respected creative studio offering a wide range of services, from wedding photography and videography to corporate headshots, lifestyle sessions, and commercial video production.
              </p>
              <p className="text-gray-300">
                Our motto, [don't Blink], reminds us and our clients to cherish every moment, as we're dedicated to preserving them forever through our lens and camera.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://ik.imagekit.io/secula/MOTION/DSCF0471(1).jpg?updatedAt=1756437078872" 
                alt="Photographer at work" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-10 -left-10 bg-gray-900 p-6 rounded-lg shadow-lg max-w-[200px]">
                <p className="text-sm italic text-gray-300">"Photography and videography are the arts of freezing time and preserving emotions forever."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Approach</h2>
            <p className="max-w-3xl mx-auto text-gray-400">
              We believe in creating authentic, timeless photos and videos that tell your unique story.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 text-center bg-gray-900 rounded-lg"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default AboutPage;