import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const EstateDetails = () => {

  const { id } = useParams();
  
  const [estate, setEstate] = useState();
  console.log(estate);

  useEffect(() => {
    
    fetch('../../public/Properties.json')
      .then(res => res.json())
      .then(data =>
         {
        const estateDetails = data.find(estate => estate.id === parseInt(id));
        
        setEstate(estateDetails);
        
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]); 

 
  if (!estate) {
    return <div className='font-bold text-3xl test-primary'>Loading...</div>;
  }



  return (
    <div className="p-4 mx-auto container min-h-screen w-[1170px]">
      <img className='rounded-2xl mb-4' src={estate.image} alt={estate.estate_title} />
      <h2 className='text-3xl font-bold mb-4'>{estate.estate_title}</h2>
      <p className='mb-4'>{estate.description}</p>
      <p><span className='text-l font-semibold text-primary'>Price:</span> {estate.price}</p>
      <p><span className='text-l font-semibold text-primary'>Status:</span> {estate.status}</p>
      <p><span className='text-l font-semibold text-primary'>Area:</span> {estate.area}</p>
      <p><span className='text-l font-semibold text-primary'>Location:</span> {estate.location}</p>
      <div className='mt-4 mb-4'>
        <strong>Facilities:</strong>
        <ul>
          {estate.facilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default EstateDetails;