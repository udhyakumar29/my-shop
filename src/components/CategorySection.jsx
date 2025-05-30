import React from 'react'
import ManCategory from '../assets/Images/men.avif'
import WomanCategory from '../assets/Images/girl.jpg'
import KidCategory from '../assets/Images/child.jpg';

const Categories = [
  {
    title: 'Men',
    imageUrl: ManCategory,
  },
  {
    title: 'Women',
    imageUrl: WomanCategory,
  },
  {
    title: 'Kids',
    imageUrl: KidCategory,
  },
];

const CategorySection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {Categories.map((category, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition
        transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <img
            src={category.imageUrl}
            alt={category.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4 text-center">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-blue-600 mt-2 cursor-pointer hover:underline">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
