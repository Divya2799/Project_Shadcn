import React from 'react';
import { Smartphone, Apple, Cuboid as Android, Zap, Users, Shield, CheckCircle, ArrowRight, Download, Star } from 'lucide-react';

const AppDevelopment = () => {
  const platforms = [
    {
      icon: Apple,
      name: 'iOS Development',
      description: 'Native iOS apps built with Swift and UIKit for optimal performance and user experience.',
      features: ['Swift & Objective-C', 'App Store Guidelines', 'iOS Design Principles', 'Core Data Integration']
    },
    {
      icon: Android,
      name: 'Android Development',
      description: 'Native Android apps using Kotlin and Java for seamless integration with Android ecosystem.',
      features: ['Kotlin & Java', 'Material Design', 'Google Play Store', 'Firebase Integration']
    },
    {
      icon: Smartphone,
      name: 'Cross-Platform',
      description: 'React Native and Flutter apps that work perfectly on both iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'Single Codebase', 'Native Performance']
    }
  ];

  const services = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized apps with smooth animations, fast loading times, and efficient resource usage.'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces designed with user experience and accessibility as top priorities.'
    },
    {
      icon: Shield,
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security with scalable architecture to support your growing user base.'
    }
  ];

  const appShowcase = [
    {
      title: 'HealthTracker Pro',
      category: 'Health & Fitness',
      description: 'Comprehensive health monitoring app with AI-powered insights and personalized recommendations.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloads: '100K+',
      rating: 4.8,
      features: ['AI Health Insights', 'Wearable Integration', 'Progress Tracking', 'Social Features']
    },
    {
      title: 'ShopEasy',
      category: 'E-Commerce',
      description: 'Modern shopping app with AR product preview, instant payments, and personalized shopping experience.',
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloads: '250K+',
      rating: 4.9,
      features: ['AR Product View', 'One-Click Payments', 'Push Notifications', 'Loyalty Program']
    },
    {
      title: 'TaskMaster',
      category: 'Productivity',
      description: 'Advanced project management and task tracking app for teams and individuals.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloads: '75K+',
      rating: 4.7,
      features: ['Team Collaboration', 'Time Tracking', 'Analytics Dashboard', 'Offline Mode']
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, target audience, and create a comprehensive app strategy.'
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'Our designers create intuitive interfaces that provide exceptional user experiences.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Expert developers build your app using the latest technologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing ensures your app works flawlessly across all devices and scenarios.'
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'We handle app store submission and provide ongoing maintenance and updates.'
    }
  ];

  return (
    <div className="pt-6">
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Mobile app development"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-indigo-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  App Development
                </h1>
              </div>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Transform your ideas into powerful mobile applications that engage users 
                and drive business growth. We create apps that users love and businesses rely on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 transition-colors flex items-center space-x-2">
                  <span>Start Your App</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-purple-300 text-purple-100 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:border-purple-500 hover:text-white transition-all">
                  View Our Apps
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">What We Deliver</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-white text-lg">Native & Cross-Platform Apps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-white text-lg">App Store Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-white text-lg">Backend Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-white text-lg">Push Notifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-white text-lg">Analytics & Reporting</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Platform Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We develop apps for all major platforms using the most suitable technology 
              stack for your specific needs and target audience.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all group">
                  <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our App Development?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on creating apps that not only look great but also perform exceptionally 
              and provide real value to your users.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow group">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Mobile Apps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our successful mobile applications that have delighted 
              users and achieved remarkable success in their respective markets.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {appShowcase.map((app, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={app.image}
                    alt={app.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {app.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{app.title}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-600">{app.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{app.downloads} downloads</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {app.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology that ensures your app is delivered on time, 
              within budget, and exceeds your expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's turn your app idea into reality. We'll guide you through every step 
            of the development process to ensure your app's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Discuss Your App Idea
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all">
              Get Development Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;
