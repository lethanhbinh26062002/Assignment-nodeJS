import mongoose,{Schema,ObjectId} from "mongoose";

const cartItemsSchema = new Schema({
    cartId:{
        type:ObjectId,
        ref: "Cart"
    },
    productId:{
        type:ObjectId,
        ref: "Product"
    },
    quantity:{
        type:Number,
        required:true
    }
},{timestamps: true});
export default mongoose.model("CartItems", cartItemsSchema);