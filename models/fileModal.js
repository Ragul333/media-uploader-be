const mongoose = require('mongoose');

const fileUpload = mongoose.Schema({
    file: { type: String, required: true},
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const fileModal = mongoose.model('files', fileUpload);
module.exports = fileModal;