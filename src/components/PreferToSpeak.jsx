import React from 'react'

const PreferToSpeak = () => {
  return (
    <div className=" bg-[#F6F8F7]  m-10 flex  bg-no-repeat bg-left-bottom  flex-col justify-center items-center p-10 md:py-16 md:mt-4 md:mx-32 rounded-2xl bg-[url('https://affordablehealthplans.org/wp-content/uploads/2023/05/male_agent.svg')]" >
      <div className=" flex flex-col">
        <h2 className="  text-[35px] font-bold text-center">
          Prefer to speak with an expert?
        </h2>
        <h6 className=" text-[22px]  mt-2 text-center">
          Speak with a licensed agent and get knowledgeable advice on choosing a
          plan that's right for you.
        </h6>
      </div>
      <div className=' flex flex-col gap-5 my-10'>
        {' '}
        <a href="tel: 1-844-679-6803">
          <button className=" flex justify-center items-center px-10 py-4 rounded-md bg-pink-600 hover:bg-pink-700" type="button">
            <span> <img className=' h10 w-10' src="https://affordablehealthplans.org/wp-content/uploads/2023/04/phone_white_200x200.gif" alt="" srcset="" /> </span>1-844-679-6803
          </button>
        </a>
        <div className=' flex justify-center items-center gap-2'> <img className=' h-5 w-5' src="https://affordablehealthplans.org/wp-content/uploads/2023/04/pulse_120x120.gif" alt="" /> <p>Call for free live assistance</p></div>
      </div>
    </div>
  )
}

export default PreferToSpeak
