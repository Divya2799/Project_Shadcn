import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ items, allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (itemId) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(itemId) 
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setOpenItems(prev => 
        prev.includes(itemId) ? [] : [itemId]
      );
    }
  };

  const isOpen = (itemId) => openItems.includes(itemId);

  return (
    <div className="w-full space-y-2">
      {items.map((item) => (
        <div key={item.id} className="text-lg text-black">
          {/* Accordion Header/Trigger */}
          <button
            onClick={() => toggleItem(item.id)}
            className="flex w-full items-center justify-between py-4 px-6 font-medium text-black transition-all hover:bg-purple-300 hover:text-black bg-purple/90 rounded-lg mb-2 hover:border-purple-600/50 focus:outline-none focus:ring-1 focus:ring-purple-400/50 focus:ring-offset-1 focus:ring-offset-transparent"
            aria-expanded={isOpen(item.id)}
          >
            <span className="text-left">{item.question}</span>
            <ChevronDown 
              className={`h-4 w-4 shrink-0 transition-transform duration-300 text-black-500 ${
                isOpen(item.id) ? 'rotate-180' : ''
              }`} 
            />
          </button>

          {/* Accordion Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              isOpen(item.id) 
                ? 'max-h-96 opacity-100 mb-4' 
                : 'max-h-0 opacity-0 mb-0'
            }`}
          >
            <div className="px-6 py-4 text-black-900 bg-black-300 backdrop-blur-sm border border-purple-400 rounded-lg border-t-0 rounded-t-none">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;