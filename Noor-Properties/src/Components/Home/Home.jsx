
import { useEffect, useState } from 'react';
import Banner from './Banner';
import EstateCard from '../EstateCard';




const Home = () => {
  const [estates, setEstates] =useState([]);

  useEffect(() => {
    fetch('Properties.json')
    .then(res => res.json())
    .then(data => setEstates(data))
    
    .catch(error => console.error('Error fetching data:', error));
    
  },[]);

  
  return (
    <div>
    <Banner></Banner>
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8 mb-4">Estates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-2xl">
        {estates.map(estate => (
          <EstateCard key={estate.id} estate={estate} />
        ))}
      </div>
    </div>
  
      

    </div>
  );
};

export default Home;