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
      description: 'Capture the essence of your special events with our professional event photography services, including weddings, birthdays, and engagements.',
      icon: <Users className="w-5 h-5 text-white" />,
      image: 'https://www.dropbox.com/scl/fi/hvdrquzu4b9ttk0qesuzt/IMG_6577.jpg?rlkey=g180zzat3cxp36omfm9oxxnm2&st=uofp1yvv&raw=1&dl=0',
      link: '/services#event'
    },
    {
      title: 'Corporate Photography',
      description: 'Professional corporate photography for conferences, events, and executive headshots that strengthen your brand image.',
      icon: <Briefcase className="w-5 h-5 text-white" />,
      image: 'https://www.dropbox.com/scl/fi/yunpi3ewedr0r8jfv2wep/IMG_4278.jpg?rlkey=s63yr5mhy5xxgoku3yp3j4znk&st=9ewj9yu3&raw=1&dl=0',
      link: '/services#corporate'
    },
    {
      title: 'Portrait Photography',
      description: 'Beautiful portrait photography for individuals, families, maternity, and newborns with a focus on natural expressions.',
      icon: <Camera className="w-5 h-5 text-white" />,
      image: 'https://www.dropbox.com/scl/fi/va3pdv4qjoeezgtt4uyzm/1G5A1070.jpg?rlkey=ywqd8fx1omhh9e3u219rdb8dw&st=i1o16zzs&raw=1&dl=0',
      link: '/services#portrait'
    },
    {
      title: 'Lifestyle Photography',
      description: 'Creative lifestyle photography for couples, personal branding, and storytelling that captures authentic moments.',
      icon: <Image className="w-5 h-5 text-white" />,
      image: 'https://www.dropbox.com/scl/fi/04s0sfqvgfm0oftz89dio/1G5A0528.jpg?rlkey=oxmi4x67wdsmvy0r5gfszrd2o&st=nhvb1h7v&raw=1&dl=0',
      link: '/services#lifestyle'
    },

    // Videography services
    {
      title: 'Event Videography',
      description: 'Cinematic coverage for weddings, parties and live events — highlight reels, full edits and ceremony coverage.',
      icon: <Video className="w-5 h-5 text-white" />,
      image: 'https://images.pexels.com/photos/3765131/pexels-photo-3765131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/services#videography'
    },
    {
      title: 'Commercial Videography',
      description: 'Product films, brand videos and ad-ready content for web and social platforms.',
      icon: <Video className="w-5 h-5 text-white" />,
      image: 'https://images.pexels.com/photos/3182753/pexels-photo-3182753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/services#videography'
    },
    {
      title: 'Real Estate Videography',
      description: 'Dynamic walkthroughs, aerial property showcases and twilight films to elevate listings.',
      icon: <Video className="w-5 h-5 text-white" />,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/services#videography'
    },
    {
      title: 'Social Video Production',
      description: 'Short-form, platform-optimized videos for reels, ads, and influencer content.',
      icon: <Video className="w-5 h-5 text-white" />,
      image: 'https://images.pexels.com/photos/3549463/pexels-photo-3549463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/services#videography'
    }
  ];

  const testimonials = [
    {
      quote: "MOTION+ Photography captured our wedding day beautifully. The photos exceeded our expectations, and the photographer was professional and unobtrusive.",
      author: "Sarah & Michael",
      role: "Wedding Clients"
    },
    {
      quote: "The corporate headshots for our team were excellent. Quick, professional service with great results that we're proud to use on our website.",
      author: "James Wilson",
      role: "Marketing Director"
    },
    {
      quote: "Our family portrait session was so much fun, and the photos are treasures we'll keep forever. Highly recommend MOTION+ for any photography needs.",
      author: "The Thompson Family",
      role: "Portrait Clients"
    }
  ];

  return (
    <>
      <Hero 
        title="Capturing Moments That Last Forever"
        subtitle="Professional photography services for all your special moments"
        buttonText="View Our Work"
        buttonLink="/gallery"
        backgroundImage="https://ik.imagekit.io/secula/MOTION/COLORS/_MG_6012.jpg?updatedAt=1756433879331"
      />

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
                alt="Photographer with camera" 
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
                We are a team of passionate photographers dedicated to capturing the essence of your special moments. At MOTION+, we believe every picture tells a story, and we're committed to making sure your story is told with creativity, professionalism, and technical excellence.
              </p>
              <p className="mb-8 text-gray-300">
                With years of experience across various photography specialties, we bring a unique perspective to every shoot. Our motto [don't Blink] reminds us and our clients to cherish every moment, as we're dedicated to preserving them forever through our lens.
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
              We offer a comprehensive range of professional photography services tailored to your specific needs.
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
            Let's work together to create stunning images that you'll cherish for a lifetime.
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