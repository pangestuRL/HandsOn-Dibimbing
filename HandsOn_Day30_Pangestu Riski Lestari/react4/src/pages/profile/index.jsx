import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import useUser from "../../hooks/useUser";

const Profile = () => {
    const [profile, setProfile] = useState({});

    const {user, getUser} = useUser();

    const getProfile = async () => {
        const token = localStorage.getItem("accessToken");
        const config = {
        header : {
            Authorization: `Bearer ${token}`,
        }
        };

        try {
            const response = await axios.get("https://dummyjson.com/auth/me", config);
            setProfile(response.data);
            console.log("res", response);
        }
        catch (error){
            console.log("err", error.response);
        }
    };

    useEffect (() => {
        getProfile();
        getUser();
    }, []);
    

    
    
    return (
        <div>
            <Navbar/>
            <h1>Ini Profile Page</h1>
            <div>
                <p>{profile.username}</p>
                <img src={profile.img} alt="" />
                <p>{profile.gender}</p>
            </div>

            {user.map((user) => (
                <p key={user.id}>{user.email}</p>
            ))}
        </div>
    )

}

export default Profile;