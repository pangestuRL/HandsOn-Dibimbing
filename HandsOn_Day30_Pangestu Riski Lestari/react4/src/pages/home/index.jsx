import { useState, useEffect } from 'react'
import axios from 'axios'
// import UserSection from '../../components/UserSection'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
// import Sidebar from './components/sidebar'
import useUser from '../../hooks/useUser';
import { useContext } from 'react';
import { TodosContext } from '../../context/todosProvider';


// function App(){
//   const [sidebar, setSidebar] = useState(false)

//   const menuNav = ['Home', 'About', 'Contact']
//   const handleNav = () => setSidebar(!sidebar)
  
//   return(
//     <>
//       {!sidebar && <p onClick={handleNav}>|||</p>}
//       {sidebar && <Sidebar menuNav = {menuNav} handleNav={handleNav}/>}
//     </>
//   )
// }

// const App = () => {

//   const [menu,setMenu] = useState([]) //ini kurung kurawal karena data dr API berupa banyak data yg harus di tampung. jd ini tergantung data yg ada di API

//   const getMenu = () => {
//     axios
//       .get("https://api.mudoapi.site/menus") //get disini adl protokol. jd bisa get, post, put/patch, delete
//       .then(res => { //then untuk kalau berhasil
//         const dataMenu = res.data.data.Data; //kenapa ada 3 .data? karena stuktur datanya. jd harus console log dulu
//         setMenu(dataMenu);
//       })
//       .catch(err =>{ //catch untuk yang gagal
//         console.log("ini data gagal", err);
//       })
//   };

//   //useEffect adalah Lifecycle hooks, untuk memanggil/ menjalankan function ketika pertama kali di render
//   useEffect(() => {
//     getMenu();
//   }, []); //array ini untuk parameter, kalau tdk ada yg dicek brarti array kosong

//   console.log('Menu', menu);

//   return (
//     <div>
//       <h1>Hello World</h1>
//       {menu.map(item => (
//         <div key={item.id}>
//           <h1>{item.name}</h1>
//           <p>{item.price}</p>
//           <img width={200} src={item.imageUrl} alt={item.name} />
//         </div>
//       ))}
//     </div>
//   );
// };

const Home = () => {

  const {todos, getTodos}= useContext(TodosContext);
  console.log()
  // const [user,setUser] = useState([])
  const [menu, setMenu] = useState([])
  const [search, setSearch] = useState ("");
  const [pagination, setPagination] = useState ({
    perPage : 2,
    page :1,
    currentPage : null,
    previousPage : null,
    nextPage : null,
    total : null
  });

  const {user, getUser} = useUser();

  const token = localStorage.getItem("accessToken");
  // const getUser = () => {
      //   axios
      //     .get("https://reqres.in/api/users?page=2") //get disini adl protokol. jd bisa get, post, put/patch, delete
      //     .then(res => { //then untuk kalau berhasil
      //       const dataUser = res.data.data; //kenapa ada 3 .data? karena stuktur datanya. jd harus console log dulu
      //       setUser(dataUser);
      //       // console.log("ini data berhasil", res);
      //     })
      //     .catch(err =>{ //catch untuk yang gagal
      //       console.log("ini data gagal", err);
      //     })
      // };

      const getMenu = () => {
            axios
              .get(`https://api.mudoapi.site/menus?name=${search}&perPage=${pagination.perPage}&page=${pagination.page}`) //get disini adl protokol. jd bisa get, post, put/patch, delete
              .then(res => { //then untuk kalau berhasil
                console.log("res", res);
                const dataMenu = res.data.data.Data; //kenapa ada 3 .data? karena stuktur datanya. jd harus console log dulu
                setMenu(dataMenu);

                const { total, perPage } = res.data.data; //ambil total dan perPage dr API untuk hitung totalPages

  
                setPagination(prev => ({
                  ...prev,
                  totalPages: Math.ceil(total / perPage),
                }));
              })
              .catch(err =>{ //catch untuk yang gagal
                console.log("ini data gagal", err);
              })
          };

      useEffect(() => {
          // getUser();
          getMenu();
          getUser();
        }, []); //array ini untuk parameter, kalau tdk ada yg dicek brarti array kosong
    
      useEffect(() => {
        getMenu();
      }, [search, pagination.page]);
      
      console.log(search);

  return (
    <div>
        <Navbar/>
        <div>
          {user.map((user) => (
            <p key={user.id}>{user.email}</p>
          ))}
        </div>

        <input type="text" name="" id="" onChange={(e) => setSearch(e.target.value)}/>

        {menu.map((menu) => (
          <div
            style={{border: "1px solid black", width:"200px"}}
            key={menu.id}>
            <img style={{width:"200px"}}src={menu.imageUrl} alt="menu" />
            <h1>{menu.name}</h1>
            <p>{menu.priceFormatted}</p>
            <p>{menu.descriptiom}</p>
            <button>
              <Link to={`/menu/${menu.id}`}>See Details</Link>
            </button>
  
            
          </div>
        ))}
        <div>
          <button disabled={token}>Anda harus login untuk melihat menu lainnya😉</button>
          <button disabled={pagination.page === 1}
            onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}>Back</button> 
          
          {pagination.total && Array.from({ length: pagination.total - pagination.perPage - 1 },(_, i) => i + 1).map((pageNum) => (
            <button
                key={pageNum}
                onClick={() => setPagination((prev) => ({ ...prev, currentPage: pageNum }))}>
                {pageNum}
            </button>
          ))}

          <button disabled={!token || pagination.page === pagination.totalPages}
            onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}>Next</button>
            </div>
        {/* <UserSection user = {user}/> */}

        {todos.map((item) => {
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        })}
    </div>
  )
}

export default Home;

//lifecycle atau siklus hidup aplikasi, ada 3:
//1. mounting = aplikasi pertama di buka
//2. update = ketika sesuatu berubah maka aplikasi mentriger
//3. unmount = ketika aplikasi di tutup/close

//1. panggil API
//2. simpan data dr api
//3. render data yang disimpan di dalam state berasal dari API