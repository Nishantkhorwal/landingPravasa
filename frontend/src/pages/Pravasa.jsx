import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Phone,
  Download,
  MapPin,
  Calendar,
  CreditCard,
  Home,
  Shield,
  CheckCircle,
  ArrowRight,
  Building,
  Car,
  MessageCircle,
  Star,
  FishIcon as Swimming,
  Dumbbell,
  TreePine,
  Coffee,
  ShoppingBag,
  Gamepad2,
} from "lucide-react"

export default function PravasaLeadPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We will contact you soon.")
  }

  const amenities = [
    {
      icon: <Swimming className="w-8 h-8" />,
      title: "Swimming Pool",
      description: "Crystal clear infinity pool with panoramic views",
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Badminton Court",
      description: "Professional quality court for sports enthusiasts",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Luxury Parking",
      description: "Spacious covered parking with premium finishes",
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Fitness Center",
      description: "State-of-the-art gym with modern equipment",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Club House",
      description: "Exclusive club with premium amenities",
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Landscaped Gardens",
      description: "Beautiful green spaces and walking paths",
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Shopping Complex",
      description: "Retail outlets and convenience stores",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "24/7 Security",
      description: "Advanced security systems and surveillance",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-black/80 backdrop-blur-sm"
        }`}
      >
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="hidden md:flex items-center">
                <Shield className="w-4 h-4 mr-1" /> RERA No: 21 of 2025
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center font-semibold">
                <Phone className="w-4 h-4 mr-1" /> 7827 678 754
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="text-2xl font-bold">
                  <span className={`${scrolled ? "text-gray-900" : "text-white"}`}>ROF</span>
                  <span className="text-green-600 ml-2">PRAVASA</span>
                </div>
                <div className={`ml-3 text-xs ${scrolled ? "text-gray-600" : "text-gray-300"}`}>
                  <div>THE LUXURY</div>
                  <div>WELLNESS LIVING</div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="#home"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-400"
                }`}
              >
                Home
              </a>
              <a
                href="#about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-400"
                }`}
              >
                About
              </a>
              <a
                href="#amenities"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-400"
                }`}
              >
                Amenities
              </a>
              <a
                href="#pricing"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-400"
                }`}
              >
                Pricing
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="flex items-center px-6 py-2 bg-white text-green-600 border-2 border-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </button>
              <button className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-md transition-colors ${
                  scrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-400"
                }`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">
                About
              </a>
              <a href="#amenities" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">
                Amenities
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">
                Pricing
              </a>
              <div className="pt-4 space-y-2">
                <button className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </button>
                <button className="w-full flex items-center justify-center px-6 py-3 bg-white text-green-600 border-2 border-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('/img3.jpg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="mb-8">
                
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  ROF <span className="text-green-400">PRAVASA</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 mb-4">Ultra Luxury Independent Floors</p>
                <p className="text-lg text-green-400 font-semibold mb-6">Sector-88A, Gurugram • Dwarka Expressway</p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <Home className="w-5 h-5 mr-2 text-green-400" />
                    <span className="text-sm">Starting 2.4 Cr</span>
                  </div>
                  <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <CreditCard className="w-5 h-5 mr-2 text-green-400" />
                    <span className="text-sm">30:70 Payment Plan</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 7827 678 754
                </button>
                <button className="flex items-center justify-center px-8 py-4 bg-white/10 text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Right Content - Lead Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Exclusive Details</h3>
                <p className="text-gray-600">Fill the form to receive pricing & floor plans</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 px-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 px-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 px-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 flex items-center justify-center text-lg bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Price Details
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1 text-green-600" />
                    <span>RERA Approved</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    <span>Premium Location</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gray-50" id="about">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose ROF Pravasa?</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Pravasa is where sophistication of lifestyle and philosophy of wellness converge. Sitting in the prime location of Dwarka Expressway, our homes are for the people looking beyond just a house - they're looking for a way of life. Mind and body as well as their wish to indulge in Opulence. Here every square inch is designed for improving your physique and state of mind.Rof Pravasa is a entry point to a phenomenon of a lifestyle in one of the most luxurious zones of Dwarka Expressway.No doubt it is a great chance with world class services and product streams.Buy a home that you will enjoy at the present time and for the future and have what the best amenities location and provides future benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prime Location</h3>
              <p className="text-gray-600">
                Strategic location on Dwarka Expressway with excellent connectivity to Delhi and Gurgaon
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury Design</h3>
              <p className="text-gray-600">Contemporary architecture with premium finishes and spacious layouts</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Value</h3>
              <p className="text-gray-600">
                High appreciation potential with attractive payment plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-white">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">3BHK Apartments</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">₹72L now</div>
                <div className="text-gray-600">Rest on possession</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Booking Amount</span>
                  <span className="font-semibold text-gray-900">₹10 LAC</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Payment Plan</span>
                  <span className="font-semibold text-gray-900">30:70</span>
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

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Perfect Investment Opportunity</h3>
                <div className="space-y-4">
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
              <div className="text-center lg:text-right">
                <div className="text-5xl font-bold text-green-400 mb-2">₹72L Now</div>
                <div className="text-xl mb-6">Rest on possession for 3BHK</div>
                <button className="flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto lg:mx-0">
                  Get Price Details
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                ROF <span className="text-green-400">PRAVASA</span>
              </div>
              <p className="text-gray-400 mb-4">Ultra Luxury Independent Floors at Sector-88A, Gurugram</p>
              <div className="flex items-center text-green-400">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">7827 678 754</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
                  About Project
                </a>
                <a href="#amenities" className="block text-gray-400 hover:text-white transition-colors">
                  Amenities
                </a>
                <a href="#pricing" className="block text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>Sector-88A, Gurugram</p>
                <p>Dwarka Expressway</p>
                <p>Haryana, India</p>
                <div className="flex items-center mt-4">
                  <Shield className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-green-400 font-semibold">RERA Approved</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ROF Pravasa. All rights reserved. | RERA No: 21 of 2025</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center text-white animate-pulse transition-all duration-300 hover:scale-110"
          onClick={() => window.open("https://wa.me/917827678754", "_blank")}
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>
    </div>
  )
}