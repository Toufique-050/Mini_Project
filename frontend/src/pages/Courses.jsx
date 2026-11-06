import { useEffect, useState } from "react";
import api from "../services/api";

function Courses() {

    const [courses, setCourses] = useState([]);

    const [form, setForm] = useState({
        name: "",
        duration: "",
        fee: ""
    });

    const getCourses = async () => {
        const response = await api.get("/courses");

        setCourses(response.data);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const addCourse = async (e) => {
        e.preventDefault();

        await api.post("/courses", form);

        setForm({
            name: "",
            duration: "",
            fee: ""
        });

        getCourses();
    };

    const deleteCourse = async (id) => {
        await api.delete(`/courses/${id}`);

        getCourses();
    };

    useEffect(() => {
        getCourses();
    }, []);

    return (
        <div>

            <h2 className="mb-4">
                Courses
            </h2>

            <div className="card mb-4">

                <div className="card-body">

                    <form
                        onSubmit={addCourse}
                        className="row g-3"
                    >

                        <div className="col-md-4">

                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Course Name"
                                value={form.name}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-3">

                            <input
                                type="text"
                                name="duration"
                                className="form-control"
                                placeholder="Duration"
                                value={form.duration}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-3">

                            <input
                                type="number"
                                name="fee"
                                className="form-control"
                                placeholder="Fee"
                                value={form.fee}
                                onChange={handleChange}
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
                                <th>Course</th>
                                <th>Duration</th>
                                <th>Fee</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {courses.map((course, index) => (

                                <tr key={course._id}>

                                    <td>{index + 1}</td>

                                    <td>{course.name}</td>

                                    <td>{course.duration}</td>

                                    <td>{course.fee}</td>

                                    <td>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                deleteCourse(course._id)
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

export default Courses;