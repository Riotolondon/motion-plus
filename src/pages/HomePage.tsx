import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Users, Briefcase, Image, Video } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'MOTION+';
  }, []);

  const services = [
    {
      title: 'Event Photography',
      description: 'We capture all the magic at your special events - from intimate birthday parties to grand weddings. Every moment, every emotion, beautifully preserved.',
      icon: <Users className="w-5 h-5 text-white" />,
      image: 'https://www.dropbox.com/scl/fi/04s0sfqvgfm0oftz89dio/1G5A0528.jpg?rlkey=oxmi4x67wdsmvy0r5gfszrd2o&st=nhvb1h7v&raw=1&dl=0',
      link: '/services#event'
    },
    {
      title: 'Corporate Photography',
      description: 'Professional headshots and corporate events that make your team look amazing. Perfect for websites, LinkedIn, and company materials.',
      icon: <Briefcase className="w-5 h-5 text-white" />,
      image: 'https://www.dropbox.com/scl/fi/yunpi3ewedr0r8jfv2wep/IMG_4278.jpg?rlkey=s63yr5mhy5xxgoku3yp3j4znk&st=9ewj9yu3&raw=1&dl=0',
      link: '/services#corporate'
    },
    {
      title: 'Portrait Photography',
      description: 'Family portraits, maternity shoots, newborn sessions - we love capturing life\'s precious milestones with warmth and authenticity.',
      icon: <Camera className="w-5 h-5 text-white" />,
      image: 'https://www.dropbox.com/scl/fi/va3pdv4qjoeezgtt4uyzm/1G5A1070.jpg?rlkey=ywqd8fx1omhh9e3u219rdb8dw&st=i1o16zzs&raw=1&dl=0',
      link: '/services#portrait'
    },
    {
      title: 'Fashion Photography',
      description: 'Creative fashion shoots, personal branding, and lifestyle photography that tells your unique story with style and flair.',
      icon: <Image className="w-5 h-5 text-white" />,
      image: 'https://ik.imagekit.io/secula/MOTION/iGovu_Final/Model_Pictures/1G5A2102.jpg?updatedAt=1756434232980',
      link: '/services#lifestyle'
    },

    // Videography services
    {
      title: 'Event Videography',
      description: 'Cinematic wedding films, party highlights, and event coverage that brings your special moments to life. Perfect for sharing and reliving.',
      icon: <Video className="w-5 h-5 text-white" />,
      image: 'https://ik.imagekit.io/secula/MOTION/Cover%20Photos/sid-suratia-9dO0uf0NYDc-unsplash.jpg?updatedAt=1757289185334',
      link: '/services#videography'
    },
    {
      title: 'Commercial Videography',
      description: 'Brand videos, product showcases, and promotional content that gets your message across. Perfect for social media and marketing.',
      icon: <Video className="w-5 h-5 text-white" />,
      image: 'https://ik.imagekit.io/secula/MOTION/Cover%20Photos/kyle-loftus-5MUw_NHo5i4-unsplash.jpg?updatedAt=1757289184920',
      link: '/services#videography'
    },
    {
      title: 'Real Estate Videography',
      description: 'Property walkthroughs and aerial shots that make listings stand out. We help sell properties with stunning visual storytelling.',
      icon: <Video className="w-5 h-5 text-white" />,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/services#videography'
    },
    {
      title: 'Social Video Production',
      description: 'TikTok-ready content, Instagram reels, and short-form videos that engage your audience and boost your online presence.',
      icon: <Video className="w-5 h-5 text-white" />,
      image: 'https://images.pexels.com/photos/3549463/pexels-photo-3549463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/services#videography'
    }
  ];

  const testimonials = [
    {
      quote: "MOTION+ captured our wedding day beautifully. The photos and video exceeded our expectations, and the team was professional and unobtrusive.",
      author: "Sarah & Michael",
      role: "Wedding Clients"
    },
    {
      quote: "The corporate headshots and promotional video for our team were excellent. Quick, professional service with great results that we're proud to use on our website.",
      author: "James Wilson",
      role: "Marketing Director"
    },
    {
      quote: "Our family portrait session was so much fun, and the photos and video are treasures we'll keep forever. Highly recommend MOTION+ for any photography or videography needs.",
      author: "The Thompson Family",
      role: "Portrait Clients"
    }
  ];

  return (
    <>
      <div className="relative">
        <Hero 
          title="Capturing Moments That Last Forever"
          subtitle="Professional Multimedia services for all your special moments"
          buttonText="Explore the MOTION"
          buttonLink="/gallery"
          backgroundImage="https://ik.imagekit.io/secula/MOTION/COLORS/_MG_6012.jpg?updatedAt=1756433879331"
        />

        {/* Floating announcement card: responsive - stacks on xs, overlays on sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="z-20 sm:absolute left-1/2 sm:bottom-[-36px] md:bottom-[-54px] transform -translate-x-1/2 w-full sm:w-[92%] md:w-3/4 lg:w-2/3 max-w-4xl px-4"
        >
          <div className="flex flex-col items-center gap-4 p-4 border shadow-lg sm:flex-row md:p-6 bg-white/5 backdrop-blur-sm border-white/10 rounded-xl">
            <img
              src="https://ik.imagekit.io/secula/MOTION/1G5A0261.jpg?updatedAt=1756512542331"
              alt="Press Play on MOTION+"
              className="flex-shrink-0 object-cover w-full h-40 rounded-md sm:w-20 sm:h-20"
            />
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-lg font-semibold">
                Press Play on <span className="text-brand-blue">MOTION+</span>
              </h4>
              <p className="mt-1 text-sm text-gray-300">
                A show hosted by MOTION+ — The Spotlight for emerging stars.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 mt-3 sm:flex-row sm:justify-start">
                <Link
                  to="/press-play"
                  className="w-full px-4 py-2 text-sm font-medium text-center text-white rounded-md sm:w-auto bg-brand-blue hover:bg-blue-600"
                >
                  Watch Now
                </Link>
                <Link
                  to="/press-play"
                  className="w-full text-sm text-center text-gray-300 underline sm:w-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-black md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://ik.imagekit.io/secula/MOTION/iGovu_Final/1G5A2025.jpg?updatedAt=1756436072913" 
                alt="MOTION+" 
                className="rounded-lg shadow-lg object-cover h-[500px] w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                About <span className="text-brand-blue">MOTION+</span>
              </h2>
              <p className="mb-6 text-gray-300">
                We're a team of passionate photographers and videographers dedicated to capturing the essence of your special moments. At MOTION+, we believe every picture and video tells a story, and we're committed to making sure your story is told with creativity, professionalism, and technical excellence.
              </p>
              <p className="mb-8 text-gray-300">
                With years of experience across various photography and videography specialties, we bring a unique perspective to every shoot. Our motto [don't Blink] reminds us and our clients to cherish every moment, as we're dedicated to preserving them forever through our lens and camera.
              </p>
              <Link
                to="/about"
                className="inline-block px-6 py-2 font-medium transition-colors duration-300 border-2 rounded-md border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="max-w-3xl mx-auto text-gray-400">
              We offer a comprehensive range of professional photography and videography services tailored to your specific needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link to={service.link} key={index}>
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  image={service.image}
                />
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-block px-6 py-3 font-medium transition-colors duration-300 border-2 rounded-md border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-brand-blue">
        <div className="container px-4 mx-auto text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Ready to Capture Your Special Moments?</h2>
          <p className="max-w-3xl mx-auto mb-8 text-white text-opacity-90">
            Let's work together to create stunning photos and videos that you'll cherish for a lifetime.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 text-lg font-medium transition-colors duration-300 bg-white rounded-md text-brand-blue hover:bg-gray-100"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-black md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
            <p className="max-w-3xl mx-auto text-gray-400">
              Read testimonials from our satisfied clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;