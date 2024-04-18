import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
  return (
    <div className='max-w-[1170px] container mx-auto'>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer>
      
    </div>
  );
};

export default Root;