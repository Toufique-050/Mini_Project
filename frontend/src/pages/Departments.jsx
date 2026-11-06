import { useEffect, useState } from "react";
import api from "../services/api";

function Departments() {

    const [departments, setDepartments] = useState([]);
    const [name, setName] = useState("");

    const getDepartments = async () => {
        const response = await api.get("/departments");

        setDepartments(response.data);
    };

    const addDepartment = async (e) => {
        e.preventDefault();

        if (!name) {
            return;
        }

        await api.post("/departments", {
            name
        });

        setName("");

        getDepartments();
    };

    const deleteDepartment = async (id) => {
        await api.delete(`/departments/${id}`);

        getDepartments();
    };

    useEffect(() => {
        getDepartments();
    }, []);

    return (
        <div>

            <h2 className="mb-4">
                Departments
            </h2>

            <div className="card mb-4">
                <div className="card-body">

                    <form
                        onSubmit={addDepartment}
                        className="row g-2"
                    >

                        <div className="col-md-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Department Name"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                            />
                        </div>

                        <div className="col-md-2">
                            <button className="btn btn-dark w-100">
                                Add
                            </button>
                        </div>

                    </form>

                </div>
            </div>

            <div className="card">
                <div className="card-body">

                    <table className="table table-hover">

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {departments.map((department, index) => (

                                <tr key={department._id}>

                                    <td>
                                        {index + 1}
                                    </td>

                                    <td>
                                        {department.name}
                                    </td>

                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                deleteDepartment(
                                                    department._id
                                                )
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>
            </div>

        </div>
    );
}

export default Departments;