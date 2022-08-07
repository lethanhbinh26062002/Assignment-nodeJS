import mongoose,{Schema,ObjectId} from "mongoose";

const cartItemsSchema = new Schema({
    product:{
        type: ObjectId,
        ref: "Product"
    },
    user: {
        type: ObjectId,
        ref: "User"
    },
    quantity:{
        type:Number,
        required:true
    },
    status:{
        type:Number,
        default: 0
    }
},{timestamps: true});
export default mongoose.model("CartItems", cartItemsSchema);