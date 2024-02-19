import React, { useState } from 'react'

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className=" bg-[#F6F8F7] p-4 rounded-md md:py-6 md:mt-4 md:mx-72"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className=" flex justify-between items-center">
        <p className="font-semibold text-xl w-full text-left">{title}</p>{' '}
        <span>
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {!isOpen ? (  <path
              class="plus-icon"
              d="M1 1L8 8L15 1"
              stroke="#1C2B33"
              stroke-width="2"
              stroke-linecap="round"
            ></path>) : (      <path
                class="minus-icon"
                d="M1 9L8 2L15 9"
                stroke="#9c0e89"
                stroke-width="2"
                stroke-linecap="round"
              ></path>)}
          
      
          </svg>
        </span>
      </div>

      {isOpen && (
        <div className="">
          <p>{children}</p>
        </div>
      )}
    </div>
  )
}

const Faqs = () => {
  const [Data, setData] = useState([
    {
      title: 'What is a Short-Term Plan? ',
      ans: `
      Short-term health insurance is designed to fill gaps in coverage. It’s ideal for people who are:
      Switching jobs and in between benefits.
      Waiting to be Medicare-eligible.
      Not qualified for an ACA plan, but will have other insurance in the near future.
      Transitioning from their parent's health insurance plan to their own.
      Keep in mind, short-term medical plans aren’t required to meet the same guidelines as ACA plans. Because of this, many don’t cover pre-existing conditions, including pregnancy.
      Some plans also have maximum payout amounts and waiting periods for coverage to begin. So, when choosing a short-term plan, it’s important to completely understand what is and isn’t covered before you buy.`,
    },
    {
      title: 'What should I ask the agent when I speak to them on the phone to ensure I get the plan I need? ',
      ans: `When exploring your health plan options, you can ask the agent these questions to help determine if the coverage fits your needs.

      Is this a managed care or an indemnity plan?
      Is this plan ACA compliant?
      Is this a cost-sharing plan or is it real health insurance?
      Is this health insurance or a plan that supplements my current health insurance?
      How much money do I have to pay out-of-pocket annually for medical care?
      Is there a co-pay for doctor visits? If so, what is it? Is there a separate co-pay for specialists?
      Does this plan include dental, vision care, and other special services?
      Can I continue seeing my current doctors?
      Are preventative or routine exams covered?
      Does the plan cover pre-existing conditions? If not, what’s excluded?
      Are prescription costs covered?
      Does this plan have a deductible? If so, how much is it and when does it apply?`,
    },
    {
      title: 'What is a Affordable Care Act (ACA) Plan? ',
      ans: `The comprehensive healthcare reform law, known commonly as ACA or Obamacare, requires qualified insurers to provide individual health insurance plans to enrollees that meet the minimum essential coverage requirements. These plans are designed to make healthcare more affordable and to provide coverage to everyone, including those with pre-existing conditions.

      With an ACA health plan, you pay a monthly premium and typically, a co-pay when you visit your doctor. When choosing your plan, it’s important to look at the deductible, which is the amount of money you pay before your insurance “kicks in,” and your out-of-pocket maximum, which is the total amount of money you pay annually before your insurance covers you 100%.
      
      Also, keep in mind, that while all ACA health insurance plans include dental and vision coverage for children, they may not include it for adults. If you need vision and dental coverage, and your plan doesn’t include it, you’ll have to purchase it separately.`,
    },
    {
      title: 'What is a  Fixed Indemnity Plan? ',
      ans: `Fixed indemnity plans aren’t traditional health insurance coverage. These plans are designed to supplement your health insurance by reimbursing you for out-of-pocket expenses you pay on covered medical treatments and procedures.

      For example, if your health insurance has a $500 deductible for emergency room visits, this is what you pay if you receive treatment at the ER. Then, you can submit your receipts to the provider who manages your fixed indemnity plan for reimbursement.
      
      Keep in mind, fixed indemnity plans don’t cover pre-existing conditions. In fact, they typically have a list of specific procedures and medical treatments that are covered, so make sure you understand when you’re reimbursed and when you aren’t before you buy.
      
      Also, the amount of costs reimbursed to you could affect your Medicaid eligibility (if applicable).`,
    },
    {
      title: 'What is a Community/Cost-Sharing Plan?',
      ans: `Community/cost-sharing plans are not real health insurance plans. These plans are designed to supplement your health insurance in an effort to help you manage costs.

      When you purchase a cost-sharing plan, you aren’t buying health insurance. Instead, you’re buying into a community plan that pulls everyone’s monthly payments together and uses that money to help pay for its member’s out-of-pocket medical expenses.
      
      Keep in mind, each program has specific guidelines. Before you buy, make sure you know what type of medical expenses you can get reimbursed for.`
    }
  ])

  return (
    <div>
      <h1 className=" text-center text-[45px] font-bold "> Got Questions?</h1>

      <div className=" flex flex-col w-[90%] mx-auto my-5">
        {Data.map((item, index) => (
          <AccordionItem key={index} index title={item.title}>
            {item.ans}
          </AccordionItem>
        ))}
      </div>
    </div>
  )
}

export default Faqs
