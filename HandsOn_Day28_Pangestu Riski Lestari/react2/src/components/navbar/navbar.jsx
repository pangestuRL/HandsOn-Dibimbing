import {FaUser, FaSearch, FaHeart, FaCartArrowDown, FaDog} from 'react-icons/fa';

function Navbar (props) {
    const {logo, logoName, listMenu} = props
    //cara1 = pakai props doang {props}
    // cara2 = props di param jd langsung pakai kurawal
    //{logo, logoName} tdk perlu pakai props lg
    //cara 3 destructuring. paramnya pakai props. trus dibikin const untuk destrukturing
    //sebelum masuk ke return. nah di dalam returnnya seperti cara 2
    
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
            <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                <FaDog/>
                {/* cara 1
                <h1>{props.logo}<h1/>
                <h1>{props.logoName}<h1/> */}
                {/* cara 2 & 3 */}
                <h1>{logo}</h1>
                <h1>{logoName}</h1>
            </div>
            <div style={{display:'flex', gap:'20px'}}>
                {listMenu.map((item, index)=>(
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div  style={{display:'flex', gap:'20px'}}>
                <FaUser/>
                <FaSearch/>
                <FaHeart/>
                <FaCartArrowDown/>
            </div>
        </div>
    )


}

export default Navbar