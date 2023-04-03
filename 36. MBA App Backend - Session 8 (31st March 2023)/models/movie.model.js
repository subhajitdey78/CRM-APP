const mongoose = require("mongoose");

/**
 * Defines the shema of the movie resource to bo stored in the DB
 */
const movieSchema  = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    casts: {
        type: [String],
        required: true
    },
    trailerUrl : {
        type: String,
        reuqired: true
    },
    posterUrl: {
        type: String,
        required: true
    },
    language: {
        type: String,
        reuqired: true,
        default: "Hindi"
    },
    releaseDate: {
        type: String,
        required: true
    },
    director : {
        type: String,
        reuqired: true
    },
    releaseStatus: {
        type: String,
        enum: ["RELEASED", "UNRELEASED", "BLOCKED"],
        default: "RELEASED",
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    }
}, {    
    //versionKey: false // this will remove the _v field, which indicates the internal revision of the document 
})




module.exports = mongoose.model("Movie", movieSchema);