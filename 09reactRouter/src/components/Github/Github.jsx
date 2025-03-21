import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/vishangidabir')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
      <div className='text-center m-4 bg-gray-400 text-white p-3 text-2xl'>Github followers : {data.followers}
          <img src={data.avatar_url} alt="Git picture" width={300} />

      </div>
  )
}

export default Github

export const githubInfoLoadar = async () => {
    const response = await fetch('https://api.github.com/users/vishangidabir')
    return response.json()
}