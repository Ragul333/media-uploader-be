const fileModal = require("../models/fileModal")


const uploadMedia = async (req, res) => {
    try {
        const { mediaUploaded } = req.body;
        console.log(mediaUploaded)
        const uplaodPost = new fileModal({ file: mediaUploaded, createdAt: new Date().toISOString() })
        await uplaodPost.save();
        res.status(201).json(uplaodPost);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getMedias = async (req, res) => {
    try {
        const medias = await fileModal.find({});
        res.status(200).json(medias);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { uploadMedia, getMedias }