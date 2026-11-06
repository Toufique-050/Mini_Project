const Enrollment = require("../models/Enrollment");

// Create Enrollment
const createEnrollment = async (req, res) => {
    try {
        const { student, course } = req.body;

        const enrollment = await Enrollment.create({
            student,
            course
        });

        const result = await Enrollment.findById(enrollment._id)
            .populate("student", "name email")
            .populate("course", "name duration fee");

        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get All Enrollments
const getEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find()
            .populate("student", "name email")
            .populate("course", "name duration fee");

        res.json(enrollments);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get Single Enrollment
const getEnrollment = async (req, res) => {
    try {
        const enrollment = await Enrollment.findById(req.params.id)
            .populate("student", "name email")
            .populate("course", "name duration fee");

        if (!enrollment) {
            return res.status(404).json({
                message: "Enrollment not found"
            });
        }

        res.json(enrollment);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Delete Enrollment
const deleteEnrollment = async (req, res) => {
    try {
        await Enrollment.findByIdAndDelete(req.params.id);

        res.json({
            message: "Enrollment deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createEnrollment,
    getEnrollments,
    getEnrollment,
    deleteEnrollment
};