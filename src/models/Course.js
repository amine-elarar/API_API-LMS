const mongoose = require("mongoose")

// const db = require('../config/db');


const course_schema = new mongoose.Schema(
    {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: { type: String, required: true, index: true },
    level: { type: mongoose.Schema.Types.ObjectId, ref: 'Level', required: true },
    published: { type: Boolean, default: false }
    }, { timestamps: true });

module.exports = mongoose.model('Course', course_schema);


