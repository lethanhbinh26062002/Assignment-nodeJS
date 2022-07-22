import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status:{
        type: Number,
        default:0
    }
}, { timestamps: true});

export default mongoose.model("Category", categorySchema); 