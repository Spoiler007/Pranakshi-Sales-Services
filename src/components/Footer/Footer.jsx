import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = ()=> {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left '>
      <div className='flex mx-auto py-5 px-5 bg-gradient-to-b from-greenlight to-greendark shadow-2xl text-[white]'>
       
        <p className='text-xl gap-2 flex font-outfit mx-auto'>
        &copy; {new Date().getFullYear()} Copyright :
          <h1 className='text-yellowlight'>Pranakshi Sales & Services</h1>
        </p>
      </div>
    </MDBFooter>
  );
}
export default Footer