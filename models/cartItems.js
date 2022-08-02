import mongoose,{Schema,ObjectId} from "mongoose";

const cartItemsSchema = new Schema({
    cart:{
        type:ObjectId,
        ref: "Cart"
    },
    product:{
        type: ObjectId,
        ref: "Product"
    },
    quantity:{
        type:Number,
        required:true
    }
},{timestamps: true});
export default mongoose.model("CartItems", cartItemsSchema);