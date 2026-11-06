import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar shadow shadow-sm">
            <div className="container">
                <Link
                    to="/"
                    className="navbar-brand fw-bold"
                >
                    Student Management
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;