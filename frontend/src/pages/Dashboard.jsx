import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

    const [data, setData] = useState({
        departments: 0,
        students: 0,
        courses: 0,
        enrollments: 0
    });

    const getDashboard = async () => {
        try {
            const response = await api.get("/dashboard");

            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDashboard();
    }, []);

    return (
        <div>

            <h2 className="mb-4">
                Dashboard
            </h2>

            <div className="row g-4">

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6>Departments</h6>
                            <h2>{data.departments}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6>Students</h6>
                            <h2>{data.students}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6>Courses</h6>
                            <h2>{data.courses}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6>Enrollments</h6>
                            <h2>{data.enrollments}</h2>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;