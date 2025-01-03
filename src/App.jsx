import React from 'react'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Login from './components/Login'

const App = () => {
  // const [IsLogin, setIsLogin] = useState(true)
  return (
  <div className='w-full h-full bg-slate-900'>
    {/* <Navbar /> */}
    {/* <Signup /> */}
    <Login />
    <Footer />
  </div>
  )
}

export default App