import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import GalleryItem from '../components/GalleryItem';
import ImageModal from '../components/ImageModal';

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  useEffect(() => {
    document.title = 'Gallery | MOTION+';
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: 'Beauty Pageant',
      category: 'portrait',
      image: 'https://www.dropbox.com/scl/fi/hjsel87wl3leraw7a9amq/IMG_9146.jpg?rlkey=hgbpxpwnxvzit0vhobaf839qj&st=ov6ou8md&raw=1&dl=0',
    },
    {
      id: 2,
      title: 'International Women In Engineering Day',
      category: 'corporate',
      image: 'https://previews.dropbox.com/p/thumb/ACoCxieyKZRJ5eERzMT518iTV-csNUtnQk6B8EjtHrnLqPFX6Js11ssoweYe_WrEdE8HiV7UmPF_2OIYGe4PpHc1FMrmBCq7WGi5QZuhknT81A2wC4qhXhliX6sGmXvbTdNdeEGaTu4lAQujD8Y1fRLYxuRfl9SkunRBgSOUGwo2J_yRLtXpWhvoc4BzaEy65LAJwZCgk9MX8u8HPB7bm_HvuB8DfqNUBTeoEjZqngsKQlrfC5NSgz6nuSxGkzVafcWFuROi2n4oXe7U0g3gkKpM23rEmprq1h_eX8qaHodm_QyqlGoCEEMCPzwLifWzal4vQ5Zlut8hwvaEDfjBL87CKrgQmdG6tvQa50sNFSs1zw/p.jpeg',
    },
    {
      id: 3,
      title: 'Beauty Pageant',
      category: 'portrait',
      image: 'https://www.dropbox.com/scl/fi/wc4176zwfpzspj4fzpkkg/IMG_9163.jpg?rlkey=3l3hk42ro84m1duu5erk7w7y0&st=g8q7a0vq&raw=1&dl=0',
    },
    {
      id: 4,
      title: 'Hack',
      category: 'lifestyle',
      image: 'https://previews.dropbox.com/p/thumb/ACp4nCd4VCwUZiBiKU9520WcOLvhvXQIBQ2CRadR40sGxPm5-kElDp_U-KX4dqlxOsLF2PxyAOOmXtohR4Eb-j6C8sAVe3SLf6-nNvf1DDufElvwaHrB2uJcgfke8DW0f5H-01BDsvcRn6QUdYOReyzXp3szX4XpCJoeItN51dABTsI6-JXq045OZcppD-mUBgsrakhq6m7MwbpKFeCVQThLOO04eUq6NUG5uSlHMIOfbn27S3mCBKCmPY5RmQiSzmj5jHlg5QppYbFOXiIUWa8O4lZXP_JKeoAIivUWZcaXAGBusMGsExxUjwOfZGHXgYI/p.jpeg',
    },
    {
      id: 5,
      title: 'International Women In Engineering Day',
      category: 'corporate',
      image: 'https://previews.dropbox.com/p/thumb/ACpYx7dPQn9nzah3ifcOnhoHWcPm_38kuM6h-sc51yWUGv4uskAhkLmzjOOmbiOwUubs4Nr3if9-uGjXbBydX-fOMqK3ydY27VfO7NEQfKt1y_DHoi43WwMnm5Q6svbe59bXMyh7M9qJeuTJo1s-ZUEcOTRX_hcOoww1V3welYsMg3vYTcubfQHaYy8ZT_GYxAUtWubFjm5IN2ZezdSh40USVEd0DbUxr2a4NsPplx9fkjl09ocs5cRJHptHuxWpH7lDYOG8UpgGoE1PjN2ISJXBHI02k8n_NgDQJTfOPn_CCimnwB1FRb8MwjNrKulyc2ty9bCPFdCkMYKPdBwGJ-OZ/p.jpeg',
    },
    {
      id: 6,
      title: 'International Women In Engineering Day',
      category: 'corparate',
      image: 'https://previews.dropbox.com/p/thumb/ACrmXr7n1bt_77yLoSrVOFoj7DEsQPuIsyBG2iPYeluuDf2hZHsbOAW9sfVbG1WB3W5N6ihalW4Mcal5jLptOcITjI_XHFGZ29pXVpos_KxBTn2M_JDaSddWE6ifF3GhI6wad6Af_WtaZpx92lWLxg1V-YOOE9ezQ1H2GeFIX9hI1nhYhSqnjXxAZh0ifjqKHKrMb5GrVEJphDT1nBTdREnlA16EYabsUkAZqlSE4_9Dk0Ihwz72wOtDuMLB32e6Oa3tgHMCJuXDo6NLz8JRZmXjPVFxBuRpSHn27I4aq7CdQxMhdY__F5-T7nMiuag_zBw/p.jpeg',
    },
    {
      id: 7,
      title: 'Beauty Pageant',
      category: 'portrait',
      image: 'https://www.dropbox.com/scl/fi/vx66i16b7eetaef02tlo9/IMG_9404.jpg?rlkey=0sp0qw7i08jjk08ld1m09mugc&st=0o9cld9e&raw=1&dl=0',
    },
    {
      id: 8,
      title: 'Beauty Pageant',
      category: 'portrait',
      image: 'https://www.dropbox.com/scl/fi/dj5oaathzizvm450hcql5/IMG_9568.jpg?rlkey=2iygbbyrwc4lx7impxufsop83&st=kirqmziz&raw=1&dl=0',
    },
    {
      id: 9,
      title: 'Personal Branding',
      category: 'lifestyle',
      image: 'https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 10,
      title: 'International Women In Engineering Day',
      category: 'corporate',
      image: 'https://www.dropbox.com/scl/fi/yunpi3ewedr0r8jfv2wep/IMG_4278.jpg?rlkey=s63yr5mhy5xxgoku3yp3j4znk&st=zcwy6gbl&raw=1&dl=0'
    },
    {
      id: 11,
      title: 'Graduation 2025',
      category: 'event',
      image: 'https://www.dropbox.com/scl/fi/8e5tn73y32smqbq5b9f2l/1G5A1009-2.jpg?rlkey=1nwtkkglmm0zdx2ulk6vy0vfw&st=5jrzupwe&raw=1&dl=0'
    },
    {
      id: 12,
      title: 'Graduation 2025',
      category: 'event',
      image: 'https://www.dropbox.com/scl/fi/zwawma8zz737ian8kx7ee/1G5A1031.jpg?rlkey=291fspmhnnvfqj7qzfo2q0vn7&st=2rjutvnd&raw=1&dl=0'
    },
    {
      id: 13,
      title: 'Graduation 2025',
      category: 'event',
      image: 'https://www.dropbox.com/scl/fi/p24tm9823gn6prskivhho/1G5A1072.jpg?rlkey=wqd2oqt70jbb9d1zqw1cho3w3&st=s27icjzd&raw=1&dl=0'
    },
    {
      id: 14,
      title: 'Graduation 2025',
      category: 'event',
      image: 'https://www.dropbox.com/scl/fi/yzguash8ls21wwl3qfu2x/1G5A1113.jpg?rlkey=ya72pyuxxbzxrpuewqw4r6yl5&st=wzsjv01a&raw=1&dl=0',
    },
    {
      id: 15,
      title: 'Graduation 2025',
      category: 'event',
      image: 'https://www.dropbox.com/scl/fi/27hhjzs57xw72afg982o4/1G5A1106.jpg?rlkey=69kx482se5oyu3x526tda7h2n&st=qq4vhnjg&raw=1&dl=0'
    },
    {
      id: 16,
      title: 'Graduation 2025',
      category: 'event',
      image: 'https://www.dropbox.com/scl/fi/msi5ztaxmxkx3chwh9j6e/1G5A1013.jpg?rlkey=p2tiwfcwg61w38ouob80tsdy4&st=noqzymtp&raw=1&dl=0',
    },
    {
      id: 17,
      title: 'The Creator Assembly',
      category: 'event',
      image: 'https://www.dropbox.com/scl/fi/c1vikes1d4d1h8b4foysh/1G5A0602.jpg?rlkey=bp88lccrmqqsnennds2ss52p4&st=1ewvju4h&raw=1&dl=0',
    },
    {
      id: 18,
      title: 'The Creator Assembly',
      category: 'event',
      image: 'https://www.dropbox.com/scl/fi/35h8wdrpd34d976yeprav/1G5A0690.jpg?rlkey=i715q54t8uzllswlawy7rcmpv&st=ihhjpnyv&raw=1&dl=0',
    },
    {
      id: 19,
      title: 'The Creator Assembly',
      category: 'event',
      image: 'https://www.dropbox.com/scl/fi/fac7moiokwyvtd3qj9oi1/1G5A0515.jpg?rlkey=lc96bhy6tl3c02q2z150ess8w&st=1m1uktnj&raw=1&dl=0',
    },
    {
      id: 20,
      title: 'The Creator Assembly',
      category: 'event',
      image: 'https://www.dropbox.com/scl/fi/04s0sfqvgfm0oftz89dio/1G5A0528.jpg?rlkey=oxmi4x67wdsmvy0r5gfszrd2o&st=i0k82xkx&raw=1&dl=0',
    },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const handlePrevious = () => {
    setSelectedImage(current => {
      if (current === null) return null;
      const currentIndex = filteredItems.findIndex(item => item.id === current);
      return currentIndex > 0 ? filteredItems[currentIndex - 1].id : current;
    });
  };

  const handleNext = () => {
    setSelectedImage(current => {
      if (current === null) return null;
      const currentIndex = filteredItems.findIndex(item => item.id === current);
      return currentIndex < filteredItems.length - 1 ? filteredItems[currentIndex + 1].id : current;
    });
  };

  const selectedItemIndex = selectedImage !== null
    ? filteredItems.findIndex(item => item.id === selectedImage)
    : -1;

  return (
    <>
      <Hero 
        title="Our Photography Portfolio"
        subtitle="Explore our work across various photography styles"
        backgroundImage="https://images.unsplash.com/photo-1574367157590-3454fe866961?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <section className="py-16 bg-black md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Gallery</h2>
            <p className="max-w-3xl mx-auto mb-8 text-gray-400">
              Browse through our collection of professional photography across various categories.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === 'all' 
                    ? 'bg-brand-blue text-white' 
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('wedding')}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === 'wedding' 
                    ? 'bg-brand-blue text-white' 
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                }`}
              >
                Corporate
              </button>
              <button
                onClick={() => setFilter('portrait')}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === 'portrait' 
                    ? 'bg-brand-blue text-white' 
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                }`}
              >
                Portrait
              </button>
              <button
                onClick={() => setFilter('event')}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === 'event' 
                    ? 'bg-brand-blue text-white' 
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                }`}
              >
                Event
              </button>
              <button
                onClick={() => setFilter('lifestyle')}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === 'lifestyle' 
                    ? 'bg-brand-blue text-white' 
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                }`}
              >
                Lifestyle
              </button>
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {filteredItems.map(item => (
                <GalleryItem
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  category={item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  onClick={() => setSelectedImage(item.id)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {selectedImage !== null && selectedItemIndex !== -1 && (
              <ImageModal
                image={filteredItems[selectedItemIndex].image}
                title={filteredItems[selectedItemIndex].title}
                category={filteredItems[selectedItemIndex].category.charAt(0).toUpperCase() + 
                         filteredItems[selectedItemIndex].category.slice(1)}
                onClose={() => setSelectedImage(null)}
                onPrevious={handlePrevious}
                onNext={handleNext}
                isFirst={selectedItemIndex === 0}
                isLast={selectedItemIndex === filteredItems.length - 1}
              />
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;