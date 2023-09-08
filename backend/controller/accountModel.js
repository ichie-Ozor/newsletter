import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    }
}, {timestamps: true})

export const User = model('email', userSchema)