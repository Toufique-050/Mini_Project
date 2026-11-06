const Student = require("../models/Student");

// Create Student
const createStudent = async (req, res) => {
    try {
        const { name, email, age, department } = req.body;

        const student = await Student.create({
            name,
            email,
            age,
            department
        });

        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get All Students With Department
const getStudents = async (req, res) => {
    try {
        const students = await Student.find()
            .populate("department", "name");

        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get Single Student
const getStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)
            .populate("department", "name");

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Update Student
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        ).populate("department", "name");

        res.json(student);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Delete Student
const deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);

        res.json({
            message: "Student deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
};