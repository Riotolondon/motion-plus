import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Folder, Image as ImageIcon } from 'lucide-react';
import Hero from '../components/Hero';
import GalleryItem from '../components/GalleryItem';
import ImageModal from '../components/ImageModal';

interface GalleryImage {
  id: number;
  title: string;
  image: string;
}

interface Collection {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  images: GalleryImage[];
}

const GalleryPage: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  useEffect(() => {
    document.title = 'Gallery | MOTION+ Photography';
  }, []);

  const collections: Collection[] = [
    {
      id: 'wedding',
      name: 'Wedding Photography',
      description: 'Capturing the magic of your special day',
      coverImage: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      images: [
        {
          id: 1,
          title: 'Elegant Wedding Ceremony',
          image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 2,
          title: 'Beach Wedding',
          image: 'https://images.pexels.com/photos/1244690/pexels-photo-1244690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 3,
          title: 'Wedding Reception',
          image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 4,
          title: 'Bridal Portrait',
          image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 5,
          title: 'Wedding Rings',
          image: 'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 6,
          title: 'First Dance',
          image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }
      ]
    },
    {
      id: 'corporate',
      name: 'Corporate Photography',
      description: 'Professional business and corporate events',
      coverImage: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      images: [
        {
          id: 7,
          title: 'Business Conference',
          image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 8,
          title: 'Corporate Headshot',
          image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 9,
          title: 'Corporate Event',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 10,
          title: 'Team Meeting',
          image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 11,
          title: 'Executive Portrait',
          image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 12,
          title: 'Office Environment',
          image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }
      ]
    },
    {
      id: 'portrait',
      name: 'Portrait Photography',
      description: 'Beautiful portraits for individuals and families',
      coverImage: 'https://images.pexels.com/photos/1974521/pexels-photo-1974521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      images: [
        {
          id: 13,
          title: 'Family Portrait',
          image: 'https://images.pexels.com/photos/1974521/pexels-photo-1974521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 14,
          title: 'Maternity Session',
          image: 'https://images.pexels.com/photos/1682497/pexels-photo-1682497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 15,
          title: 'Newborn Photography',
          image: 'https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 16,
          title: 'Children Portrait',
          image: 'https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 17,
          title: 'Senior Portrait',
          image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 18,
          title: 'Professional Headshot',
          image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }
      ]
    },
    {
      id: 'event',
      name: 'Event Photography',
      description: 'Capturing special celebrations and gatherings',
      coverImage: 'https://images.pexels.com/photos/2399097/pexels-photo-2399097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      images: [
        {
          id: 19,
          title: 'Birthday Celebration',
          image: 'https://images.pexels.com/photos/2399097/pexels-photo-2399097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 20,
          title: 'Engagement Session',
          image: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 21,
          title: 'Anniversary Party',
          image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 22,
          title: 'Graduation Ceremony',
          image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 23,
          title: 'Holiday Gathering',
          image: 'https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 24,
          title: 'Special Celebration',
          image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }
      ]
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle Photography',
      description: 'Authentic moments and personal branding',
      coverImage: 'https://images.pexels.com/photos/1024970/pexels-photo-1024970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      images: [
        {
          id: 25,
          title: 'Couple Photoshoot',
          image: 'https://images.pexels.com/photos/1024970/pexels-photo-1024970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 26,
          title: 'Personal Branding',
          image: 'https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 27,
          title: 'Outdoor Lifestyle',
          image: 'https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 28,
          title: 'Urban Portrait',
          image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 29,
          title: 'Creative Session',
          image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 30,
          title: 'Fashion Portrait',
          image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }
      ]
    }
  ];

  const currentCollection = selectedCollection 
    ? collections.find(c => c.id === selectedCollection)
    : null;

  const currentImages = currentCollection ? currentCollection.images : [];

  const handlePrevious = () => {
    setSelectedImage(current => {
      if (current === null) return null;
      const currentIndex = currentImages.findIndex(item => item.id === current);
      return currentIndex > 0 ? currentImages[currentIndex - 1].id : current;
    });
  };

  const handleNext = () => {
    setSelectedImage(current => {
      if (current === null) return null;
      const currentIndex = currentImages.findIndex(item => item.id === current);
      return currentIndex < currentImages.length - 1 ? currentImages[currentIndex + 1].id : current;
    });
  };

  const selectedImageIndex = selectedImage !== null
    ? currentImages.findIndex(item => item.id === selectedImage)
    : -1;

  const handleBackToCollections = () => {
    setSelectedCollection(null);
    setSelectedImage(null);
  };

  return (
    <>
      <Hero 
        title={selectedCollection ? currentCollection?.name || "Gallery" : "Our Photography Portfolio"}
        subtitle={selectedCollection ? currentCollection?.description : "Explore our work across various photography styles"}
        backgroundImage="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 bg-black md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          {!selectedCollection ? (
            // Collections View
            <>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Photography Collections</h2>
                <p className="max-w-3xl mx-auto text-gray-400">
                  Browse through our specialized photography collections. Click on any collection to explore the full gallery.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {collections.map((collection) => (
                  <motion.div
                    key={collection.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden transition-all duration-300 bg-gray-900 rounded-lg shadow-lg cursor-pointer group hover:transform hover:scale-105"
                    onClick={() => setSelectedCollection(collection.id)}
                  >
                    <div className="relative h-64">
                      <img
                        src={collection.coverImage}
                        alt={collection.name}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 transition-all duration-300 bg-black bg-opacity-40 group-hover:bg-opacity-60"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Folder className="w-16 h-16 text-white transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="flex items-center gap-2 mb-2">
                          <ImageIcon className="w-5 h-5 text-brand-blue" />
                          <span className="text-sm text-brand-blue">{collection.images.length} Photos</span>
                        </div>
                        <h3 className="mb-1 text-xl font-bold text-white">{collection.name}</h3>
                        <p className="text-sm text-gray-300">{collection.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            // Collection Images View
            <>
              <div className="mb-8">
                <button
                  onClick={handleBackToCollections}
                  className="flex items-center gap-2 mb-4 transition-colors text-brand-blue hover:text-blue-400"
                >
                  <ArrowLeft size={20} />
                  Back to Collections
                </button>
                <div className="text-center">
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">{currentCollection?.name}</h2>
                  <p className="max-w-3xl mx-auto mb-8 text-gray-400">
                    {currentCollection?.description}
                  </p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedCollection}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                >
                  {currentImages.map(item => (
                    <GalleryItem
                      key={item.id}
                      image={item.image}
                      title={item.title}
                      category={currentCollection?.name || ""}
                      onClick={() => setSelectedImage(item.id)}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </>
          )}

          <AnimatePresence>
            {selectedImage !== null && selectedImageIndex !== -1 && (
              <ImageModal
                image={currentImages[selectedImageIndex].image}
                title={currentImages[selectedImageIndex].title}
                category={currentCollection?.name || ""}
                onClose={() => setSelectedImage(null)}
                onPrevious={handlePrevious}
                onNext={handleNext}
                isFirst={selectedImageIndex === 0}
                isLast={selectedImageIndex === currentImages.length - 1}
              />
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;