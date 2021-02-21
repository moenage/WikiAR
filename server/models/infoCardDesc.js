import monsgoose from 'mongoose';

const infoCardSchema = mongoose.Schema({
    title: String,
    description: String,
    selectedFile: String,
});

const InfoCardDesc = mongoose.model('InfoCardDesc', inforCardSchema);

export default InfoCardDesc;