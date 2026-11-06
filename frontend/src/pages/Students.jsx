import { useEffect, useState } from "react";
import api from "../services/api";

function Students() {

    const [students, setStudents] = useState([]);
    const [departments, setDepartments] = useState([]);

    const [form, setForm] = useState({
        name: "",
        email: "",
        age: "",
        department: ""
    });

    const getStudents = async () => {
        const response = await api.get("/students");

        setStudents(response.data);
    };

    const getDepartments = async () => {
        const response = await api.get("/departments");

        setDepartments(response.data);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const addStudent = async (e) => {
        e.preventDefault();

        await api.post("/students", form);

        setForm({
            name: "",
            email: "",
            age: "",
            department: ""
        });

        getStudents();
    };

    const deleteStudent = async (id) => {
        await api.delete(`/students/${id}`);

        getStudents();
    };

    useEffect(() => {
        getStudents();
        getDepartments();
    }, []);

    return (
        <div>

            <h2 className="mb-4">
                Students
            </h2>

            <div className="card mb-4">
                <div className="card-body">

                    <form
                        onSubmit={addStudent}
                        className="row g-3"
                    >

                        <div className="col-md-6">

                            <label className="form-label">
                                Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={form.name}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-6">

                            <label className="form-label">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={form.email}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-4">

                            <label className="form-label">
                                Age
                            </label>

                            <input
                                type="number"
                                name="age"
                                className="form-control"
                                value={form.age}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-8">

                            <label className="form-label">
                                Department
                            </label>

                            <select
                                name="department"
                                className="form-select"
                                value={form.department}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Select Department
                                </option>

                                {departments.map((department) => (

                                    <option
                                        key={department._id}
                                        value={department._id}
                                    >
                                        {department.name}
                                    </option>

                                ))}

                            </select>

                        </div>

                        <div className="col-12">

                            <button className="btn btn-dark">
                                Add Student
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
                                <th>Email</th>
                                <th>Age</th>
                                <th>Department</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {students.map((student, index) => (

                                <tr key={student._id}>

                                    <td>{index + 1}</td>

                                    <td>{student.name}</td>

                                    <td>{student.email}</td>

                                    <td>{student.age}</td>

                                    <td>
                                        {student.department?.name}
                                    </td>

                                    <td>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                deleteStudent(student._id)
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

export default Students;