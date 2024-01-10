import React from 'react'

const list = ['Category', 'PorpularEvents', 'TodaysEvents', 'OnlineEvents', 'PersonaliseEvents']


function MenuBar() {
  return (
    <div className='flex flex-col justify-center ml-auto mr-auto  mb-8  md:w-[80%] px-8'>

          <div>
           <ul className='flex flex-row gap-6 overflow-y-auto py-8 inline-block '>
           {
              list.map(
                (item) =>(
                  <li className='px-2 py-1 font-[500] text-[1.1em] text-slate-600 hover:text-red-600 w-64 hover:border-b-2 hover:border-red-600 px-0 mx-6 '>
                    {item}
                  </li>
                )
              )
            }
           </ul>
          </div>

    </div>
  )
}

export default MenuBar
