import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {


    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to={'/'}><h3>Wedding Studio</h3></Link>
            </div>
          
            <div className="navbar__cart">
                <button className='logOut_btn'>LogOut</button>
            </div>
        </nav>
    );
};

export default Navbar;
