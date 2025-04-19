import { useState } from 'react'
import Sidebar from './components/sidebar';
// import Navbar from './components/navbar'

// function App() {
//   const logonya = 'Biccas'
//   const listMenu = ['Home', 'Product', 'FAQ', 'Blog', 'About Us']
//   return (
//     <>
//     <Navbar logo={logonya} list={listMenu}/>
     
//     </>
//   )
// }
// const App = () =>{
//   const [name, setName] = useState('Arfan');
//   const [age, setAge] = useState('2 tahun');
//   // kalau pakai variabel let dan const data tdk bisa di ubah atau statis. maka pakai state untuk menyimpan
//   // data agar data dinamis. variabel untuk nyimpan data statis, kalo state untuk nyimpan data dinamis

//   const handleChangeData = () =>{
//     setName('Arvin');
//     setAge('9 bulan');
//   }

//   return (
//     <>
//       <h1>{name}</h1> 
//       {/* kalau di atas pakai variabel let const, yg bagian h1 ini akan tetap jd arfan meskipun valuenya udh jd arvin */}
//       <p>{age}</p>
//       <button onClick={handleChangeData}>Change Data</button>
//     </>
//   )
// }


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {!isOpen && <button onClick={toggleSidebar}>|||</button>}
      {isOpen && <Sidebar toggleSidebar={toggleSidebar} />}
      
    </>
  )
} 




export default App
