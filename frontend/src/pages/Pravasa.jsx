import { useState, useEffect } from "react"
import {
  Menu,
  X,
  ArrowLeft ,
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
import { Dialog } from '@headlessui/react';

import { Building2,  Award, ZoomIn ,  Zap } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function PravasaLeadPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showEnquireForm, setShowEnquireForm] = useState(false)
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
        setTimeout(() => {
        setShowEnquireForm(false)
        setMessage("")
        setFormData({ name: "", phone: "", email: "" })
        navigate("/thankyou");
      }, 2000)
        
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
  const floorData = [
  { type: "Type - A1", floor: "1st, 2nd & 3rd", size: "1848.19 sqft." },
  { type: "Type - A1", floor: "4th", size: "2547.19 sqft." },
  { type: "Type - D", floor: "1st, 2nd & 3rd", size: "1967.66 sqft." },
  { type: "Type - D", floor: "4th", size: "2694.66 sqft." },
  { type: "Type - L", floor: "1st, 2nd & 3rd", size: "1847.53 sqft." },
  { type: "Type - L", floor: "4th", size: "2523.97 sqft." },
];

const Carouselimages = [
  "/A1.webp",
  "TypeD.jpg",
  "L.webp"
];


  const [current, setCurrent] = useState(0);

  const prevPravasaImage = () => {
    setCurrent((prev) => (prev === 0 ? Carouselimages.length - 1 : prev - 1));
  };

  const nextPravasaImage = () => {
    setCurrent((prev) => (prev === Carouselimages.length - 1 ? 0 : prev + 1));
  };
  

  const projectHighlights = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Premium Builder Floors",
      description: "Low-rise residential with Basement + Stilt + 4 floors",
      features: ["3 BHK + 3T Configuration", "Independent floors", "816 units across 6 acres"],
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Strategic Location",
      description: "Sector 88A, Gurugram on Dwarka Expressway",
      features: ["20 mins to IGI Airport", "Close to Medanta", "Near IMT Manesar"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Trusted Developer",
      description: "ROF Group - Excellence since 2007",
      features: ["HARERA Registered", "Timely delivery record", "Quality construction"],
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Green Paradise",
      description: "70% open green spaces for healthy living",
      features: ["3.5+ acres landscaped", "Multiple gardens", "Water bodies"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Security",
      description: "3-tier security with modern amenities",
      features: ["Gated community", "CCTV surveillance", "Earthquake resistant"],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Features",
      description: "Modern technology integration",
      features: ["Home automation", "Video door phone", "Premium fittings"],
    },
  ]

  const amenityCategories = [
    {
      title: "Wellness & Recreation",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      amenities: [
        "Yoga & Meditation Garden",
        "Reflexology Path",
        "Harmony Garden",
        "Flower Garden",
        "Water Bodies",
        "Central Lawn",
        "Putting Green",
        "Green Mounds",
      ],
    },
    {
      title: "Sports & Fitness",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      amenities: [
        "Swimming Pool",
        "Outdoor Gym",
        "Badminton Court",
        "Tennis Court",
        "Basketball Court",
        "Jogging Track",
        "Fitness Center",
        "Sports Complex",
      ],
    },
    {
      title: "Community & Leisure",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      amenities: [
        "Club Pravasa",
        "Amphitheatre",
        "Outdoor Dining Area",
        "Trellis Seating",
        "Sculptures & Art",
        "Stepped Seating",
        "Event Spaces",
        "Social Lounges",
      ],
    },
    {
      title: "Family Spaces",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      amenities: [
        "Kids Pool",
        "Indoor Play Area",
        "Senior Citizen Garden",
        "Family Picnic Areas",
        "Children's Park",
        "Safe Play Zones",
        "Reading Corners",
        "Activity Centers",
      ],
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

  const images = [
  { src: "/img1.jpg", title: "Reflexology Park" },
  { src: "/img2.jpg", title: "Badminton Court" },
  { src: "Club.webp", title: "Clubhouse Exterior" },
  { src: "ClubReception.webp", title: "Clubhouse Reception Area" },
  { src: "/img3.jpg", title: "Luxury Sculptures" },
  { src: "/img4.jpg", title: "Amphitheatre" },
  { src: "/img5.jpg", title: "Basketball Court" },
  { src: "/img6.jpg", title: "Luxury Apartment" },
  { src: "HarmonyGarden.webp", title: "Harmony Garden" },
  { src: "SwimmingPool.webp", title: "Swimming Pool" },
  { src: "Balcony.webp", title: "Scenic Balcony" },
  { src: "CricketPitch.webp", title: "Cricket Pitch" },
  { src: "LuxuryFloor.webp", title: "Luxury Floor Plan" },
  { src: "OutdoorDining.webp", title: "Outdoor Dining" },
  { src: "OutdoorGym.webp", title: "Outdoor Gym Area" },
];

const pravasaimages = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  // Add more image paths
];


  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index) => {
    setCurrentIndex(index)
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeModal()
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
  }


 

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
      <div className="fixed -rotate-90 bottom-60 right-[-63px] z-50">
        <button
          onClick={() => setShowEnquireForm(true)}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-t-xl shadow-2xl flex items-center transition-all duration-300 hover:scale-105 "
        >
          <span className="mr-2">Enquire Now</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-black/80 backdrop-blur-sm"
          }`}
      >
        {/* Top Bar */}


        <div className="max-w-8xl mx-auto px-4 md:px-10">
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
                className={`px-3 py-2 text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-400"
                  }`}
              >
                Home
              </a>
              <a
                href="#about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-400"
                  }`}
              >
                About
              </a>
              <a
                href="#amenities"
                className={`px-3 py-2 text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-400"
                  }`}
              >
                Amenities
              </a>
              <a
                href="#pricing"
                className={`px-3 py-2 text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-400"
                  }`}
              >
                Pricing
              </a>
              <a
                href="#floorPlan"
                className={`px-3 py-2 text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-400"
                  }`}
              >
                Floor Plan
              </a>
              <a
                href="#gallery"
                className={`px-3 py-2 text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-400"
                  }`}
              >
                Gallery
              </a>
              <a
                href="tel:9870247426"
                className={`px-3 py-2 text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-400"
                  }`}
              >
                9870247426
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
                className={`p-2 rounded-md transition-colors ${scrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-400"
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
              <a href="#floorPlan" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">
                Floor Plan
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">
                Pricing
              </a>
              <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">
                Gallery
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
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('/header.jpg')",
        }}
      >
        {/* Minimal overlay for better text readability at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Project Title and Location */}
            <div className="flex flex-row items-center gap-8">
            <div className="mb-6 shadow-xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 americana">ROF Pravasa</h1>
              <p className="text-lg md:text-xl text-gray-200 lora">Sector 88A, Dwarka Expressway, Gurugram</p>
            </div>
            <div>
            <div className="text-white px-4 py-2 bg-yellow-600 shadow-xl">
                  <div className="text-white text-xs md:text-sm font-semibold  uppercase tracking-wide carlito-regular">Special Offer</div>
                  <div className="text-xs text-justify md:text-lg font-bold carlito-regular">Free Parking & Club Membership</div>
            </div>
            </div>
            </div>

            {/* Property Details and CTA */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              {/* Property Information Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-8 flex-1">
                <div className="text-white ps-4 py-2 bg-black/50 shadow-xl">
                  <div className="text-yellow-400 text-sm font-semibold mb-1 uppercase tracking-wide carlito-regular">Price</div>
                  <div className="text-xl md:text-2xl font-bold carlito-regular">₹2.4 Cr.</div>
                </div>
                <div className="text-white ps-4 py-2 bg-black/50 shadow-xl">
                  <div className="text-yellow-400 text-sm font-semibold mb-1 uppercase tracking-wide carlito-regular">Floor</div>
                  <div className="text-xl md:text-2xl font-bold carlito-regular">3BHK + 3T</div>
                </div>
                <div className="text-white ps-4 py-2 bg-black/50 shadow-xl">
                  <div className="text-yellow-400 text-sm font-semibold mb-1 uppercase tracking-wide carlito-regular">Sizes</div>
                  <div className="text-lg md:text-xl font-bold carlito-regular">1850-1970 sq.ft.</div>
                </div>
                
                <div className="text-white col-span-2 md:col-span-1 ps-4 py-2 bg-black/50 shadow-xl">
                  <div className="text-yellow-400 text-sm font-semibold mb-1 uppercase tracking-wide carlito-regular">RERA</div>
                  <div className="text-sm md:text-base font-bold carlito-regular">RERA-GRG-21 of 2025</div>
                </div>
              </div>

              {/* Enquire Now Button */}
              <div className="lg:ml-8">
                <button
                  onClick={() => setShowEnquireForm(true)}
                  className="w-full lg:w-auto px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Download Brochure Modal */}
      {showBrochureForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex animate-slide-down items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-xl relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowBrochureForm(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">Download Brochure</h3>
            <p className="text-center text-gray-600 mb-6">Get detailed information about ROF Pravasa</p>
            <form onSubmit={handleBrochureSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loadingBrochure}
                className="w-full h-12 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition duration-300 disabled:opacity-50"
              >
                {loadingBrochure ? "Downloading..." : "Download Brochure"}
              </button>
            </form>
            {messageBrochure && <p className="mt-4 text-center text-sm text-green-600">{messageBrochure}</p>}
          </div>
        </div>
      )}

      {/* Enquire Now Modal */}
      {showEnquireForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 animate-slide-down flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-xl relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowEnquireForm(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Exclusive Details</h3>
              <p className="text-gray-600">Schedule your site visit today</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 flex items-center justify-center bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
                {!loading && <ArrowRight className="w-5 h-5 ml-2" />}
              </button>
            </form>
            {message && <p className="mt-4 text-center text-sm text-white bg-green-600 px-3 py-2 rounded">{message}</p>}
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
      )}

      {/* About Section */}
      <section className="py-20 bg-[#2a2a2a]" id="about">
        <div className="px-4 md:px-10 lg:px-20">
          <div className="flex lg:flex-row mb-16 flex-col gap-4 lg:gap-8 items-center lg:justify-between justify-center">
            <div className="w-full lg:w-[48%]">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose <span className="text-yellow-400">ROF Pravasa</span>?
              </h2>
              <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-justify mb-4">
                ROF Pravasa, developed by ROF Infratech & Housing Pvt. Ltd. is an ultra‑luxury, low-rise residential
                enclave of 3 BHK+3T builder floors in Sector 88A, Gurugram, along the Dwarka Expressway. Spanning about
                12 acres with over 3.5 acres dedicated to greenery, the layout includes a Basement + Stilt + 4 floors,
                with fourth-floor units featuring exclusive roof rights. With 816 units ranging from ~1,850 to 1,970 sq
                ft and prices beginning around ₹2.4 Cr, Pravasa incorporates energy-efficient walls, a three-tier
                security system, and earthquake-resistant RCC structure. Positioned just minutes from NH‑8, IGI Airport
                (~20 min), IMT Manesar, Medanta, and more, this project boasts excellent connectivity and is supported
                by flexible payment plans and RERA approvals (e.g., RERA-GRG-21 of 2025).
              </p>
              <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-justify">
                Designed for urban families, professionals, and savvy investors, ROF Pravasa delivers a lifestyle rooted
                in sophistication and wellness. With 70% green spaces, high-end amenities like a clubhouse, jogging
                tracks, indoor/outdoor play zones, lifts, CCTV, dedicated parking, and modular kitchens, the development
                emphasizes both aesthetic elegance and functional luxury. Supported by ROF's enduring reputation for
                transparency and timely execution, Pravasa offers both a serene retreat and a high-potential asset, with
                expected 100% appreciation over 2–2½ years as the infrastructure along the Dwarka Expressway advances
              </p>
            </div>
            <div className="lg:mt-2 w-full lg:w-[48%]">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/czHnlAZUaIA?si=i3Gh28LqkFP5KTKN"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
      <div className=" py-20">
        <div className="px-4 md:px-10 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 americana">
              Project <span className="text-yellow-600">Highlights</span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Discover what makes ROF Pravasa the perfect choice for your dream home
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectHighlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-[#2a2a2a] backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:bg-[#333333] transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl" />
                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-4 rounded-xl mb-6 w-fit">
                    {highlight.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{highlight.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{highlight.description}</p>
                  <ul className="space-y-2">
                    {highlight.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-200">
                        <CheckCircle className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="pricing" className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white americana">
            Investment <span className="text-yellow-400">Overview</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Price List 1 - Type D */}
            <div className="bg-[#2a2a2a] backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-6">
                <h3 className="text-2xl font-bold text-center">Type D</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-[#333333] text-white">
                    <tr>
                      <th className="text-left px-6 py-4 font-semibold">Floor</th>
                      <th className="text-left px-6 py-4 font-semibold">Area (sq.ft.)</th>
                      <th className="text-left px-6 py-4 font-semibold">TSV (In Rs.)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    <tr className="border-t border-gray-600 hover:bg-[#333333]">
                      <td className="px-6 py-4 font-medium">1st Floor</td>
                      <td className="px-6 py-4 text-yellow-400">1967</td>
                      <td className="px-6 py-4 text-green-400 font-bold">₹2,55,00,000</td>
                    </tr>
                    <tr className="border-t border-gray-600 hover:bg-[#333333]">
                      <td className="px-6 py-4 font-medium">2nd Floor</td>
                      <td className="px-6 py-4 text-yellow-400">1967</td>
                      <td className="px-6 py-4 text-green-400 font-bold">₹2,50,00,000</td>
                    </tr>
                    <tr className="border-t border-gray-600 hover:bg-[#333333]">
                      <td className="px-6 py-4 font-medium">3rd Floor</td>
                      <td className="px-6 py-4 text-yellow-400">1967</td>
                      <td className="px-6 py-4 text-green-400 font-bold">₹2,50,00,000</td>
                    </tr>
                    <tr className="border-t border-gray-600 hover:bg-[#333333] bg-gradient-to-r from-yellow-500/10 to-yellow-400/10">
                      <td className="px-6 py-4 font-medium">4th Floor</td>
                      <td className="px-6 py-4 text-yellow-400">2694</td>
                      <td className="px-6 py-4 text-yellow-400 font-bold">₹2,60,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Price List 2 - Type A1 & L */}
            <div className="bg-[#2a2a2a] backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-6">
                <h3 className="text-2xl font-bold text-center">Type A1 & L</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-[#333333] text-white">
                    <tr>
                      <th className="text-left px-6 py-4 font-semibold">Floor</th>
                      <th className="text-left px-6 py-4 font-semibold">Area (sq.ft.)</th>
                      <th className="text-left px-6 py-4 font-semibold">TSV (In Rs.)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    <tr className="border-t border-gray-600 hover:bg-[#333333]">
                      <td className="px-6 py-4 font-medium">1st Floor</td>
                      <td className="px-6 py-4 text-yellow-400">1848</td>
                      <td className="px-6 py-4 text-green-400 font-bold">₹2,45,00,000</td>
                    </tr>
                    <tr className="border-t border-gray-600 hover:bg-[#333333]">
                      <td className="px-6 py-4 font-medium">2nd Floor</td>
                      <td className="px-6 py-4 text-yellow-400">1848</td>
                      <td className="px-6 py-4 text-green-400 font-bold">₹2,40,00,000</td>
                    </tr>
                    <tr className="border-t border-gray-600 hover:bg-[#333333]">
                      <td className="px-6 py-4 font-medium">3rd Floor</td>
                      <td className="px-6 py-4 text-yellow-400">1848</td>
                      <td className="px-6 py-4 text-green-400 font-bold">₹2,40,00,000</td>
                    </tr>
                    <tr className="border-t border-gray-600 hover:bg-[#333333] bg-gradient-to-r from-yellow-500/10 to-yellow-400/10">
                      <td className="px-6 py-4 font-medium">4th Floor</td>
                      <td className="px-6 py-4 text-yellow-400">2547</td>
                      <td className="px-6 py-4 text-yellow-400 font-bold">₹2,50,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#1a1a1a] text-white py-20 px-4 md:px-8">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center americana">
      <span className="text-yellow-400">Possession Linked</span> Payment Plan (30:70)
    </h2>

    <div className="bg-[#1a1a1a] rounded-2xl shadow-xl p-8 border border-gray-700">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center bg-[#2a2a2a] rounded-lg p-6 shadow-md border border-gray-600">
          <div className="text-2xl font-bold text-yellow-400 mb-2">10% of TSV</div>
          <p className="text-gray-300 font-medium">At the Time of Booking</p>
        </div>
        <div className="text-center bg-[#2a2a2a] rounded-lg p-6 shadow-md border border-gray-600">
          <div className="text-2xl font-bold text-yellow-400 mb-2">Completion 30% of TSV</div>
          <p className="text-gray-300 font-medium">Within 45 Days of Booking</p>
        </div>
        <div className="text-center bg-[#2a2a2a] rounded-lg p-6 shadow-md border border-gray-600">
          <div className="text-2xl font-bold text-yellow-400 mb-2">70% of TSV + Charges</div>
          <p className="text-gray-300 font-medium">On Offer of Possession</p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-yellow-400">Terms & Conditions:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>GST & PLC as applicable</li>
          <li>Meter charges applicable as per actual cost</li>
          <li>Govt. Charges, Power Backup, IFMS & Taxes as applicable</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Amenities Section */}
      <div id="amenities" className=" py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 americana">
              World-Class <span className="text-yellow-600">Amenities</span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Experience luxury living with our thoughtfully designed amenities for every lifestyle
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {amenityCategories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-[#1a1a1a] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden "
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 text-black relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-black/80">Premium facilities for your comfort</p>
                  </div>
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-black/10 rounded-full" />
                  <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-black/5 rounded-full" />
                </div>
                {/* Amenities Grid */}
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {category.amenities.map((amenity, idx) => (
                      <div
                        key={idx}
                        className="bg-[#2a2a2a] rounded-xl p-4 hover:scale-105 transition-transform duration-200 border border-gray-600"
                      >
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-200">{amenity}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      




      


      
      

      

      


      <section className="bg-[#1a1a1a] text-white py-16 px-4 md:px-10 lg:px-20">
      <div className=" flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Table */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 americana">
            <span className="text-yellow-400">Seamless</span> Connectivity
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-yellow-500 text-lg font-medium pb-3">Prime Location</th>
                  <th className="text-yellow-500 text-lg font-medium pb-3">Distance</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  { place: "Dwarka Expressway", time: "2 Min" },
                  { place: "Manesar Toll Plaza, NH-8, IMT Manesar", time: "7 Min" },
                  { place: "Proposed Diplomatic Enclaves & Embassies", time: "10 Min" },
                  { place: "New Delhi", time: "20 Min" },
                  { place: "Medanta, The Medicity & Rajiv Chowk", time: "20 Min" },
                  { place: "Indira Gandhi International Airport", time: "25 Min" },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-3 pr-4">{item.place}</td>
                    <td className="py-3">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Map Image with Overlay */}
        <div className="w-full lg:w-1/2">
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg" onClick={scrollToForm}>
            <img
              src="/locationMap3.jpg"
              alt="Location Map"
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="text-center text-white">
                <Eye className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">View Location Map</h3>
                <p className="text-lg mb-4">Get detailed connectivity overview</p>
                <div className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center">
                  Enquire Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>

            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="floorPlan"  className="bg-[#1a1a1a] text-white py-16 px-4 md:lg-10 lg:px-20">
      <div className=" flex flex-col lg:flex-row-reverse  gap-8 items-start">
        {/* Left - Table */}
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-6 americana">
            <span className="text-yellow-400">Floor</span> & Size
          </h2>

          <div className="overflow-x-auto border border-yellow-500 rounded-lg">
            <table className="min-w-full table-auto text-left">
              <thead>
                <tr className="bg-[#2a2a2a] text-yellow-400">
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Floor</th>
                  <th className="py-3 px-4">Sizes</th>
                </tr>
              </thead>
              <tbody>
                {floorData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-700 hover:bg-[#2a2a2a]"
                  >
                    <td className="py-3 px-4">{row.type}</td>
                    <td className="py-3 px-4">{row.floor}</td>
                    <td className="py-3 px-4">{row.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right - Carousel */}
        <div className="relative w-full">
          <div className="aspect-[16/10] bg-black rounded-xl overflow-hidden shadow-lg">
            <img
              src={Carouselimages[current]}
              alt={`Floor plan ${current + 1}`}
              className="w-full h-full object-fill transition-opacity duration-500"
            />

            {/* Arrows */}
            <button
              onClick={prevPravasaImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPravasaImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>



    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="px-4 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 americana">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Explore our stunning collection of project images showcasing luxury living at its finest
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onClick={() => openModal(index)}
            >
              <div className="relative aspect-[6/3] overflow-hidden">
                <img
                  src={src.src || "/placeholder.svg"}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-10 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-base font-medium">{src.title}</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-gray-200">Click to view full size</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal / Lightbox */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center" onKeyDown={handleKeyDown} tabIndex={-1}>
            {/* Enhanced Backdrop */}
            <div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <div className="relative z-50 w-full h-full flex items-center justify-center p-4">
              {/* Enhanced Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
                aria-label="Close gallery"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image Counter */}
              <div className="absolute top-6 left-6 z-10 bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                <span className="text-sm font-medium">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>

              {/* Enhanced Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-6 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 group"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-6 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 group"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Enhanced Image Container */}
              <div className="relative max-w-6xl w-full mx-auto">
                <img
                  src={images[currentIndex].src || "/placeholder.svg"}
                  alt={`Gallery ${currentIndex + 1}`}
                  className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                />
                <p className="text-white mt-2 text-xl text-center font-semibold">{images[currentIndex].title}</p>
              </div>

              {/* Thumbnail Navigation */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex space-x-2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>

    
 
      



      

      


      

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                ROF <span className="text-yellow-400">PRAVASA</span>
              </div>
              <p className="text-gray-400 mb-4">Ultra Luxury Independent Floors at Sector-88A, Gurugram</p>
              <a href="tel:9870247426" className="flex items-center text-green-400 hover:underline">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">9870 247 426</span>
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h3>
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
              <h3 className="text-lg font-bold mb-4 text-yellow-400">Contact Info</h3>
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
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center text-white  transition-all duration-300 hover:scale-110"
          onClick={() => window.open("https://wa.me/919870247426", "_blank")}
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>
      <div className="fixed bottom-24 right-6 z-50">
        <a
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center text-white  transition-all duration-300 hover:scale-110"
          href="tel:9870247426"
        >
          <Phone className="w-8 h-8" />
        </a>
      </div>
    </div>
  )
}










