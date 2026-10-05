const mongoose = require('mongoose');

const resource_schema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    type: { type: String, enum: ['video', 'pdf', 'article', 'exercise'], required: true },
    url: { type: String, required: true },
    module: { type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Resource', resource_schema);