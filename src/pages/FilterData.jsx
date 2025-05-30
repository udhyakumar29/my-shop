import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import Noproduct from '../assets/Images/noproduct.svg';

const FilterData = () => {
  const filterProducts = useSelector(state => state.product.filteredData || []);

  return (
    <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
      {filterProducts.length > 0 ? (
        <>
          <h1 className='text-2xl font-bold mb-6 text-center'>Shop</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 cursor-pointer'>
            {filterProducts.map((product) => (
              <ProductCard key={product.id || product._id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className='flex justify-center'>
          <img src={Noproduct} alt="No product found" />
        </div>
      )}
    </div>
  );
};

export default FilterData;
