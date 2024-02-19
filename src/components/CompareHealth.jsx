import React from 'react'

<<<<<<< HEAD
const CompareHealth = () => { 
  return (
    <div className='  grid grid-cols-2 gap-5 px-20 py-10 md:py-7 md:mt-4 md:px-32'>
      <div className=' bg-[#F6F8F7]  rounded-2xl p-10 text-center w-full '>
        <h3 className=' text-[30px] font-semibold '>Compare health insurance quotes</h3>
        <h6>
          <span className='text-[#F37111] px-1'>NO OBLIGATION</span>TO ENROLL
        </h6>
        <div className=" flex justify-center my-6 ">
          <div className="flex items-center justify-between border  px-4 py-2 rounded-[10px] bg-white mx-2">
=======
const CompareHealth = () => {
  return ( 
    <div className='  grid md:grid-cols-2 grid-cols-1 gap-5  py-10 w-[90%] mx-auto md:w-[81%]'>
      <div className=' bg-[#F6F8F7]  rounded-md md:p-10 p-5 text-center w-full'>
        <h3 className=' md:text-[30px] text-[24px] font-bold '>Compare health insurance quotes</h3>
        <h6>
          <span className='text-[#F37111] px-1'>NO OBLIGATION</span>TO ENROLL
        </h6>
        <div className=" flex md:flex-row flex-col gap-4 justify-center my-6 ">
          <div className="flex items-center justify-between border  px-4 py-2 rounded-[10px] bg-white ">
>>>>>>> a64b8f9 (all responsive set)
            <div>
              <p className=' text-left'>Zip Code</p>
              <input
                className=" rounded-none border-none focus-visible:border-none"
                type="text"
                value={44040}
              />
            </div>
<<<<<<< HEAD
            <div>good</div>
          </div>
          <div className=" flex justify-center items-center bg-pink-800 rounded-[10px] px-10 text-2xl font-medium text-white hover:bg-slate-500 cursor-pointer">
=======
            <img
              className="absolute inset-y-0 right-0 pr-2 flex items-center mt-6 mr-2"
              src="https://affordablehealthplans.org/wp-content/uploads/2023/04/green-check.svg"
              alt="Success"
              id="icon-success"
            />
          </div>
          <div className=" flex justify-center items-center py-4 bg-pink-700 rounded-[10px] px-10 text-2xl font-medium text-white hover:bg-pink-800 cursor-pointer">
>>>>>>> a64b8f9 (all responsive set)
            Start My Quote
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className='bg-[#F6F8F7]  w-full rounded-2xl justify-center gap-2  flex flex-col items-center'>
        <h3 className='text-[30px] font-semibold'>Or give us a call</h3>
        <h6><span className='text-[#F37111] '>THE EASIER, FASTER </span>WAY TO GET QUOTES</h6>
        <div className=' flex flex-col gap-2 justify-center '>
        {' '}
        <a href="tel: 1-844-679-6803">
          <button className=" flex justify-center items-center px-10 py-4  hover:bg-yellow-600 rounded-md bg-pink-800" type="button">
            <span> <img className=' h10 w-10' src="https://affordablehealthplans.org/wp-content/uploads/2023/04/phone_white_200x200.gif" alt="" srcset="" /> </span>1-844-679-6803
          </button>
        </a>
        <div className=' flex justify-center items-center gap-2'> <img className=' h-5 w-5' src="https://affordablehealthplans.org/wp-content/uploads/2023/04/pulse_120x120.gif" alt="" /> <p>Call for free live assistance</p></div>
      </div>
=======
      <div className='bg-[#F6F8F7]  w-full rounded-md items-center justify-center gap-2 py-4  flex flex-col'>
        <h3 className='md:text-[30px] text-[24px] font-bold'>Or give us a call</h3>
        <h6><span className='text-[#F37111] '>THE EASIER, FASTER </span>WAY TO GET QUOTES</h6>
        <div className=' flex flex-col gap-2 justify-center '>
          {' '}
          <a href="tel: 1-844-679-6803">
            <button className=" flex justify-center items-center px-10 py-3  hover:bg-pink-800 rounded-md bg-pink-700 text-white text-xl" type="button">
              <span> <img className=' h10 w-10' src="https://affordablehealthplans.org/wp-content/uploads/2023/04/phone_white_200x200.gif" alt="" srcset="" /> </span>1-844-679-6803
            </button>
          </a>
          <div className=' flex justify-center items-center gap-2'> <img className=' h-5 w-5' src="https://affordablehealthplans.org/wp-content/uploads/2023/04/pulse_120x120.gif" alt="" /> <p>Call for free live assistance</p></div>
        </div>
>>>>>>> a64b8f9 (all responsive set)
      </div>
    </div>
  )
}

export default CompareHealth
