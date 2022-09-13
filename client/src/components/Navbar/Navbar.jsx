// Packages
import {Link} from 'react-router-dom';

// Assets
import Logo from '../../assets/logo.png';

function Navbar() {
    return(
        <div id="navbar" className="bg-purple-main flex justify-around items-center h-20 px-10">
            <div id="logo_container">
                <img src={Logo} alt="Logo" className="h-8" />
            </div>

            <nav id="navbar_links" className="flex items-center gap-16 text-white px-96 list-none font-sans">
                <li><Link className="hover:bg-white hover:text-purple-main px-2 py-1 rounded-sm transition-colors duration-150 ease-in border-none focus:outline-none" to="/">Home</Link></li>
                <li><Link className="hover:bg-white hover:text-purple-main px-2 py-1 rounded-sm transition-colors duration-150 ease-in border-none focus:outline-none" to="/listings">Listings</Link></li>
                <li><Link className="hover:bg-white hover:text-purple-main px-2 py-1 rounded-sm transition-colors duration-150 ease-in border-none focus:outline-none" to="/contact">Contact</Link></li>
            </nav>

            <div id="header_register_container" className="flex items-center gap-16 px-48 text-white font-sans">
                <Link href="#" className="font-semibold focus:outline-none" to="/signin">Login</Link>
                <Link to="/signup"><button className="bg-blue-main hover:bg-blue-light-400 px-4 py-1 rounded-sm transition-colors duration-150 ease-in font-bold focus:outline-none">Register</button></Link>
            </div>
        </div>
    )
}

export default Navbar;