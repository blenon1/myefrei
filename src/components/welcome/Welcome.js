import React from 'react'

function Welcome() {
  return (
    <div className="flex flex-col w-screen h-screen uppercase justify-center align-middle bg-gradient-to-r from-cyan-500 to-blue-100">
      <div>
        <h1 className='font-bold mb-3 '>Bienvenu vous etes:</h1>
      </div>
      <div className='flex justify-center align-middle gap-9'>

        <button className='font-bold border-2 capitalize border-rose-500 px-9 py-3 rounded-lg  hover:bg-blue-700 hover:text-white hover:border-white active:border-cyan-500 focus:outline-none'>
          étudiant 
        </button>

        <button className='font-bold border-2 capitalize border-rose-500 px-9 rounded-lg  hover:bg-blue-700 hover:text-white hover:border-white  active:border-cyan-500 focus:outline-none'>
          enseignant
        </button>
      </div>

      <hr className='mx-40 my-7 red' />
      
    </div>
  )
}

export default Welcome
