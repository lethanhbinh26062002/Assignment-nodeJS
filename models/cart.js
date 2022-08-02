import mongoose,{Schema,ObjectId} from "mongoose";

const cartSchema = new Schema({
    user:{
        type:ObjectId,
        ref: "User"
    },
    description:{
        type:String,
        default: "",
    },
    status: {
        type:Number,
        default: 0
    }
},{timestamps: true});
export default mongoose.model("Cart", cartSchema);