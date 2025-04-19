const Sidebar = (props) =>{
    const {menuNav, handleNav} = props

    return (
        <div>
            <p onClick={handleNav}>X</p>
            <ul>
                {menuNav.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Sidebar