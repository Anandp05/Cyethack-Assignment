import React from 'react'

function NavBar() {
  return (
    <div className='border-[1px] flex gap-10 '>
    <button className='w-40 font-semibold text-md text-white bg-[#3366ff] rounded-lg px-10'>Home</button>
    <button className='py-2 font-semibold text-md'>Scan Result</button>
    <button className='py-2 font-semibold text-md'>Report</button>
    </div>

  )
}

export default NavBar