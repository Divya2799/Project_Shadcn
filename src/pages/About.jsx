import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Eye, Heart, Users, Lightbulb, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-hero-bg">
       
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-hero-text text-purple-900 leading-tight">
                  Innovation Meets{" "}
                  <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h1>
                <p className="text-xl text-black-600 leading-relaxed">
                  At InnovateTech, we are pioneers in delivering transformative digital solutions that empower businesses to thrive in the ever-evolving technological landscape. With cutting-edge expertise and innovative approaches, we turn complex challenges into growth opportunities.
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="mybtn"
                  size="lg" 
                   className="border-2"
                  
                >
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="mybtn" size="lg" className="border-2">
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="relative border-0 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-100 to-purple-300 shadow-[0_4px_12px_rgba(168,85,247,0.4)] hover:shadow-[0_6px_20px_rgba(168,85,247,0.6)] transition-all hover:-translate-y-1 group">
              <div className=" p-8 ">
                <div className=" p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-primary" />
                    <span className="font-semibold text-gray-900 text-lg">Excellence Award 2024</span>
                  </div>
                  <p className="text-purple-800">
                    Recognized for outstanding innovation in digital transformation and client success.
                  </p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>

     


      {/* Vision & Mission Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg hover:shadow-xl hover:shadow-amber-100 bg-purple-200 transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-gradient-start to-gradient-end rounded-lg">
                    <Eye className="h-6 w-6 text-amber-900" />
                  </div>
                  <h2 className="text-3xl text-amber-700 font-bold bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    Vision
                  </h2>
                </div>
                <p className="text-gray-900 leading-relaxed text-lg">
                  To become the global catalyst for digital transformation, where innovation meets purpose. We envision a future where technology seamlessly integrates with human potential, creating sustainable solutions that drive progress across industries and communities worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl hover:shadow-amber-100 bg-purple-200 transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-gradient-start to-gradient-end rounded-lg">
                    <Target className="h-6 w-6 text-amber-900" />
                  </div>
                  <h2 className="text-3xl font-bold text-amber-700 bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    Mission
                  </h2>
                </div>
                <p className="text-gray-900 leading-relaxed text-lg">
                  To empower organizations through innovative technology solutions that enhance operational efficiency, accelerate growth, and create meaningful impact. We are committed to delivering excellence through collaborative partnerships and cutting-edge expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our journey and define our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative border-0 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-100 to-purple-300 shadow-[0_4px_12px_rgba(168,85,247,0.4)] hover:shadow-[0_6px_20px_rgba(168,85,247,0.6)] transition-all hover:-translate-y-1 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation First</h3>
                <p className="text-gray-600">
                  We constantly push boundaries and embrace emerging technologies to deliver breakthrough solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-amber-300 via-amber-100 to-purple-300 shadow-[0_4px_12px_rgba(168,85,247,0.4)] hover:shadow-[0_6px_20px_rgba(168,85,247,0.6)] transition-all hover:-translate-y-1 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Client Partnership</h3>
                <p className="text-gray-600">
                  We build lasting relationships based on trust, transparency, and mutual success.
                </p>
              </CardContent>
            </Card>

            <Card className="relative border-0 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-100 to-purple-300 shadow-[0_4px_12px_rgba(168,85,247,0.4)] hover:shadow-[0_6px_20px_rgba(168,85,247,0.6)] transition-all hover:-translate-y-1 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Purpose Driven</h3>
                <p className="text-gray-600">
                  Every solution we create is designed to make a positive impact on businesses and communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gradient-start to-gradient-end">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-lg opacity-90">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">150+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">5+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-lg opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate to turn your vision into reality. Connect with our team of experts and discover how we can accelerate your digital transformation journey.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="mybtn"
              size="lg" 
              className="border-2"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="mybtn" size="lg" className="border-2">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      
      
    </div>
  );
};

export default About;