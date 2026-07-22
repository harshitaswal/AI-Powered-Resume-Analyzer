const pdfParse = require("pdf-parse");
const generateInterviewReport = require("../services/ai.service");
const interviewReportModel = require("../models/interviewReport.model");

/**
 * @description Generate interview report
 */
async function generateInterviewReportController(req, res) {
    try {
        const { title, selfDescription, jobDescription } = req.body;

        // Validate required fields
        if (!jobDescription) {
            return res.status(400).json({
                message: "Job description is required."
            });
        }

        let resumeText = "";

        // Read resume only if uploaded
        if (req.file) {
            const resumeContent = await pdfParse(req.file.buffer);
            resumeText = resumeContent.text;
        }

        // At least one of resume or self description is required
        if (!resumeText && !selfDescription) {
            return res.status(400).json({
                message: "Either a resume or self description is required."
            });
        }

        // Generate AI report
        const interViewReportByAi = await generateInterviewReport({
            title,
            resume: resumeText,
            selfDescription,
            jobDescription
        });

        // Save report
        const interviewReport = await interviewReportModel.create({
            user: req.user.id,
            title: title || "Software Engineer",
            resume: resumeText,
            selfDescription,
            jobDescription,
            ...interViewReportByAi
        });

        return res.status(201).json({
            message: "Interview report generated successfully.",
            interviewReport
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: error.message
        });
    }
}

/**
 * @description Get interview report by ID
 */
async function getInterviewReportByIdController(req, res) {
    try {
        const { interviewId } = req.params;

        const interviewReport = await interviewReportModel.findOne({
            _id: interviewId,
            user: req.user.id
        });

        if (!interviewReport) {
            return res.status(404).json({
                message: "Interview report not found."
            });
        }

        return res.status(200).json({
            message: "Interview report fetched successfully.",
            interviewReport
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: error.message
        });
    }
}

/**
 * @description Get all interview reports
 */
async function getAllInterviewReportsController(req, res) {
    try {
        const interviewReports = await interviewReportModel
            .find({ user: req.user.id })
            .sort({ createdAt: -1 })
            .select(
                "-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan"
            );

        return res.status(200).json({
            message: "Interview reports fetched successfully.",
            interviewReports
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    generateInterviewReportController,
    getInterviewReportByIdController,
    getAllInterviewReportsController
};