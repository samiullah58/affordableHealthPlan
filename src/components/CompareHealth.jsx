import React from 'react'

const CompareHealth = () => {
  return ( 
    <div className='  grid md:grid-cols-2 grid-cols-1 gap-5  py-10 w-[90%] mx-auto md:w-[81%]'>
      <div className=' bg-[#F6F8F7]  rounded-md md:p-10 p-5 text-center w-full'>
        <h3 className=' md:text-[28px] text-[24px] font-bold '>Compare health insurance quotes</h3>
        <h6>
          <span className='text-[#e011f3] px-1'>NO OBLIGATION</span>TO ENROLL
        </h6>
        <div className=" flex md:flex-row flex-col gap-4 justify-center my-6 ">
          <div className="flex items-center justify-between border  px-4 py-2 rounded-[10px] bg-white ">
            <div>
              <p className=' text-left'>Zip Code</p>
              <input
                className=" rounded-none border-none focus-visible:border-none"
                type="text"
                value={44040}
              />
            </div>
            <img
              className="absolute inset-y-0 right-0 pr-2 flex items-center mt-6 mr-2"
              src="https://affordablehealthplans.org/wp-content/uploads/2023/04/green-check.svg"
              alt="Success"
              id="icon-success"
            />
          </div>
          <div className=" flex justify-center items-center py-4 bg-pink-700 rounded-[10px] px-10 text-2xl font-medium text-white hover:bg-pink-800 cursor-pointer">
            Start My Quote
          </div>
        </div>
      </div>
      <div className='bg-[#F6F8F7]  w-full rounded-md items-center justify-center gap-1 py-4  flex flex-col'>
        <h3 className='md:text-[30px] text-[24px] font-bold'>Or give us a call</h3>
        <h6 className='text-sm  flex justify-center py-2 items-center'><span className='text-[#e011f3] px-1'>THE EASIER, FASTER </span> WAY TO GET QUOTES</h6>
        <div className=' flex flex-col gap-2 justify-center '>
          <a href="tel: 1-844-679-6803">
            <button className=" flex justify-center items-center px-10 py-3  hover:bg-pink-800 rounded-md bg-pink-700 text-white text-xl" type="button">
              <span> <img className=' h10 w-10' src="https://affordablehealthplans.org/wp-content/uploads/2023/04/phone_white_200x200.gif" alt="" srcset="" /> </span>1-844-679-6803
            </button>
          </a>
          <div className=' flex justify-center items-center gap-2 py-2'> <img className=' h-5 w-5' src="https://affordablehealthplans.org/wp-content/uploads/2023/04/pulse_120x120.gif" alt="" /> <p className='text-sm'>Call for free live assistance</p></div>
        </div>
      </div>
    </div>
  )
}

export default CompareHealth
