import React from 'react';

const BuyNow = () => {
  return (
    <div>
      <EstateCard></EstateCard>
      <Link to='/estatedetails'>
            <button className='btn btn-accent w-full text-xl font-semibold rounded-3xl'>Buy Now</button>
            </Link>
    </div>
  );
};

export default BuyNow;