import {Link} from 'react-router-dom'

const NavBar = () => {
    return ( 
        <nav className="navbar">
        <h1>The Dojo Block</h1>
        <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Create" >New Blog</Link>
        </div>
        </nav>
     );
}
 
export default NavBar;