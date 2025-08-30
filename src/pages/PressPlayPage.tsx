import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const PressPlayPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Press Play | MOTION+';
  }, []);

  return (
    <>
      <Hero
        title="Press Play on MOTION+"
        subtitle=""
        backgroundImage="https://ik.imagekit.io/secula/MOTION/1G5A0261.jpg?updatedAt=1756512542331"
      />

      <section className="py-24 bg-black">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">Coming soon</h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-400">
            Press Play on MOTION+ is currently in development. Check back soon for episodes, behind-the-scenes content, and highlight reels.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 font-medium text-white rounded-md bg-brand-blue hover:bg-blue-600"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default PressPlayPage;