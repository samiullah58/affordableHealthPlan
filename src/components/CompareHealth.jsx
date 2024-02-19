import React from 'react'

const CompareHealth = () => {
  return (
    <div className='  grid grid-cols-2 gap-5 px-20 py-10'>
      <div className=' bg-[#F6F8F7]  rounded-md p-10 text-center w-full '>
        <h3 className=' text-[30px] font-semibold '>Compare health insurance quotes</h3>
        <h6>
          <span className='text-[#F37111] px-1'>NO OBLIGATION</span>TO ENROLL
        </h6>
        <div className=" flex justify-center my-6 ">
          <div className="flex items-center justify-between border  px-4 py-2 rounded-[10px] bg-white mx-2">
            <div>
              <p className=' text-left'>Zip Code</p>
              <input
                className=" rounded-none border-none focus-visible:border-none"
                type="text"
                value={44040}
              />
            </div>
            <div>good</div>
          </div>
          <div className=" flex justify-center items-center bg-pink-800 rounded-[10px] px-10 text-2xl font-medium text-white hover:bg-slate-500 cursor-pointer">
            Start My Quote
          </div>
        </div>
      </div>
      <div className='bg-[#F6F8F7]  w-full rounded-md items-center justify-center gap-2  flex flex-col items-center'>
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
      </div>
    </div>
  )
}

export default CompareHealth
