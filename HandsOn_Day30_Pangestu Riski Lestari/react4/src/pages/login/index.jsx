import Navbar from "../../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const handleChangeUserName = e => {
        console.log(e);
        setUsername(e.target.value);
    }

    const handleChangePassword = e => {
        console.log(e);
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        setLoading(true);
        const payload ={
            username : username,
            password : password,
            expiresInMins: 30,
        }
        console.log(payload);

        axios
        .post('https://dummyjson.com/auth/login', payload)
        .then(res => {
            // console.log(res.data.accessToken);buat dapet tokennya
            const token = res.data.accessToken;
            localStorage.setItem("accessToken", token); //cara buat simpan ke localStorage. cek di inspect->application->localStorage. kalau token udah ada brarti sudah berhasil di simpan
            setMessage("Login berhasil!");

            setTimeout(()=> {
                navigate("/");
            }, 3000)
        })
        .catch(err => {
            console.log("gagal", err.response);
            setMessage(err.response.data.message);
        })
        .finally(() => {
            setLoading(false);
        })
    }

    

    return(
        <div>
            <Navbar/>
            <h1>ini adalah login page</h1>
            <div>
                <input onChange={handleChangeUserName} type="text" name="username" id="" placeholder="username" />
                <input onChange={handleChangePassword} type="text" name="password" id="" placeholder="password" />
                <button disabled={loading} onClick={handleSubmit}>{loading ? "Loading..." : "Submit"}</button>
            </div>
            {message && <p style={{ color: message === ("Login berhasil!") ? "green" : "red" }}>{message}</p>}
        </div>
    )
}

export default Login;