import './style.css'

function Navbar(props){
    const {logo, list} = props

    return(
        <div className='navContainer'>
            <div className='logo'>
                <h1>{logo}</h1>
            </div>
            <div className='menu'>
                {list.map((item, index)=>(
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div className='menuKanan'>
                <p>Login</p>
                <p className='signUp'>Sign Up</p>
            </div>
        </div>
    )
}

export default Navbar