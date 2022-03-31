import Mongoose from 'mongoose';
const Schema = Mongoose.Schema;

const BossSchema = new Schema({

    bossName: {
        type: String,
        required: true
    },

    bossLevel: {
        type: Number,
        required: true
    },

    bossCharacter: {
        type: Array,
        required: true
    },

    bossDrop: {
        type: Array,
        required: true
    },

    bossDificulty: {
        type: String,
        required: true
    },

    bossExp: {
        type: Number,
        required: true
    },

})

module.exports = Mongoose.model('BossModel', BossSchema)