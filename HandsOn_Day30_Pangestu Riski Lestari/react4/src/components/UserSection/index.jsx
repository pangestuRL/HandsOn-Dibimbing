import UserCard from "../UserCard";

function UserSection (props){
    const {user} = props

    return(
        <div className='user'>
            {user.map(user => <UserCard key={user.id} user={user}/>)}
        </div>
        
    )
}

export default UserSection;