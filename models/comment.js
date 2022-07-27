import mongoose,{Schema,ObjectId} from "mongoose";

const commentSchema = new Schema({
    content:{
        type:String,
        required:true,
    },
    userId:{
        type:ObjectId,
        ref: "User"
    },
    productId:{
        type: ObjectId,
        ref: "Product"
    },
},{timestamps: true});
// productSchema.index({'$**': 'text'});
export default mongoose.model("Comment", commentSchema);