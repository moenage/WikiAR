import InfoCardDesc from '../models/infoCardDesc.js';

export const getInfoCards = async (req, res) => {
    try {
        const infoCardDescs = await InfoCardDesc.find();

        res.status(200).json(infoCardDescs);
    }   catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createInfoCard = (req, res) => {
    const infoCard = req.body;

    const newInfoCard = new InfoCardDesc(infoCard);

    try {
        newInfoCard.save();

        res.status(201).json(newInfoCard);
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }
}