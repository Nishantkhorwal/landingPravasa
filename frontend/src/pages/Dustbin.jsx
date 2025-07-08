<section id="amenities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">World Class Amenities</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a virtual tour of our stunning architecture and premium amenities
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto">
           \
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
              {/* Image Container */}
              <div className="relative h-96 md:h-[500px] lg:h-[600px]">
                <img
                  src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                  alt={galleryImages[currentImageIndex].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Image Title */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{galleryImages[currentImageIndex].title}</h3>

                </div>

                {/* Image Counter */}
                <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {currentImageIndex + 1} / {galleryImages.length}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-green-600" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-green-600" />
              </button>
            </div>

            

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImageIndex === index ? "bg-green-600 scale-125" : "bg-gray-300 hover:bg-green-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
</section>



{/* Location & Site Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Location & Site Information</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our strategic location and detailed site layout
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Location Map */}
            <div className="relative group cursor-pointer" onClick={scrollToForm}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/locationMap3.jpg?height=400&width=600"
                  alt="Location Map"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">View Location Map</h3>
                    <p className="text-lg mb-4">Get detailed location information</p>
                    <div className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center">
                      Enquire Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </div>

                {/* Partial visibility overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Location Map</h3>
                <p className="text-gray-600">Prime location on Dwarka Expressway</p>
              </div>
            </div>

            {/* Site Map */}
            <div className="relative group cursor-pointer" onClick={scrollToForm}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/club1.jpeg?height=400&width=600"
                  alt="Site Map"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">View Site Plan</h3>
                    <p className="text-lg mb-4">Explore detailed site layout</p>
                    <div className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center">
                      Enquire Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </div>

                {/* Partial visibility overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Site Map</h3>
                <p className="text-gray-600">Detailed project layout and planning</p>
              </div>
            </div>
          </div>

          {/* Call to Action below maps */}

        </div>
      </section>

{/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Attractive Pricing & Payment Plans</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible payment options with attractive pre-launch benefits to make your dream home affordable
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Perfect Investment Opportunity</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">3 BHK </div>
                <div className="text-gray-600">Ultra Luxury Apartments</div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span>High appreciation potential in Dwarka Expressway corridor</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span>Ready-to-move luxury independent floors</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span>Premium location with excellent connectivity</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span>World-class amenities and infrastructure</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-green-200 relative">
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                PREMIUM
              </div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Independent Floors</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">₹2.4 CR*</div>
                <div className="text-gray-600">Starting Price</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Ultra Luxury Features</span>
                  <span className="font-semibold text-gray-900">✓ Included</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Free Club Membership</span>
                  <span className="font-semibold text-gray-900">✓ Included</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Private Parking</span>
                  <span className="font-semibold text-gray-900">✓ Included</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Customization</span>
                  <span className="font-semibold text-green-600">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      
      
{/* Amenities Section */}
      {/* <section id="amenities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">World-Class Amenities</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enjoy a lifestyle of luxury with our comprehensive range of premium amenities designed for your comfort
              and convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  {amenity.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{amenity.title}</h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
{/* CTA Section */}
      {/* <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make ROF Pravasa Your Home?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Don't miss this exclusive pre-launch opportunity. Limited units available with special pricing.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Call Now</h3>
              <p className="text-2xl font-bold">7827 678 754</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Calendar className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Site Visit</h3>
              <p>Schedule your visit today</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Download className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Brochure</h3>
              <p>Download detailed info</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </button>
            <button className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Site Visit
            </button>
          </div>
        </div>
      </section> */}      