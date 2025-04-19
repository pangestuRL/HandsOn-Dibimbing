import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar =() => {
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate();

    const handleLogout = () => {
        //hit API logout to make token expired
        localStorage.clear();
        navigate("/login");
    } 

    return (
        <div style={{display:'flex', gap:"10px"}}>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/pokemon">Pokemon</Link>

            {token && <button onClick = {handleLogout}>Logout</button>}
        </div>
    )
}

export default Navbar;