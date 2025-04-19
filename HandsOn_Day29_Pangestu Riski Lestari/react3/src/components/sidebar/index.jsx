const Sidebar = ({toggleSidebar}) =>{
    return (
        <div>
            <div>
                <button onClick={toggleSidebar}>X</button>
            </div>
            <div>
                <p>Menu</p>
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
        </div>
    )
}

export default Sidebar