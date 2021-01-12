const mongoose = require('mongoose');
const validator = require('validator');


const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email is already present'],
        validate(value) {
            if(validator.isEmail(value)) {
                throw new Error('Invalid Email')
            }
        }
    }
})