import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className="bg-light border-end p-3 min-vh-100">

            <h5 className="mb-4">
                Menu
            </h5>

            <div className="nav flex-column gap-2">

                <NavLink
                    to="/"
                    className="btn shadow border text-start"
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/departments"
                    className="btn  shadow border text-start"
                >
                    Departments
                </NavLink>

                <NavLink
                    to="/students"
                    className="btn  shadow border text-start"
                >
                    Students
                </NavLink>

                <NavLink
                    to="/courses"
                    className="btn  shadow border text-start"
                >
                    Courses
                </NavLink>

                <NavLink
                    to="/enrollments"
                    className="btn  shadow border text-start"
                >
                    Enrollments
                </NavLink>

            </div>

        </div>
    );
}

export default Sidebar;