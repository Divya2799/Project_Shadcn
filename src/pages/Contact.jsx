import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Globe,
  Smartphone,
  Code,
  TrendingUp,
  Users,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Send,
  Building
} from 'lucide-react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "Progressive Web Apps"],
      color: "bg-blue-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["Native iOS/Android", "React Native", "Flutter", "App Store Optimization"],
      color: "bg-green-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Solutions",
      description: "Enterprise software development and custom business solutions",
      features: ["Custom Software", "System Integration", "Cloud Solutions", "Software Sales"],
      color: "bg-purple-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your business",
      features: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Analytics & Reporting"],
      color: "bg-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "HR Services",
      description: "Professional human resources solutions for modern businesses",
      features: ["Talent Acquisition", "HR Consulting", "Employee Training", "Performance Management"],
      color: "bg-teal-500"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Saas Application",
      description: "We provide CRM, LMS and HRMS services with small investment more features",
      features: ["Low Budget", "Flexible", "User Friendly UI", "Accurate Result"],
      color: "bg-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
                  Professional Software Services
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Transform Your
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Digital Vision</span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  We deliver cutting-edge software solutions, from web and mobile development to digital marketing and HR services. Let's build something extraordinary together.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>500+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>98% Client Satisfaction</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Get Started Today
                </Button>
                <Button variant="outline" size="lg" className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
                  View Our Work
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Software Development Team"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
              Our Expertise
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Comprehensive Software Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end solutions that drive your business forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900 mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 lg:py-15 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
              Let's Connect
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get in touch with our team of experts and let's discuss how we can help bring your vision to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Send us a Message</CardTitle>
                <CardDescription className="text-slate-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700 font-medium">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name here"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="sample@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 1234567889"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-slate-700 font-medium">Service Interest</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3  border border-black rounded-md focus:ring-1 focus:outline-none"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="software-solutions">Software Solutions</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="hr-services">HR Services</option>
                      </select>
                    </div>
                  </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyname" className="text-slate-700 font-medium">Company Name</Label>
                      <Input
                        id="companyname"
                        name="companyname"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Company name here"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                     <Label htmlFor="companyaddress" className="text-slate-700 font-medium">Phone Number</Label>
                      <Input
                        id="companyaddress"
                        name="companyaddress"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Company address"
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>


            <div className="space-y-8">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern Office Space"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-1">Modern Workspace</h3>
                  <p className="text-slate-200">Where innovation meets execution</p>
                </div>
              </div>

              <Card className="shadow-lg border-0">
                <CardContent className="p-8 pt-2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Get in Touch</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className='flex items-center gap-3 border border-gray-200 p-2 rounded-lg hover:bg-blue-200 cursor-pointer'>
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900">Email Us</h4>
                        <p className="text-slate-600 text-xs">support@eternatek.com</p>
                        <p className="text-slate-600 text-xs">sales@eternatek.com</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-3 border border-gray-200 p-2 rounded-lg hover:bg-blue-200 cursor-pointer'>
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900">Call Us</h4>
                        <p className="text-slate-600 text-xs">+91 9492276649</p>
                        <p className="text-slate-600 text-xs">+91 7773453657</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-3 border border-gray-200 p-2 rounded-lg hover:bg-blue-200 cursor-pointer'>
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900">Visit Us</h4>
                        <p className="text-slate-600 text-xs">1-7/3 10th floor Capital Towers</p>
                        <p className="text-slate-600 text-xs">Hyderabad, 500032</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-3 border border-gray-200 p-2 rounded-lg hover:bg-blue-200 cursor-pointer'>
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900">Business Hours</h4>
                        <p className="text-slate-600 text-xs">Mon - Fri: 10:00 AM - 6:00 PM</p>
                        {/* <p className="text-slate-600 text-xs">Sat: 10:00 AM - 4:00 PM</p> */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
