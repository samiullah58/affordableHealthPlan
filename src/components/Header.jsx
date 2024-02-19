// // import React from 'react'
// import logo from '../assets/logo.svg';
// import phone from "../assets/Phone-400x400-white.gif"

// const Header = () => {
//   return (
//     <div className=" bg-white py-2 px-28 sm:px-6 sticky top-0 left-0">
//       <div className="  flex justify-between  items-center">
//         <div><img src={logo} alt="" /></div>
//         <div className=' flex justify-center items-center'>
//           <div className=' flex hidden md:block '>
//             <p>Need a quote?</p>
//             <h4 className=' font-bold px-2'>Call toll free:</h4>
//           </div>
//           <div className=' flex  items-center'>
//             <div><img className='w-10 h-10' src={phone} alt="phone" /></div>
//             <div className=' flex flex-col  items-center '>
//               <h4 className=' font-extrabold hover:text-[#AA336A]  text-2xl'>
//                 <a href="tel:1-844-919-2722">1-844-919-2722</a>
//               </h4>
//               <span>Sun - Sat 8 AM - 8 PM EST</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


// Header.jsx
import React from 'react';
import logo from '../assets/logo.svg';
import phone from "../assets/Phone-400x400-white.gif";

const Header = () => {
  return (
    <div className="bg-white py-2 px-4 sm:px-6 lg:px-36 sticky top-0 left-0 text-xs z-10 w-full">
      <div className="flex justify-between items-center">
        <div className="flex-shrink-0">
          <img className="h-10 w-auto sm:h-10" src={logo} alt="logo" />
        </div>
        <div className='flex items-center space-x-2 whitespace-nowrap'>
          <div className='hidden sm:flex lg:flex items-center'>
            <p className="text-lg font-large text-[#1c2b33] px-2">Need a quote?</p>
            <h4 className='text-lg font-bold'>Call toll free:</h4>
          </div>
          <div className='flex justify-center items-center'>
            <div className='flex-shrink-0'>
              <img className='w-10 h-10' src={phone} alt="phone" />
            </div>
            <div className='flex flex-col items-center'>
              <h4 className='font-bold text-lg md:text-xl text-gray-800 hover:text-[#AA336A]'>
                <a href="tel:1-844-919-2722">1-844-974-4136</a>
              </h4>
              <span className="text-xs text-gray-600">Sun - Sat 8 AM - 8 PM EST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

