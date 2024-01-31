import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = ()=> {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left '>
      <div className='text-center py-5 bg-gradient-to-b from-greenlight to-greendark shadow-2xl text-[white]'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <p className='text-dark'>
          Pranakshi Sales & Services
        </p>
      </div>
    </MDBFooter>
  );
}
export default Footer