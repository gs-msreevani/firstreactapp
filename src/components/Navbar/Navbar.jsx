import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import {useAuth} from "../../AuthContext";

const Navbar =()=>{
    const {isLoggedIn} = useAuth();
    return(
        <nav>
            <ul className="navbar_list">
                {isLoggedIn ?
                    (<>
                            <li className="li-item"><NavLink to='/'>Home</NavLink></li>
                            <li className="li-item"><NavLink to='/about'>About</NavLink></li>
                            <li className="li-item"><NavLink to='/contact'>Contact</NavLink></li>
                            <li className="li-item"><NavLink to='/products'>Products</NavLink></li>
                            <li className="li-item"><NavLink to='/sellers'>Sellers</NavLink></li>
                            <li className="li-item"><NavLink to='/guide'>Guide</NavLink></li>
                            <li className="li-item"><NavLink to='/survey'>Survey</NavLink></li>
                            <li className="li-item"><NavLink to='/logout'>Logout</NavLink></li>
                            <li className="li-item"><NavLink to='/logout'>Logout</NavLink></li>
                        </>
                    ) :
                    (
                        <li className="li-item" id="login"><NavLink to='/login'>LOGIN</NavLink></li>
                    )}
            </ul>
        </nav>
    )
}

export default Navbar;