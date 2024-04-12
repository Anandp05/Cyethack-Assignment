import React from 'react'

function NavBar() {
  return (
    <div className='border-[1px] flex gap-10 '>
    <button className='text-white bg-[#3366ff] rounded-md px-10'>Home</button>
    <button className='py-5'>Scan Result</button>
    <button className='py-5'>Report</button>
    </div>

  )
}

export default NavBar