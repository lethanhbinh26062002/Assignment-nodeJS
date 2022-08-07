import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        default:1
    }
}, { timestamps: true});

export default mongoose.model("Category", categorySchema); 