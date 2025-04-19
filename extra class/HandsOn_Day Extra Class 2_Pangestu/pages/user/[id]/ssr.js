import axios from "axios";

export async function getServerSideProps({query}) {
    const resp = await axios.get(`http://reqres.in/api/users/${query.id}`);
    console.log(resp.data);
    const name = resp.data.data.first_name + " " + resp.data.data.last_name;
    return {props: { name }};
    
}

export default function UserDetailSSRPage ({name}) {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}