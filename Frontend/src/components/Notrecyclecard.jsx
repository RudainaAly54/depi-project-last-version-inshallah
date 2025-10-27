<<<<<<< HEAD
import React from 'react'

const Notrecyclecard = (props) => {
  return (
    <div className='border-2 border-gray-300 rounded-lg p-4 m-5 w-80 '>
        <h2 className='font-bold text-lg mb-2'>⚠️{props.title}</h2>
        <p className='text-gray-800 mb-4'>why not recyclable:{props.text}</p>
       <div className='px-2 py-0.5 bg-emerald-100 rounded-lg text-xs'>Alternative: {props.items} </div>
    </div>
  )
}
export default Notrecyclecard
=======
import React from 'react'

const Notrecyclecard = (props) => {
  return (
    <div className='border-2 border-gray-300 rounded-lg p-4 m-5 max-w-80'>
        <h2 className='font-bold text-lg mb-2'>⚠️{props.title}</h2>
        <p className='text-gray-800 mb-4'>why not recyclable:{props.text}</p>
       <div className='px-2 py-0.5 bg-emerald-100 rounded-lg text-xs'>Alternative: {props.items} </div>
    </div>
  )
}
export default Notrecyclecard
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
