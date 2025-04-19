import { useState } from 'react'
import Navbar from './components/navbar/navbar'

function App() {
  const logo1 = 'Arfa'
  const logoName = 'Vin'
  const menuList = ['Home', 'Shop', 'About', 'Contact']

  return (
    <>

    <Navbar logo= {logo1} logoName={logoName} listMenu={menuList}/> 

    </>
     
  )
}

export default App
