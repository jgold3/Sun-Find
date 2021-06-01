const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationsSchema = new Schema({

    lat: {
        type: String,
        required: true,
    },
    lon: {
        type: String,
        required: true,
    },

}, {
    timestamps: true,
});

const Locations = mongoose.model('Locations', locationsSchema);

module.exports = Locations;