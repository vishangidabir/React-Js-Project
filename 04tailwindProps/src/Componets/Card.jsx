import React from 'react'

function Card({username, btnText = 'visit me'}) {  
console.log(username,btnText);


  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img className="w-full h-48 object-cover" src="https://images.alphacoders.com/492/492674.jpg" alt="Card Image" />
        <div className="p-6">
          <h1 className="text-xl text-black font-bold mb-2">{username}</h1>
          <p className="text-gray-700 mb-4">This is a brief description of the card content. It provides some insights about the card.</p>
          <a href="#" className="bg-green-300 text-black px-4 py-2 rounded hover:bg-black-600">{btnText}</a>
        </div>
      </div>
  )
}

export default Card