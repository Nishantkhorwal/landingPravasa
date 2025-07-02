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
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function PravasaLeadPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
   const [loading, setLoading] = useState(false);
   const [message, setMessage] = useState('');
   const [loadingBrochure, setBrochureLoading] = useState(false);
   const [messageBrochure, setBrochureMessage] = useState('');
   const [showBrochureForm, setShowBrochureForm] = useState(false);
   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
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
  const handleBrochureSubmit = async (e) => {
    e.preventDefault();
    setBrochureLoading(true);
    setBrochureMessage('');

    try {
      const res = await fetch(`${API_BASE_URL}/api/enquiry/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
        body: JSON.stringify({
          name: formData.name,
          phoneNumber: formData.phone,
          email: formData.email,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setBrochureMessage('Form submitted! Downloading brochure...');
        // Simulate brochure download (replace with actual link)
        const brochureLink = '/Brochure2.pdf';
        const link = document.createElement('a');
        link.href = brochureLink;
        link.download = 'ROF-Pravasa-Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowBrochureForm(false);
        setBrochureLoading(false);
        setTimeout(() => setBrochureMessage(''), 3000);
        setFormData({ name: '', phone: '', email: '' });
      } else {
        setBrochureMessage(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setBrochureMessage('Network error. Please try again.');
    }

    
  };
  useEffect(() => {
    console.log('Is gtag loaded?', typeof window.gtag); // should be "function"
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/enquiry/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        credentials: "include",
        body: JSON.stringify({
          name: formData.name,
          phoneNumber: formData.phone,
          email: formData.email,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        sessionStorage.setItem('formSubmitted', 'true');
        setMessage('Thank you! We will contact you soon.');
        setFormData({ name: '', phone: '', email: '' });
        navigate("/thankyou");
      } else {
        setMessage(result.error || 'Something went wrong.');
      }
    } catch (error) {
      setMessage('Network error. Please try again later.');
    }

    setLoading(false);
  };

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

  const galleryImages = [
    {
      src: "/img3.jpg?height=400&width=600",
      title: "Luxury Exterior View",
    },
    {
      src: "/club9.jpeg?height=400&width=600",
      title: "Swimming Pool Area",
    },
    {
      src: "/club4.jpeg?height=400&width=600",
      title: "Club House",
    },
    {
      src: "/img4.jpg?height=400&width=600",
      title: "Landscaped Gardens",
    },
    {
      src: "/Gym.jpeg?height=400&width=600",
      title: "Fitness Center",
    },
    {
      src: "/bgImage11.jpg?height=400&width=600",
      title: "Modern Facade",
    },
    {
      src: "/img1.jpg?height=400&width=600",
      title: "Parking Area",
    },
    {
      src: "/Court.jpeg?height=400&width=600",
      title: "Badminton Court",
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1))
  }

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1))
  }

  // Auto-slide functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [currentImageIndex])

  const scrollToForm = () => {
    
    const formElement = document.getElementById("home")
    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
      // Add a subtle highlight effect
      formElement.classList.add("ring-4", "ring-green-400", "ring-opacity-50")
      setTimeout(() => {
        formElement.classList.remove("ring-4", "ring-green-400", "ring-opacity-50")
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-black/80 backdrop-blur-sm"
        }`}
      >
        {/* Top Bar */}
        

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="text-2xl font-bold">
                  <img className="w-28" src={`${scrolled ? "greenlogo.png" : "spinlogo.png"}`}></img>
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
              <button 
              onClick={() => setShowBrochureForm(true)}
              className="flex items-center px-6 py-2 bg-white text-green-600 border-2 border-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </button>
              <button className="flex items-center px-6 py-2 bg-[#2a502a] text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
              onClick={() => window.open("https://wa.me/919870247426", "_blank")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Whatsapp
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
                <button className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
                onClick={() => window.open("https://wa.me/919870247426", "_blank")}
                >
                <Phone className="w-4 h-4 mr-2" />
                Whatsapp
              </button>
                <button
                onClick={() => setShowBrochureForm(true)} 
                className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="relative h-screen bg-cover bg-center bg-no-repeat pt-[57rem] md:pt-0"
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
                
                <h1 className="text-xl lg:text-7xl font-bold mb-1 md:mb-6 leading-tight">
                  ROF <span className="text-green-700">PRAVASA</span>
                </h1>
                <p className="text-lg lg:text-2xl text-gray-200 mb-2 md:mb-4">Ultra Luxury Independent Floors</p>
                <p className="text-sm text-green-400 font-semibold mb-2 md:mb-6">Sector-88A, Gurugram • Dwarka Expressway</p>

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
                
                <button 
                 onClick={() => setShowBrochureForm(true)}
                 className="flex items-center justify-center px-8 py-4 bg-white/10 text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Right Content - Lead Form */}
            <div className="bg-black/30  rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Get Exclusive Details</h3>
                <p className="text-white">Fill the form to schedule your site visit</p>
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
                  className="w-full h-12 flex items-center justify-center text-lg bg-[#2a502a] text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                  {!loading && <ArrowRight className="w-5 h-5 ml-2" />}

                </button>
              </form>
              {message && (
                <p className="mt-4 text-center text-sm text-white bg-green-600 px-3 py-2 rounded">
                  {message}
                </p>
              )}

              {showBrochureForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-xl relative animate-slide-down">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowBrochureForm(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
              Fill the form to download the brochure
            </h3>

            <form onSubmit={handleBrochureSubmit} className="space-y-4 mt-4">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition duration-300"
              >
                {loadingBrochure ? 'Submitting...' : 'Download Brochure'}
              </button>
            </form>

            {messageBrochure && (
              <p className="mt-4 text-center text-sm text-green-600">{messageBrochure}</p>
            )}
          </div>
        </div>
      )}


              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-white">
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
        <div className="max-w-7xl mx-auto px-4 ">
          <div  className="flex lg:flex-row mb-16 flex-col gap-4 lg:gap-8 lg:justify-between justify-center ">
          <div className="w-full lg:w-[48%] ">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose ROF Pravasa?</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed text-justify">
              Pravasa is where sophistication of lifestyle and philosophy of wellness converge. Sitting in the prime location of Dwarka Expressway, our homes are for the people looking beyond just a house - they're looking for a way of life. Mind and body as well as their wish to indulge in Opulence. Here every square inch is designed for improving your physique and state of mind.Buy a home that you will enjoy at the present time and for the future and have what the best amenities location and provides future benefits.
            </p>
          </div>
          <div className="lg:mt-2 w-full lg:w-[48%]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/czHnlAZUaIA?si=i3Gh28LqkFP5KTKN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>

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


      {/* Simple Gallery Section */}
      
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
            {/* Main Gallery Container */}
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

            {/* Thumbnail Navigation */}
            {/* <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    currentImageIndex === index
                      ? "border-green-600 shadow-lg scale-105"
                      : "border-gray-300 hover:border-green-400"
                  }`}
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div> */}

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImageIndex === index ? "bg-green-600 scale-125" : "bg-gray-300 hover:bg-green-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{image.title}</h3>
                </div>
              </div>
            ))}
          </div> */}

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                ROF <span className="text-[#2a502a]">PRAVASA</span>
              </div>
              <p className="text-gray-400 mb-4">Ultra Luxury Independent Floors at Sector-88A, Gurugram</p>
              <a href="tel:9870247426" className="flex items-center text-green-400 hover:underline">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">9870 247 426</span>
              </a>
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
          onClick={() => window.open("https://wa.me/919870247426", "_blank")}
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>
    </div>
  )
}