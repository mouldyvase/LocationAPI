import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define a schema for the location details
const locationDetailSchema = new Schema({
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
});

// Define the main schema for sports locations
const sportLocationSchema = new Schema({
    sport: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    details: [locationDetailSchema], // Embedding location details schema
});

// Compile and export the model
const SportLocation = mongoose.model('SportLocation', sportLocationSchema);

export default SportLocation;
