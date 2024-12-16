import React from 'react'

const InformationSection = () => {
    return (
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/images/Hero1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
  
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide mb-6">
              Our Story
            </h2>
            <p className="text-lg text-white/90 mb-8">
              A journey of passion, craftsmanship, and brownies.
            </p>
            <a 
              href="#story" 
              className="group inline-block relative overflow-hidden"
            >
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-3 
                            text-sm uppercase tracking-wider border border-white/20
                            transition-all duration-300 ease-in-out
                            group-hover:-translate-y-0.5 group-hover:shadow-lg">
                Read More
              </span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 
                            group-hover:scale-x-100 transition-transform duration-300 ease-out">
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default InformationSection;