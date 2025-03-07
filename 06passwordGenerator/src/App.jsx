import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("");

   //hook useRef :

  const passwordRef = useRef(null)


  //hook usecallback :
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
  
    }



    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  
  //hooks useEffect :
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">

      <h1 className='text-center text-white my-3'>Password generator</h1>


      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-800">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-black"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipBoard}
          className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0">
          Copy
        </button>
      </div>


      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length : {length}</label>
        </div>


        <div className='flex text-sm gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            value={length}
            onChange={(e) => { setNumberAllowed((prev) => !prev) }}
          />
          <label htmlFor='numberInput'>Number</label>
        </div>


        <div className='flex text-sm gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="characterInput"
            value={length}
            onChange={(e) => { setCharacterAllowed((prev) => !prev) }}
          />
          <label htmlFor='characterInput'>Characters</label>

        </div>
      </div>

    </div>

  )
}

export default App
