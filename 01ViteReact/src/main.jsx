import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <h1>Custom App , Vishangi</h1>
  )
}

// const ReactElement = {
//   type: 'a',
//   props:  {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'

// };

const anotherUser = " Hi, how are you?"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherUser
)

const anotherElement = (
  <a href='https://google.com'  target='_blank' >Visit Google</a>
)




createRoot(document.getElementById('root'))
  .render(
    reactElement
)
