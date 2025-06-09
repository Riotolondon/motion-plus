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
      description: 'We use top-of-the-line cameras, lenses, and lighting equipment to deliver exceptional quality images.'
    },
    {
      icon: <Award className="w-8 h-8 text-brand-blue" />,
      title: 'Experienced Team',
      description: 'Our photographers bring years of experience and artistic vision to every photography session.'
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-blue" />,
      title: 'Timely Delivery',
      description: 'We understand the importance of receiving your photos promptly and deliver edited images on schedule.'
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-blue" />,
      title: 'Passion for Photography',
      description: 'We are passionate about photography and dedicated to capturing beautiful, meaningful images.'
    }
  ];

  return (
    <>
      <Hero 
        title="About MOTION+"
        subtitle="Professional photographers capturing life's precious moments"
        backgroundImage="https://previews.dropbox.com/p/thumb/ACr6qdsf1sEZh_sR4nYnw55ZUjr6tZqqiKPZa90zzF8HsQTedrv47XJeMb7vK6-dbpzOSrCEK4OwMwcdF2CJIO8ZHPT2JSOXxKoMaZKCFrVCOWzWclit6riuC4WMlXTxfa6_PzmO7TF_Ayityj8twphFEQnB57gMDvgtMnQR5XxHJHY0GlmNs95B31a3pee6utB_b_BBd4nmRQpskGV52kPv4dXregWTaE5TGGPYRtAhtvVoJgz_SCWnNg4-nGKOLTqF53PL6y7WBm8aCeY_rENoU_iQVhf19B72ZYdbcYA5_cqZ_Q7zluPlMp8N4hB4MEM/p.jpeg"
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
                MOTION+ Photography was founded with a simple mission: to capture life's most precious moments with creativity, skill, and passion.
              </p>
              <p className="mb-4 text-gray-300">
                Our journey began when a group of photography enthusiasts came together, united by their love for the art and their desire to create meaningful visual stories for clients.
              </p>
              <p className="mb-4 text-gray-300">
                Today, we've grown into a respected photography studio offering a wide range of services, from wedding and event photography to corporate headshots and lifestyle sessions.
              </p>
              <p className="text-gray-300">
                Our motto, [don't Blink], reminds us and our clients to cherish every moment, as we're dedicated to preserving them forever through our lens.
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
                src="https://previews.dropbox.com/p/thumb/ACpL524wmreeTQ13MknYcky83obMJHr-TUrQ1a16KpDjIXGq74fUNUa2IMzfzx-vUqXKE-PX9EyfBDzNuamkVi6HnC9snTFwE_hn4EngKpJ22lvj7UwRKIUPjA7s58UPSUZiKVUShemfgMBm1ddCZJ2fzIgVydZzy2E_QgARWWFPL9-I1Mr5sPxqaemBnJJ9Zj_18B_j380_5uaaqfDxpRSz2ZURT6SPIQsF-rvukYWHVI7ZvpTsse2eMT7CyVR0-1Zfg_6p4Gb568ZuIgkynpx0/p.png" 
                alt="Photographer at work" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-10 -left-10 bg-gray-900 p-6 rounded-lg shadow-lg max-w-[200px]">
                <p className="text-sm italic text-gray-300">"Photography is the art of freezing time and preserving emotions forever."</p>
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
              We believe in creating authentic, timeless images that tell your unique story.
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