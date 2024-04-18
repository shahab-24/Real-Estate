import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Banner from './Banner';




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
   

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-2xl">
        {estates.map((estate) => (
          <div key={estate.id} className="flex-grow p-4 mt-10 mb-10 overflow-hidden bg-[whitesmoke] transition border-2 border-accent hover:scale-105  hover:border-secondary border-opacity-30 rounded-3xl">
            <img className='rounded-2xl mb-4' src={estate.image} alt={estate.estate_title} />
            <h2 className='text-3xl font-bold mb-4'>{estate.estate_title}</h2>
            <p className='mb-4'>{estate.description}</p>
            
            <Link to={`/estatedetails/${estate.id}`}>
            <button className='btn btn-accent w-full text-xl font-semibold rounded-3xl'>{estate.button_text}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  
      

        
  );
};

export default Home;