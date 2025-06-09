import React from 'react';

interface PricingItem {
  title: string;
  description: string;
  price: string;
}

interface PricingTableProps {
  category: string;
  items: PricingItem[];
}

const PricingTable: React.FC<PricingTableProps> = ({ category, items }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
        <span className="text-brand-blue">{category}</span> Photography
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <div className="text-2xl font-bold text-brand-blue">
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;