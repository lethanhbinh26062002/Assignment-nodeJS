import mongoose,{Schema,ObjectId} from "mongoose";

const cartSchema = new Schema({
    userId:{
        type:ObjectId,
        ref: "User"
    },
    description:{
        type:String,
    }
},{timestamps: true});
export default mongoose.model("Cart", cartSchema);