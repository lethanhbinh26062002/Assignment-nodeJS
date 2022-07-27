import mongoose,{Schema,ObjectId} from "mongoose";

const cartSchema = new Schema({
    userId:{
        type:ObjectId,
        ref: "User"
    }
},{timestamps: true});
export default mongoose.model("Cart", cartSchema);