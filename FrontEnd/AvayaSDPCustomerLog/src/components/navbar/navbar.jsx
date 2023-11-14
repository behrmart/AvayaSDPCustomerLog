
import { NavLink } from 'react-router-dom'; // use NavLink from router to route...
//import './navbar.scss'

function Navbar() {

    return (
        <>

            <nav className="navbar bg-primary-subtle">
                <div className="container-fluid">
                    <a className="navbar-brand">Avaya SDP Customer Log</a>

                    <span className="navbar-text">
                        <span className='text-warning-emphasis'> Avaya SDP</span>
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Navbar