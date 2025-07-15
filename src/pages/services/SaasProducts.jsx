import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Settings,
  CheckCircle,
  ArrowRight,
  Database,
  Globe,
  Smartphone
} from 'lucide-react';

const SaasProducts = () => {
  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud-Based Infrastructure",
      description: "Scalable, reliable cloud hosting with 99.9% uptime guarantee"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with encryption and compliance standards"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatic Updates",
      description: "Always stay current with the latest features and improvements"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Built-in tools for seamless team collaboration and communication"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Real-time insights and comprehensive reporting dashboards"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Customizable",
      description: "Flexible configuration options to match your business needs"
    }
  ];

  const products = [
    {
      name: "ProjectFlow Pro",
      description: "Complete project management solution",
      icon: <BarChart3 className="w-12 h-12" />,
      features: ["Task Management", "Team Collaboration", "Time Tracking", "Reporting"],
      color: "from-blue-500 to-cyan-500",
      price: "$29/month"
    },
    {
      name: "CustomerHub",
      description: "Advanced CRM and customer management",
      icon: <Users className="w-12 h-12" />,
      features: ["Contact Management", "Sales Pipeline", "Email Integration", "Analytics"],
      color: "from-green-500 to-teal-500",
      price: "$39/month"
    },
    {
      name: "DataInsights",
      description: "Business intelligence and analytics platform",
      icon: <Database className="w-12 h-12" />,
      features: ["Data Visualization", "Custom Reports", "Real-time Dashboards", "API Access"],
      color: "from-purple-500 to-pink-500",
      price: "$49/month"
    }
  ];

  const tiers = [
    {
      name: "Starter",
      price: "$19",
      period: "per user/month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 users",
        "Basic features",
        "Email support",
        "5GB storage",
        "Mobile app access",
        "Basic integrations"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$39",
      period: "per user/month",
      description: "Advanced features for growing teams",
      features: [
        "Up to 25 users",
        "All Starter features",
        "Priority support",
        "50GB storage",
        "Advanced analytics",
        "Custom integrations",
        "API access",
        "Advanced security"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$79",
      period: "per user/month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited users",
        "All Professional features",
        "24/7 phone support",
        "Unlimited storage",
        "Custom development",
        "Dedicated account manager",
        "On-premise deployment",
        "Compliance certifications"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const benefits = [
    {
      title: "99.9% Uptime",
      description: "Reliable service you can depend on",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Expert help whenever you need it",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Global CDN",
      description: "Fast performance worldwide",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Mobile Ready",
      description: "Access anywhere, anytime",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-900 via-blue-700 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                SaaS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Products</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Powerful Software-as-a-Service solutions that scale with your business and drive productivity
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <Cloud className="w-16 h-16 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Cloud Native</h3>
                <p className="text-gray-300">Built for the modern, distributed workplace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our SaaS Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade features designed for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-cyan-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our SaaS Products</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for every business need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${product.color} p-8 text-white`}>
                  <div className="text-center mb-4">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{product.name}</h3>
                  <p className="text-gray-100 text-center mb-4">{product.description}</p>
                  <div className="text-center">
                    <span className="text-2xl font-bold">Starting at {product.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 group-hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Enterprise Benefits</h2>
            <p className="text-xl text-gray-600">Why thousands of businesses trust our platform</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-cyan-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that's right for your team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  tier.popular ? 'ring-4 ring-cyan-500 relative' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-800">{tier.price}</span>
                    <span className="text-gray-600 ml-2">{tier.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join thousands of businesses that trust our SaaS solutions to drive their success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaasProducts;