import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Footer from "./components/Footer"


// function deklarasi
// function App(){
//   const name = `Pangestu`
//   const isSingle = true
//   return(
//     <div>
//       <h1>Hello Nama Saya {name}</h1>
//       <h1>{1+1}</h1>
//       <h1>{name.toUpperCase}</h1>
//     </div>
//   )
// }

// cara panggil JS di REACT
// 1. dideklarasikan dulu baru di panggil JS nya di dalam kurung kurawal sperti di contoh nama
// 2. bisa langsung tulis code JS nya di dalam kurung kurawal seperti contoh 1+1


function App(){
  // const name = `Pangestu`
  // const isSingle = true
  // const renderStatus = (isSingle) => {
  //   if(isSingle == true){
  //     return `Saya sudah menikah`
  //   }else{
  //     return `Saya masih sendiri`
  //   }
  // }

  // return (
  //   <div>
  //     <h1>Hello Nama Saya {name}</h1>
  //     <h1>{renderStatus(true)}</h1>
  //   </div>
  // )

  const name = `Pangestu`
  const isSingle = true
  const renderStatus = (isSingle)=>{
    if(isSingle == true){
      return <h1>Saya sudah menikah</h1>
    }else{
      return <p>Saya masih sendiri</p>
    }
  }

  const renderAge = (tahunLahir)=> {
    const tahunSekarang = new Date().getFullYear()
    const umur = tahunSekarang - tahunLahir
    return umur
  }

  return (
    <div>
      <Navbar/>
      <Banner/>
      <Footer/>
      <h1>Hello Nama Saya {name}</h1>
      {renderStatus(true)}
      <h1>Usia saya {renderAge(1996)} tahun</h1>
    </div>
  )
  
  // return(
  //   <div>
  //     <h1>Hello Nama Saya {name}</h1>
  //     <h1>{isSingle? `Menikah` : `Sendiri`}</h1>
  //     {isSingle? <h1>Menikah</h1> : <p>Single</p>
  //     }
  //   </div>
  // )
}


// function ekspretion/arrow
// const App = ()=>{
//   return <h1>Hellloooooowww</h1>
// }



export default App