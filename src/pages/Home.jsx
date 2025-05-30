import React, { useEffect } from 'react';
import { Categories, mockData } from '../assets/mockData';
import First from '../assets/Images/hero-page.png';
import InfoSection from './InfoSection';
import CategorySection from '../components/CategorySection';
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from "react-redux";
import ProductCard from '../components/ProductCard';
import Shop from './Shop';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

  return (
    <div>
    <div className='bg-white mt-2 px-4 md:px-10 lg:px-24'>
      {/* Hero Section */}
      <div className='container mx-auto py-4 flex flex-col md:flex-row md:space-x-4'>
        {/* Categories Sidebar */}
        <div className='w-full md:w-3/12 mb-6 md:mb-0'>
          <div className='bg-red-600 text-white text-xs font-bold px-3 py-2.5'>
            SHOP BY CATEGORIES
          </div>
          <ul className='space-y-3 bg-gray-100 p-4 border'>
            {Categories.map((category, index) => (
              <li key={index} className='flex items-center text-sm font-medium'>
                <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Image + Text */}
        <div className='w-full md:w-9/12 h-64 md:h-96 relative'>
          <img src={First} alt="first" className='h-full w-full object-fit
          \ rounded' />
          <div className='absolute top-8 sm:top-14 left-4 sm:left-8'>
            <p className='text-gray-600 text-sm mb-2'>Code with Yousaf</p>
            <h2 className='text-2xl sm:text-3xl font-bold'>WELCOME TO E-SHOP</h2>
            <p className='text-lg sm:text-xl mt-2 font-semibold text-gray-800'>MILLIONS + PRODUCTS</p>
            <button className='bg-red-600 px-6 py-2 text-white mt-4 hover:bg-red-700
              transform transition-transform duration-300 hover:scale-105 text-sm rounded'>
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      
      <InfoSection />
      <CategorySection />

      {/* Top Products Section */}
      <div className='container mx-auto py-12'>
        <h1 className='text-2xl font-bold mb-6 text-center'>Top Products</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 cursor-pointer'>
          {products.products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
     
    </div>
           <Shop />
    </div>
  );
};

export default Home;
