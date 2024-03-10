import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/create">Create</Link>
                </li>
                <li>
                    <Link to="/view">View</Link>
                </li>
                <li>
                    <Link to="/history">History</Link>
                </li>
                <li>
                    <Link to="/login">Logout</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;