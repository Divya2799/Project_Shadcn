import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  TrendingUp, 
  Target, 
  UserCheck, 
  PhoneCall, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Headphones,
  Clock,
  Award
} from 'lucide-react';

const SalesAndServices = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Lead Generation",
      description: "Identify and qualify high-quality leads for your sales team"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Sales Training",
      description: "Comprehensive training programs to enhance your team's performance"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "CRM Solutions",
      description: "Custom CRM systems to manage customer relationships effectively"
    },
    {
      icon: <PhoneCall className="w-8 h-8" />,
      title: "Sales Consulting",
      description: "Expert guidance to optimize your sales processes and strategies"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Customer Support",
      description: "24/7 customer service solutions to enhance client satisfaction"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Data-driven insights to improve sales and service performance"
    }
  ];

  const solutions = [
    {
      title: "Sales Process Optimization",
      description: "Streamline your sales funnel",
      features: ["Lead Qualification", "Pipeline Management", "Conversion Optimization", "Sales Automation"],
      color: "from-purple-500 to-indigo-600",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Customer Relationship Management",
      description: "Build lasting customer relationships",
      features: ["Contact Management", "Customer Segmentation", "Communication Tracking", "Retention Strategies"],
      color: "from-blue-500 to-cyan-500",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Support & Service Excellence",
      description: "Deliver exceptional customer service",
      features: ["Multi-channel Support", "Ticket Management", "Knowledge Base", "Service Analytics"],
      color: "from-green-500 to-teal-500",
      icon: <Headphones className="w-8 h-8" />
    }
  ];

  const packages = [
    {
      name: "Essentials",
      price: "$1,999",
      period: "per month",
      description: "Perfect for small sales teams getting started",
      features: [
        "Basic CRM Setup",
        "Lead Generation (50 leads/month)",
        "Sales Training (4 hours/month)",
        "Email Support",
        "Monthly Performance Report",
        "Basic Sales Analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$3,999",
      period: "per month",
      description: "Comprehensive solution for growing sales teams",
      features: [
        "Advanced CRM Configuration",
        "Lead Generation (150 leads/month)",
        "Sales Training (12 hours/month)",
        "Phone & Email Support",
        "Weekly Performance Reports",
        "Advanced Analytics Dashboard",
        "Customer Service Training",
        "Process Optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$7,999",
      period: "per month",
      description: "Full-scale solution for large organizations",
      features: [
        "Custom CRM Development",
        "Unlimited Lead Generation",
        "Comprehensive Training Program",
        "24/7 Priority Support",
        "Real-time Analytics",
        "Dedicated Account Manager",
        "Custom Integrations",
        "Performance Coaching"
      ],
      popular: false
    }
  ];

  const metrics = [
    {
      value: "40%",
      label: "Average Sales Increase",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      value: "60%",
      label: "Faster Lead Response Time",
      icon: <Clock className="w-6 h-6" />
    },
    {
      value: "85%",
      label: "Customer Satisfaction Rate",
      icon: <Award className="w-6 h-6" />
    },
    {
      value: "200%",
      label: "ROI Improvement",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Sales & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Professional sales consulting and customer service solutions to accelerate your business growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Boost Your Sales
                </button>
                <button className="border-2 border-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
                  Free Consultation
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <Users className="w-16 h-16 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Customer Focused</h3>
                <p className="text-gray-300">Building relationships that drive sustainable growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Sales & Service Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to optimize your sales processes and enhance customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600">Our clients see significant improvements in their sales performance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-purple-600 to-pink-400 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  {metric.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2">{metric.value}</h3>
                <p className="text-purple-100">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Comprehensive Solutions</h2>
            <p className="text-xl text-gray-600">End-to-end sales and service optimization</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${solution.color} p-8 text-white`}>
                  <div className="flex items-center mb-4">
                    {solution.icon}
                    <h3 className="text-2xl font-bold ml-4">{solution.title}</h3>
                  </div>
                  <p className="text-gray-100">{solution.description}</p>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sales & Service Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect plan to transform your sales performance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular ? 'ring-4 ring-purple-500 relative' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-800">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">{pkg.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-800 text-black hover:bg-gray-700'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Sales?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's optimize your sales processes and enhance your customer service excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-900 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Optimizing
            </Link>
            <button className="border-2 border-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesAndServices;