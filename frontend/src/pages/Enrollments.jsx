import { useEffect, useState } from "react";
import api from "../services/api";

function Enrollments() {

    const [enrollments, setEnrollments] = useState([]);
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    const [form, setForm] = useState({
        student: "",
        course: ""
    });

    const getEnrollments = async () => {
        const response = await api.get("/enrollments");

        setEnrollments(response.data);
    };

    const getStudents = async () => {
        const response = await api.get("/students");

        setStudents(response.data);
    };

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

    const addEnrollment = async (e) => {
        e.preventDefault();

        await api.post("/enrollments", form);

        setForm({
            student: "",
            course: ""
        });

        getEnrollments();
    };

    const deleteEnrollment = async (id) => {
        await api.delete(`/enrollments/${id}`);

        getEnrollments();
    };

    useEffect(() => {
        getEnrollments();
        getStudents();
        getCourses();
    }, []);

    return (
        <div>

            <h2 className="mb-4">
                Enrollments
            </h2>

            <div className="card mb-4">

                <div className="card-body">

                    <form
                        onSubmit={addEnrollment}
                        className="row g-3"
                    >

                        <div className="col-md-5">

                            <label className="form-label">
                                Student
                            </label>

                            <select
                                name="student"
                                className="form-select"
                                value={form.student}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Select Student
                                </option>

                                {students.map((student) => (

                                    <option
                                        key={student._id}
                                        value={student._id}
                                    >
                                        {student.name}
                                    </option>

                                ))}

                            </select>

                        </div>

                        <div className="col-md-5">

                            <label className="form-label">
                                Course
                            </label>

                            <select
                                name="course"
                                className="form-select"
                                value={form.course}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Select Course
                                </option>

                                {courses.map((course) => (

                                    <option
                                        key={course._id}
                                        value={course._id}
                                    >
                                        {course.name}
                                    </option>

                                ))}

                            </select>

                        </div>

                        <div className="col-md-2 d-flex align-items-end">

                            <button className="btn btn-dark w-100">
                                Enroll
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
                                <th>Student</th>
                                <th>Email</th>
                                <th>Course</th>
                                <th>Duration</th>
                                <th>Action</th>
                            </tr>

                        </thead>

                        <tbody>

                            {enrollments.map((enrollment, index) => (

                                <tr key={enrollment._id}>

                                    <td>
                                        {index + 1}
                                    </td>

                                    <td>
                                        {enrollment.student?.name}
                                    </td>

                                    <td>
                                        {enrollment.student?.email}
                                    </td>

                                    <td>
                                        {enrollment.course?.name}
                                    </td>

                                    <td>
                                        {enrollment.course?.duration}
                                    </td>

                                    <td>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                deleteEnrollment(
                                                    enrollment._id
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

export default Enrollments;