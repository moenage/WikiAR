import mongoose from 'mongoose';

const infoCardSchema = mongoose.Schema({
    title: String,
    description: String,
    selectedFile: String,
});

const InfoCardDesc = mongoose.model('InfoCardDesc', infoCardSchema);

export default InfoCardDesc;