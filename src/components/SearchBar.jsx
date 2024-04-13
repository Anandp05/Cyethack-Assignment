import React from 'react'
import Button from '@mui/material/Button';

function SearchBar() {
  return (
    <div className=' w-full flex justify-around mt-3 mb-3'>
    <div class='w-[90%] mx-3'>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search something.." />
        <div className='mt-3'>
        </div>

</div>
    </div>
    <button className='mx-3 w-[20%] p-2 font-bold rounded-md text-white bg-[#3366ff]'>Add New Profile</button>
</div>
  )
}

export default SearchBar