import React, { useState } from 'react'

const State = () => {
  const statNames = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
    "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
    "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
    "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];
  return (
    <div className=" bg-[#F6F8F7] m-4 sm:m-10 p-6 sm:p-10 rounded-2xl md:py-16 md:mt-4 md:mx-32">
      <div className=" flex flex-col">
        <h2 className="  text-[35px] font-bold text-center text-gray-700">
          Click your state below
        </h2>
        <h6 className=" text-[20px]   mt-2  text-center">
          To get FREE health plan quotes & save!
        </h6>

        <div className='grid grid-cols-2 py-4 lg:grid-cols-5 gap-x-9 gap-y-4 whitespace-nowrap text-center'>
          {statNames.map((state, index) => (
            <div className=' p-2 border-[1px]  border-gray-400 hover:bg-pink-700 hover:text-white rounded-md px-4 text font-Montserrat font-sans-serif' key={index}>
              {state}
            </div>
          ))}
        </div>
      </div>




    </div>
  )
}

export default State