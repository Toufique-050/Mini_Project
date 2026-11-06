import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Departments from "./pages/Departments";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Enrollments from "./pages/Enrollments";

function App() {

    return (
        <BrowserRouter>

            <Navbar />

            <div className="container-fluid">

                <div className="row">

                    <div className="col-md-2 p-0">

                        <Sidebar />

                    </div>

                    <div className="col-md-10 p-4">

                        <Routes>

                            <Route
                                path="/"
                                element={<Dashboard />}
                            />

                            <Route
                                path="/departments"
                                element={<Departments />}
                            />

                            <Route
                                path="/students"
                                element={<Students />}
                            />

                            <Route
                                path="/courses"
                                element={<Courses />}
                            />

                            <Route
                                path="/enrollments"
                                element={<Enrollments />}
                            />

                        </Routes>

                    </div>

                </div>

            </div>

        </BrowserRouter>
    );
}

export default App;