import React from 'react'

export default function CTA() {
  return (
    <section className="relative py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-neutral-900">
              Experience Artisanal Excellence
            </h2>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              Discover our carefully curated collection of handcrafted brownies, 
              made with premium ingredients and delivered fresh to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#order" 
                className="inline-block bg-neutral-900 text-white px-8 py-3 
                         text-sm uppercase tracking-wider
                         hover:bg-neutral-800 transition-all duration-300 ease-in-out"
              >
                Order Now
              </a>
              <a 
                href="#catalog" 
                className="inline-block bg-transparent text-neutral-900 px-8 py-3 
                         text-sm uppercase tracking-wider border border-neutral-900
                         hover:bg-neutral-100 transition-all duration-300 ease-in-out"
              >
                View Catalog
              </a>
            </div>
          </div>

          {/* Right Content - Feature Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "Artisanal Quality",
                description: "Premium ingredients carefully selected for excellence"
              },
              {
                title: "Fresh Delivery",
                description: "Same-day delivery to ensure maximum freshness"
              },
              {
                title: "Custom Orders",
                description: "Personalized options for special occasions"
              },
              {
                title: "Gift Packaging",
                description: "Elegant presentation for memorable moments"
              }
            ].map((feature, index) => (
              <div key={index} className="space-y-2 p-6 bg-white shadow-sm">
                <h3 className="text-lg font-medium text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Bottom Banner */}
        <div className="mt-16 p-8 bg-neutral-100 text-center">
          <p className="text-sm text-neutral-600 tracking-wide">
            Free delivery on orders above $50 • Same-day delivery available
          </p>
        </div>
      </div>
    </section>
  )
}
