import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left '>
      <div className='text-center py-5 bg-gradient-to-b from-greenlight to-greendark shadow-2xl text-[white]'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://personal-portfolio-one-gilt.vercel.app/'>
          Spoiler007
        </a>
      </div>
    </MDBFooter>
  );
}