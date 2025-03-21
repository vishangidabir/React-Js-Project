import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UseContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
