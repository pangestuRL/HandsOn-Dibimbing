import axios from "axios";
import {useState} from "react";

const useUser = () => {

    const [user, setUser] = useState ([])

    const getUser = async () => {
        try{ 
            const res = await axios.get(`https://reqres.in/api/users?page=1`)
            console.log(res);
            setUser(res.data.data);
        }catch (error) {
            console.log(error);
        }
    };

    const oldUser = async () => {
        console.log("test");
    }

    return {
        user,
        getUser,
        oldUser,
    };
};

export default useUser;


// untuk hapus dan edit, sama persis caranya. cuma tinggal ganti protokol aja
// axios.delete(`APInya`, config); kalau butuh authorisasi pakai config
// axios.put(`API nya`, payload, config)