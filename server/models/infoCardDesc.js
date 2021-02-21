import mongoose from 'mongoose';

const infoCardSchema = mongoose.Schema({
    creator: String,
    title: String,
    description: String,
    selectedFile: String,
});

const InfoCardDesc = mongoose.model('InfoCardDesc', infoCardSchema);

export default InfoCardDesc;