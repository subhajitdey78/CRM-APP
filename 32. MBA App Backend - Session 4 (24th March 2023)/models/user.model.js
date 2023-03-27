const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true, // it will convert the email into the lower case and then store in the db,
        milLength: 10, // anything less then 10 will fail
        unique: true

    },
    createdAt: {
        //I want to dafult to a new date
        type: Date,
        immutable: true, // This will ensure the createdAt column is never updated but once in the start
        default: () => {
            return Date.now();
        }
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    },
    // Exercise: Create the next two fields as enums
    userType: {
        type: String,
        required: true,
        default: "CUSTOMER"
    },
    userStatus: {
        type: String,
        required: true,
        default: "APPROVED"
    }
})


module.exports = mongoose.model("User", userSchema);