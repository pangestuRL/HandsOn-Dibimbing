function UserCard ({user}){
    return (
        <div>
            <h1>User List</h1>
            <div key={user.id}>
              <h1>First Name: {user.first_name}</h1>
              <h2>Last Name: {user.last_name}</h2>
              <h3>Email: {user.email}</h3>
            </div>
        </div>
    )
}

export default UserCard;