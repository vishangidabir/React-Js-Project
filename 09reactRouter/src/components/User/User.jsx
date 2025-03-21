import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
      <div className='text-center m-4 bg-gray-400 text-white p-3 text-2xl'>User : {userid}</div>
  )
}

export default User