const express = require("express");

const {
    createEnrollment,
    getEnrollments,
    getEnrollment,
    deleteEnrollment
} = require("../controllers/enrollmentController");

const router = express.Router();

router.post("/", createEnrollment);
router.get("/", getEnrollments);
router.get("/:id", getEnrollment);
router.delete("/:id", deleteEnrollment);

module.exports = router;