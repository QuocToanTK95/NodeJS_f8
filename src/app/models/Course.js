import mongoose from 'mongoose';

let Course = new mongoose.Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

export default Course = mongoose.model('Course', Course);
