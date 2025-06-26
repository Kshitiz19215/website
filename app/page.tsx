"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Settings,
  Cpu,
  Zap,
  Cog,
  Users,
  Award,
  Mail,
  Phone,
  MapPin,
  Quote,
} from "lucide-react"
import Image from "next/image"

export default function ARPSolutionsWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Hero carousel data
  const heroSlides = [
    {
      image: "/placeholder1.svg?height=600&width=1200",
      title: "Powering Your Business with Reliable UPS Solutions",
      caption: "UPS Systems for Every Business Need",
    },
    {
      image: "/placeholder2.svg?height=600&width=1200",
      title: "Powering Your Journey: Reliable EV Charging",
      caption: "Charge Green: Sustainable EV Charging Solutions, Eco-friendly charging options for a greener tomorrow.",
    },
    {
      image: "/placeholder3.svg?height=600&width=1200",
      title: "Your Vision, Our Expertise: Signage & Branding Solutions",
      caption: "We specialize in impactful signage and strategic branding solutions to help businesses thrive",
    },
    {
      image: "/placeholder4.svg?height=600&width=1200",
      title: "MV Panel",
      caption: "Providing robust and efficient electrical distribution and control solutions tailored to your specific needs, We expertise in design, manufacturing, and installation of electrical control panels for industrial, commercial, and residential applications",
    },
    {
      image: "/placeholder5.svg?height=600&width=1200",
      title: "Engineering Excellence",
      caption: "Providing Comprehensive Engineering Solutions, As single window solutions to your engineering needs.",
    },
  ]

  // Products data
  const products = [
    {
      id: 1,
      name: "Industrial Control Systems",
      image: "/placeholder.svg?height=300&width=400",
      description: "Advanced PLC-based control systems for industrial automation",
      details: "Features: Real-time monitoring, Remote access, Fault diagnostics, Energy optimization",
    },
    {
      id: 2,
      name: "IoT Sensor Networks",
      image: "/placeholder.svg?height=300&width=400",
      description: "Wireless sensor networks for environmental monitoring",
      details: "Features: Long-range connectivity, Low power consumption, Cloud integration, Real-time alerts",
    },
    {
      id: 3,
      name: "Embedded Computing Modules",
      image: "/placeholder.svg?height=300&width=400",
      description: "High-performance embedded systems for edge computing",
      details: "Features: ARM-based processors, Linux support, Multiple I/O interfaces, Industrial grade",
    },
    {
      id: 4,
      name: "Power Management Solutions",
      image: "/placeholder.svg?height=300&width=400",
      description: "Efficient power distribution and management systems",
      details: "Features: Smart switching, Energy monitoring, Fault protection, Remote control",
    },
  ]

  // Services data
  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "R&D Services",
      description: "Custom research and development for innovative engineering solutions",
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Prototyping",
      description: "Rapid prototyping and proof-of-concept development",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automation Solutions",
      description: "Complete automation systems design and implementation",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Industrial IoT",
      description: "Connected device solutions for Industry 4.0 transformation",
    },
  ]

  // Technologies
  const technologies = [
    "Embedded Systems",
    "Electronics Design",
    "AI/ML",
    "Industrial IoT",
    "Automation",
    "Power Systems",
    "Wireless Communication",
    "Edge Computing",
    "Cloud Integration",
    "Data Analytics",
    "Cybersecurity",
    "HMI/SCADA",
  ]

  // Testimonials
  const testimonials = [
    {
      quote:
        "ARP Solutions delivered an exceptional automation system that increased our production efficiency by 40%. Their expertise in industrial IoT is unmatched.",
      author: "Sarah Johnson",
      company: "Manufacturing Corp",
      position: "Operations Director",
    },
    {
      quote:
        "The custom embedded solution provided by ARP Solutions perfectly met our requirements. Professional service and outstanding technical support.",
      author: "Michael Chen",
      company: "Tech Industries",
      position: "CTO",
    },
    {
      quote:
        "Working with ARP Solutions was a game-changer for our R&D department. Their innovative approach helped us bring our product to market faster.",
      author: "Emily Rodriguez",
      company: "Innovation Labs",
      position: "R&D Manager",
    },
  ]

  // Partner companies
  const partners = [
    "TechCorp",
    "InnovateLab",
    "FutureSystems",
    "SmartManufacturing",
    "DigitalSolutions",
    "AutomationPro",
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/placeholder-logo.png"
              alt="ARP Solutions Logo"
              width={112}
              height={112}
              className="w-28 h-28 object-contain rounded-lg"
            />
            <h1 className="text-2xl font-bold text-gray-900 text-[2.25rem] leading-tight">ARP Engineering Solutions</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition-colors text-lg md:text-xl font-semibold"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-700 hover:text-blue-600 transition-colors text-lg md:text-xl font-semibold"
            >
              PRODUCTS
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition-colors text-lg md:text-xl font-semibold"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors text-lg md:text-xl font-semibold"
            >
              CONTACT
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                PRODUCTS
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                CONTACT
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden mt-20">
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4 flex flex-col items-center justify-center h-full">
                  <h2 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">{slide.title}</h2>
                  <p className="text-xl md:text-2xl animate-fade-in">{slide.caption}</p>
                  <div className="flex justify-center w-full">
                    <button
                      onClick={() => scrollToSection("products")}
                      className="mt-8 px-8 py-3 bg-white hover:bg-gray-200 text-black text-lg font-semibold rounded-lg shadow transition-colors animate-fade-in"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative engineering solutions designed to meet the demands of modern industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering services to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                  <div className="text-blue-600 group-hover:text-white transition-colors">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies powering our innovative solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-lg py-2 px-4 hover:bg-blue-600 hover:text-white transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About ARP Solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              With over 15 years of experience in engineering excellence, ARP Solutions has been at the forefront of
              technological innovation. Our mission is to deliver cutting-edge engineering solutions that transform
              industries and drive progress. We combine deep technical expertise with a commitment to quality, ensuring
              our clients receive solutions that exceed expectations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">15+ Years</h3>
                <p className="text-gray-600">Industry Experience</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">500+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7</h3>
                <p className="text-gray-600">Technical Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders worldwide</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial
                      ? "opacity-100 transform translate-x-0"
                      : "opacity-0 transform translate-x-full absolute inset-0"
                  }`}
                >
                  <Card className="text-center p-8">
                    <CardContent className="pt-6">
                      <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                      <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-gray-600">{testimonial.position}</p>
                        <p className="text-blue-600 font-medium">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to start your next project? Let's discuss your requirements.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="your.email@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <Input placeholder="Your company name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type of Inquiry</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="products">Product Information</SelectItem>
                        <SelectItem value="services">Service Request</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea placeholder="Tell us about your project requirements..." rows={5} />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@arpsolutions.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">
                        123 Innovation Drive
                        <br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Companies Footer */}
      <footer className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-white mb-4">Trusted Partners</h3>
            <p className="text-gray-400">Working with industry leaders to deliver excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                  <p className="text-gray-400 font-medium">{partner}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-white text-xl font-bold">ARP Solutions</span>
            </div>
            <p className="text-gray-400">© 2024 ARP Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
