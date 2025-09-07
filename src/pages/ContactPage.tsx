import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | MOTION+';
  }, []);

  return (
    <>
      <Hero 
        title="Contact Us"
        subtitle="Get in touch to discuss your photography needs"
        backgroundImage="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 bg-black md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Get In <span className="text-brand-blue">Touch</span>
              </h2>
              <p className="mb-8 text-gray-300">
                We'd love to hear from you! Whether you have questions about our services, want to book a session, or need a custom quote, please fill out the form or contact us directly.
              </p>
              
              <div className="mb-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 text-brand-blue shrink-0" />
                  <div>
                    <h3 className="mb-1 font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">
                      <a href="tel:+27813932643" className="transition-colors hover:text-brand-blue">+27 81 393 2643</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 text-brand-blue shrink-0" />
                  <div>
                    <h3 className="mb-1 font-semibold text-white">Email</h3>
                    <p className="text-gray-400">
                      <a href="mailto:motion@seculastudios.com" className="transition-colors hover:text-brand-blue">motion@seculastudios.com</a>
                    </p>
                  </div>
                </div>

                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 mt-1 text-brand-blue shrink-0" />
                  <div>
                    <h3 className="mb-1 font-semibold text-white">Business Hours</h3>
                    <p className="text-gray-400">
                      Monday - Friday: 9AM - 5PM<br />
                      Saturday: 10AM - 3PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="mb-4 font-semibold text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/motion_plus__/" target="_blank" rel="noopener noreferrer" className="p-3 transition-colors bg-gray-900 rounded-full hover:bg-brand-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="p-3 transition-colors bg-gray-900 rounded-full hover:bg-brand-blue">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 transition-colors bg-gray-900 rounded-full hover:bg-brand-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;