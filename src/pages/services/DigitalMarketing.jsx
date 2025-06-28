import React from 'react';
import { TrendingUp, Target, BarChart3, Search, Share2, Mail, CheckCircle, ArrowRight, Users, Award, Zap } from 'lucide-react';

const DigitalMarketing = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO & SEM',
      description: 'Improve your search engine rankings and drive targeted traffic with our comprehensive SEO and search engine marketing strategies.',
      features: ['Keyword Research', 'On-Page Optimization', 'Link Building', 'PPC Campaigns'],
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage with your audience through strategic social media campaigns across all major platforms.',
      features: ['Content Strategy', 'Community Management', 'Paid Social Ads', 'Influencer Marketing'],
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized email marketing campaigns that drive conversions and build loyalty.',
      features: ['Campaign Automation', 'Segmentation', 'A/B Testing', 'Performance Analytics'],
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics and detailed reporting on all your marketing campaigns.',
      features: ['Google Analytics', 'Conversion Tracking', 'ROI Analysis', 'Custom Dashboards'],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Targeted Reach',
      description: 'Reach your ideal customers with precision targeting based on demographics, interests, and behavior.'
    },
    {
      icon: TrendingUp,
      title: 'Increased ROI',
      description: 'Maximize your marketing budget with strategies that deliver measurable results and higher returns.'
    },
    {
      icon: Users,
      title: 'Brand Awareness',
      description: 'Build strong brand recognition and establish your business as a trusted authority in your industry.'
    },
    {
      icon: Zap,
      title: 'Fast Results',
      description: 'See immediate impact with our proven strategies that generate leads and sales quickly.'
    }
  ];

  const caseStudies = [
    {
      client: 'TechStartup Inc.',
      industry: 'Technology',
      challenge: 'Low online visibility and poor lead generation',
      solution: 'Comprehensive SEO strategy with content marketing and PPC campaigns',
      results: {
        traffic: '+340%',
        leads: '+250%',
        revenue: '+180%'
      },
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      client: 'Fashion Forward',
      industry: 'E-commerce',
      challenge: 'Struggling with social media engagement and sales',
      solution: 'Social media marketing strategy with influencer partnerships',
      results: {
        followers: '+500%',
        engagement: '+380%',
        sales: '+220%'
      },
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      client: 'Local Restaurant Group',
      industry: 'Food & Beverage',
      challenge: 'Need to increase local customer base and online orders',
      solution: 'Local SEO, Google Ads, and social media advertising',
      results: {
        visibility: '+280%',
        orders: '+160%',
        revenue: '+145%'
      },
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Strategy Development',
      description: 'We analyze your business, competitors, and target audience to create a comprehensive marketing strategy.'
    },
    {
      step: '02',
      title: 'Campaign Setup',
      description: 'Our team sets up and configures all marketing channels and tools for optimal performance.'
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'We create compelling content that resonates with your audience and drives engagement.'
    },
    {
      step: '04',
      title: 'Launch & Monitor',
      description: 'We launch your campaigns and continuously monitor performance to ensure optimal results.'
    },
    {
      step: '05',
      title: 'Optimize & Scale',
      description: 'Based on data insights, we optimize campaigns and scale successful strategies for maximum ROI.'
    }
  ];

  return (
    <div className="pt-6">
    
      <section className="relative py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Digital marketing analytics"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-cyan-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Digital Marketing
                </h1>
              </div>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Accelerate your business growth with data-driven digital marketing strategies 
                that connect you with your ideal customers and maximize your ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center space-x-2">
                  <span>Start Growing Today</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-emerald-300 text-emerald-100 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all">
                  View Case Studies
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Marketing Services</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-white text-lg">Search Engine Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-white text-lg">Pay-Per-Click Advertising</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-white text-lg">Social Media Marketing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-white text-lg">Content Marketing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-white text-lg">Email Marketing Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Marketing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From search engine optimization to social media marketing, we provide 
              end-to-end digital marketing services that drive real business results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Digital Marketing Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's competitive landscape, effective digital marketing is essential 
              for business growth and customer acquisition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow group">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our digital marketing strategies have helped businesses across 
              various industries achieve remarkable growth and success.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={study.image}
                    alt={study.client}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.client}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-sm mb-3">{study.challenge}</p>
                    <h4 className="font-semibold text-gray-700 mb-1">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-700 mb-3">Results:</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-2xl font-bold text-emerald-600">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Marketing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your marketing campaigns 
              deliver maximum impact and sustainable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let's create a comprehensive digital marketing strategy that drives real results 
            for your business. Start your journey to success today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get Free Marketing Audit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all">
              Schedule Strategy Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
