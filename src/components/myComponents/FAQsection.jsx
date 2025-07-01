import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQSection = () => {
  const faqData = [
    {
      id: "item-1",
      question: "What services do you offer?",
      answer: "We offer comprehensive web development services including custom web applications, mobile app development, API development, and performance optimization. Our team specializes in modern technologies like React, Node.js, and cloud solutions."
    },
    {
      id: "item-2",
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      id: "item-3",
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive ongoing support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support. We believe in building long-term partnerships with our clients."
    },
    {
      id: "item-4",
      question: "What technologies do you work with?",
      answer: "We work with cutting-edge technologies including React, Vue.js, Node.js, Python, PostgreSQL, MongoDB, AWS, and many more. We choose the best technology stack based on your specific project requirements and business goals."
    },
    {
      id: "item-5",
      question: "How do you handle project communication?",
      answer: "We maintain transparent communication throughout the project lifecycle. We use project management tools, provide regular updates, schedule weekly check-ins, and are always available for questions. You'll have direct access to your development team."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-purple-200 text-lg">
          Find answers to common questions about our services and process.
        </p>
      </div>

      <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((item) => (
            <AccordionItem 
              key={item.id} 
              value={item.id}
              className="border-b border-white/10 last:border-b-0"
            >
              <AccordionTrigger className="text-white hover:text-purple-300 text-left py-4 px-2 hover:no-underline">
                <span className="font-medium">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-purple-200 px-2 pb-4 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;