import React from 'react';

const Banner = () => {
  return (
    <div>
      

      <div style={{borderRadius:'30px'}} className="carousel max-w-[1170px] min-h-screen h-auto container mx-auto" >
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/luxury-villa-with-pool_920207-14992.jpg?w=740" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/office-buildings_1127-3137.jpg?t=st=1713315398~exp=1713318998~hmac=390f4f3d8374c61e732821fee781490ada471c707248d9a441cc873190a5ccf8&w=740" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302625.jpg?t=st=1713315537~exp=1713319137~hmac=eaa1a5e89a3f5661b5397d6f419e675c5480403d40e70e9ed7cb7d4d0d520fc1&w=740" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/house-architectural-photography_1409-6509.jpg?t=st=1713315641~exp=1713319241~hmac=881199e1fe53739d6632387cf0d71af9e4feca58fa4f3cbb22d409febb0c2c2b&w=740" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>


      
    </div>
  );
};

export default Banner;