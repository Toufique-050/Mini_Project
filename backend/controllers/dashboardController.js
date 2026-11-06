const Department = require("../models/Department");
const Student = require("../models/Student");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");

const getDashboard = async (req, res) => {
    try {
        const departments = await Department.countDocuments();
        const students = await Student.countDocuments();
        const courses = await Course.countDocuments();
        const enrollments = await Enrollment.countDocuments();

        res.json({
            departments,
            students,
            courses,
            enrollments
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getDashboard
};