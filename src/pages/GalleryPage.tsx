import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Folder } from 'lucide-react';
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
  coverVideo?: string; // <-- added optional video cover for videography collections
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
      coverImage: 'https://www.dropbox.com/scl/fi/yunpi3ewedr0r8jfv2wep/IMG_4278.jpg?rlkey=s63yr5mhy5xxgoku3yp3j4znk&st=9ewj9yu3&raw=1&dl=0',
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
      coverImage: 'https://www.dropbox.com/scl/fi/va3pdv4qjoeezgtt4uyzm/1G5A1070.jpg?rlkey=ywqd8fx1omhh9e3u219rdb8dw&st=i1o16zzs&raw=1&dl=0',
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
      coverImage: 'https://www.dropbox.com/scl/fi/04s0sfqvgfm0oftz89dio/1G5A0528.jpg?rlkey=oxmi4x67wdsmvy0r5gfszrd2o&st=nhvb1h7v&raw=1&dl=0',
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
    },

    // --- Videography folders added below ---
    {
      id: 'videography-event',
      name: 'Event Videography',
      description: 'Cinematic coverage of weddings, parties, and live events',
      coverImage: 'https://images.pexels.com/photos/3765131/pexels-photo-3765131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      coverVideo: 'https://www.w3schools.com/html/mov_bbb.mp4', // <-- example autoplaying video
      images: [
        { id: 31, title: 'Wedding Highlight Reel', image: 'https://images.pexels.com/photos/3765131/pexels-photo-3765131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 32, title: 'Live Ceremony Coverage', image: 'https://images.pexels.com/photos/2908172/pexels-photo-2908172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 33, title: 'Reception Moments', image: 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 34, title: 'Event B-Roll', image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 35, title: 'Speeches & Toasts', image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 36, title: 'Dance Floor Cinematics', image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      ]
    },
    {
      id: 'videography-commercial',
      name: 'Commercial Videography',
      description: 'Product films, brand videos and ad-ready content',
      coverImage: 'https://images.pexels.com/photos/3182753/pexels-photo-3182753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      coverVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
      images: [
        { id: 37, title: 'Product Promo', image: 'https://images.pexels.com/photos/3182753/pexels-photo-3182753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 38, title: 'Brand Story', image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 39, title: 'Social Ad Cutdowns', image: 'https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 40, title: 'Behind the Product', image: 'https://images.pexels.com/photos/3183131/pexels-photo-3183131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 41, title: 'Studio Production', image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 42, title: 'Creative Direction', image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      ]
    },
    {
      id: 'videography-realestate',
      name: 'Real Estate Videography',
      description: 'Dynamic walkthroughs and aerial property showcases',
      coverImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      coverVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
      images: [
        { id: 43, title: 'Property Walkthrough', image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 44, title: 'Aerial Exterior', image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 45, title: 'Interior Detail Shots', image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 46, title: 'Twilight Property Film', image: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 47, title: 'Neighborhood Overview', image: 'https://images.pexels.com/photos/373965/pexels-photo-373965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 48, title: 'Drone Flythrough', image: 'https://images.pexels.com/photos/356853/pexels-photo-356853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      ]
    },
    {
      id: 'videography-storytelling',
      name: 'Documentary & Storytelling',
      description: 'Mini-documentaries, interviews and BTS documentaries',
      coverImage: 'https://images.pexels.com/photos/3182782/pexels-photo-3182782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      coverVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
      images: [
        { id: 49, title: 'Interview Piece', image: 'https://images.pexels.com/photos/3182782/pexels-photo-3182782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 50, title: 'Mini-Documentary', image: 'https://images.pexels.com/photos/3182749/pexels-photo-3182749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 51, title: 'BTS Documentary', image: 'https://images.pexels.com/photos/3182786/pexels-photo-3182786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 52, title: 'Story-Driven Edits', image: 'https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 53, title: 'Customer Testimonials', image: 'https://images.pexels.com/photos/3182748/pexels-photo-3182748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 54, title: 'Field Shoots', image: 'https://images.pexels.com/photos/3182767/pexels-photo-3182767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      ]
    },
    {
      id: 'videography-social',
      name: 'Social Media Videos',
      description: 'Short form, platform-optimized videos for reels and ads',
      coverImage: 'https://images.pexels.com/photos/3549463/pexels-photo-3549463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      coverVideo: 'https://ik.imagekit.io/secula/MOTION/iGovu_Final/Short_Videos/Instagram%20Reel%20vertical%209-16%20(1080x1920)_2.mp4?updatedAt=1756434383021',
      images: [
        { id: 55, title: 'Short-Form Reel', image: 'https://images.pexels.com/photos/3549463/pexels-photo-3549463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 56, title: 'Platform Cutdown', image: 'https://images.pexels.com/photos/3182831/pexels-photo-3182831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 57, title: 'Influencer Content', image: 'https://images.pexels.com/photos/3182790/pexels-photo-3182790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 58, title: 'Ad Creative', image: 'https://images.pexels.com/photos/3182810/pexels-photo-3182810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 59, title: 'Animated Text Cuts', image: 'https://images.pexels.com/photos/3184390/pexels-photo-3184390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 60, title: 'Content Day Recap', image: 'https://images.pexels.com/photos/3184400/pexels-photo-3184400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      ]
    },
  ];

  // split collections so we can render photography and videography separately
  const photoCollections = collections.filter(c => !c.id.startsWith('videography'));
  const videoCollections = collections.filter(c => c.id.startsWith('videography'));
  
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
        subtitle={selectedCollection ? "" : "Explore our work across various photography styles"}
        backgroundImage="https://ik.imagekit.io/secula/MOTION/iGovu_Final/Model_Pictures/1G5A2129.jpg?updatedAt=1756434262619"
      />
      
      <section className="py-16 bg-black md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          {!selectedCollection ? (
            // Collections View (split: photography / videography)
            <>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Photography Collections</h2>
                <p className="max-w-3xl mx-auto text-gray-400">
                  Browse through our specialized photography collections. Click on any collection to explore the full gallery.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {photoCollections.map((collection) => (
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
                        <h3 className="mb-1 text-xl font-bold text-white">{collection.name}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {videoCollections.length > 0 && (
                <div className="mt-12">
                  <hr className="my-8 border-gray-700" />
                  <div className="mb-6 text-center">
                    <h3 className="mb-2 text-2xl font-bold">Videography Collections</h3>
                    <p className="max-w-3xl mx-auto text-gray-400">
                      Explore our videography work — highlight reels, property tours, documentaries, and short-form content.
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {videoCollections.map((collection) => (
                      <motion.div
                        key={collection.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden transition-all duration-300 bg-gray-900 rounded-lg shadow-lg cursor-pointer group hover:transform hover:scale-105"
                        onClick={() => setSelectedCollection(collection.id)}
                      >
                        <div className="relative h-64">
                          {collection.coverVideo ? (
                            <video
                              src={collection.coverVideo}
                              poster={collection.coverImage}
                              playsInline
                              autoPlay
                              muted
                              loop
                              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                              aria-hidden="true"
                            />
                          ) : (
                            <img
                              src={collection.coverImage}
                              alt={collection.name}
                              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                          )}
                          <div className="absolute inset-0 transition-all duration-300 bg-black bg-opacity-40 group-hover:bg-opacity-60"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Folder className="w-16 h-16 text-white transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="mb-1 text-xl font-bold text-white">{collection.name}</h3>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
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