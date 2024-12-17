import React from 'react';

export default function CTA() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Grid Layout */}
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-chocolate">
              Handcrafted Perfection
            </h2>
            <p className="text-base sm:text-lg text-chocolate">
              Premium brownies, delivered fresh daily.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/16xmIPPGK-XTPbC-ZEJwXxDjOy3prQWV5/view?usp=drive_link"
                className="group inline-block bg-chocolate text-white px-8 py-3 
                         text-sm uppercase tracking-wider relative overflow-hidden
                         transition-all duration-300 ease-in-out
                         hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="relative z-10">Order Now</span>
                <div className="absolute inset-0 bg-chocolate-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
              </a>
              <a
                href="https://drive.google.com/file/d/16xmIPPGK-XTPbC-ZEJwXxDjOy3prQWV5/view?usp=drive_link"
                className="group inline-block bg-transparent text-chocolate px-8 py-3 
                         text-sm uppercase tracking-wider border border-chocolate relative
                         transition-all duration-300 ease-in-out
                         hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Catalog
                </span>
                <div className="absolute inset-0 bg-chocolate transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
              </a>
            </div>
          </div>

          {/* Right Content - Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Artisanal',
                description: 'Premium ingredients',
              },
              {
                title: 'Fresh',
                description: 'Same-day delivery',
              },
              {
                title: 'Custom',
                description: 'Special occasions',
              },
              {
                title: 'Gift Ready',
                description: 'Elegant packaging',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group space-y-2 p-6 bg-white relative
                         transition-all duration-300 ease-in-out
                         hover:shadow-lg hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-chocolate opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <h3 className="text-base sm:text-lg font-medium text-chocolate relative">
                  {feature.title}
                </h3>
                <p className="text-sm text-chocolate relative">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 md:mt-16 p-4 sm:p-6 bg-neutral-100 text-center
                      transition-all duration-300 ease-in-out
                      hover:bg-neutral-200">
          <p className="text-sm text-chocolate tracking-wide">
            Free delivery over £50
          </p>
        </div>
      </div>
    </section>
  );
}
