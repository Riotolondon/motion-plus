// GalleryPage.tsx (only showing the parts to change)
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Folder } from 'lucide-react'
import Hero from '../components/Hero'
import GalleryItem from '../components/GalleryItem'
import ImageModal from '../components/ImageModal'
import { client as sanityClient } from '../sanity/client'
import { GALLERIES_QUERY } from '../lib/queries'
import { urlFor } from '../lib/image'

type ImageItem = { 
  _key: string
  title?: string
  alt?: string
  image: any
}
type Collection = {
  _id: string
  id: string
  title: string
  description?: string
  kind: 'photography' | 'videography'
  coverImage: any
  coverVideoUrl?: string
  images: ImageItem[]
  media: Array<{
    id: string
    title?: string
    type: 'image' | 'video'
    url: string
    alt?: string
    thumbnail?: string
  }>
}

const GalleryPage: React.FC = () => {
  const [collections, setCollections] = useState<Collection[]>([])
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => { document.title = 'Gallery | MOTION+' }, [])

  // NEW: fetch from Sanity
  useEffect(() => {
    ;(async () => {
              const raw = await sanityClient.fetch(GALLERIES_QUERY)
      const mapped: Collection[] = raw.map((doc: any) => ({
        _id: doc._id,
        id: doc._id, // Use _id as the id for selection
        title: doc.title,
        description: doc.description,
        kind: doc.kind,
        coverImage: doc.coverImage,
        coverVideoUrl: doc.coverVideoUrl || undefined,
        media: (doc.media || []).map((item: any) => ({
          id: item._key,
          title: item.title,
          type: item._type === 'file' ? 'video' : 'image',
          url: item.url,
          alt: item.alt || '',
          thumbnail: item.thumbnail || undefined,
        })),
      }))
      setCollections(mapped)
    })()
  }, [])

  // Split collections by kind
  const photoCollections = collections.filter(c => c.kind === 'photography')
  const videoCollections = collections.filter(c => c.kind === 'videography')

  const currentCollection = selectedCollection
    ? collections.find(c => c._id === selectedCollection)
    : null


    const currentMedia = currentCollection?.media ?? [] // ✅ CHANGED

  const selectedImageIndex =
    selectedImage ? currentMedia.findIndex(i => i.id === selectedImage) : -1

  const handlePrevious = () => {
    if (selectedImageIndex > 0) setSelectedImage(currentMedia[selectedImageIndex - 1].id)
  }
  const handleNext = () => {
    if (selectedImageIndex < currentMedia.length - 1) setSelectedImage(currentMedia[selectedImageIndex + 1].id)
  }

  const handleBackToCollections = () => {
    setSelectedCollection(null)
  }


  return (
    <>
      <Hero
        title={selectedCollection ? currentCollection?.title || 'Gallery' : 'Our Portfolio'}
        subtitle={selectedCollection ? '' : 'Explore the MOTION'}
        backgroundImage="https://ik.imagekit.io/secula/MOTION/iGovu_Final/Model_Pictures/1G5A2129.jpg"
      />

      <section className="py-16 bg-black md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          {!selectedCollection ? (
            // Collections split by kind
            <div className="space-y-16">
              {/* Photography Section */}
              {photoCollections.length > 0 && (
                <div>
                  <h2 className="mb-8 text-3xl font-bold text-center text-white md:text-4xl">Photography</h2>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {photoCollections.map((collection) => (
                      <motion.div
                        key={collection._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden transition-all duration-300 bg-gray-900 rounded-lg shadow-lg cursor-pointer group hover:transform hover:scale-105"
                        onClick={() => setSelectedCollection(collection._id)}
                      >
                        <div className="relative h-64">
                          {collection.coverImage ? (
                            <img
                              src={urlFor(collection.coverImage).url()}
                              alt={collection.title}
                              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                          ) : null}
                          <div className="absolute inset-0 transition-all duration-300 bg-black bg-opacity-40 group-hover:bg-opacity-60"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Folder className="w-16 h-16 text-white transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="mb-1 text-xl font-bold text-white">{collection.title}</h3>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Videography Section */}
              {videoCollections.length > 0 && (
                <div>
                  <h2 className="mb-8 text-3xl font-bold text-center text-white md:text-4xl">Videography</h2>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {videoCollections.map((collection) => (
                      <motion.div
                        key={collection._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden transition-all duration-300 bg-gray-900 rounded-lg shadow-lg cursor-pointer group hover:transform hover:scale-105"
                        onClick={() => setSelectedCollection(collection._id)}
                      >
                        <div className="relative h-64">
                          {collection.coverVideoUrl ? (
                            <video
                              src={collection.coverVideoUrl}
                              poster={collection.coverImage ? urlFor(collection.coverImage).url() : undefined}
                              playsInline
                              autoPlay
                              muted
                              loop
                              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                          ) : collection.coverImage ? (
                            <img
                              src={urlFor(collection.coverImage).url()}
                              alt={collection.title}
                              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                          ) : null}
                          <div className="absolute inset-0 transition-all duration-300 bg-black bg-opacity-40 group-hover:bg-opacity-60"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Folder className="w-16 h-16 text-white transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="mb-1 text-xl font-bold text-white">{collection.title}</h3>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Images in selected collection
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
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">{currentCollection?.title}</h2>
                  {currentCollection?.description && (
                    <p className="text-gray-400">{currentCollection.description}</p>
                  )}
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
                  {currentMedia.map((item) =>
  item.type === 'video' ? (
    <motion.div key={item.id} className="relative cursor-pointer group" onClick={() => setSelectedImage(item.id)}>
      <div className="relative overflow-hidden rounded-lg">
        <video
          src={item.url}
          poster={item.thumbnail || undefined}
          className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
          preload="metadata"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-40 group-hover:bg-opacity-60">
          <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 bg-white rounded-full bg-opacity-20 group-hover:bg-opacity-30">
            <svg className="w-8 h-8 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        {item.title && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-sm font-medium text-white">{item.title}</p>
          </div>
        )}
      </div>
    </motion.div>
  ) : (
    <GalleryItem
      key={item.id}
      image={item.url}
      title={item.title || item.alt || currentCollection?.title || ''}
      category={currentCollection?.title || ''}
      onClick={() => setSelectedImage(item.id)}
    />
  )
)}
                </motion.div>
              </AnimatePresence>
            </>
          )}

          {/* Image/Video Modal */}
          <AnimatePresence>
            {selectedImage && selectedImageIndex >= 0 && (
              currentMedia[selectedImageIndex].type === 'video' ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                  <video
                    src={currentMedia[selectedImageIndex].url}
                    controls
                    autoPlay
                    className="w-full max-w-4xl rounded"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute text-2xl text-white top-4 right-4"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <ImageModal
                  image={currentMedia[selectedImageIndex].url}
                  title={currentMedia[selectedImageIndex].title || currentMedia[selectedImageIndex].alt || ''}
                  category={currentCollection?.title || ''}
                  onClose={() => setSelectedImage(null)}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  isFirst={selectedImageIndex === 0}
                  isLast={selectedImageIndex === currentMedia.length - 1}
                />
              )
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}

export default GalleryPage