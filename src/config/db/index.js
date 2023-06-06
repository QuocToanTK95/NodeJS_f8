import { connect as _connect } from 'mongoose';

async function connect() {
    try {
        await _connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log('connection established');
    } catch (error) {
        console.log('connection error: ' + error);
    }
}

export default { connect };
