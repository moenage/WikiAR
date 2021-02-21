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
    res.send('Info Card Creation');
}