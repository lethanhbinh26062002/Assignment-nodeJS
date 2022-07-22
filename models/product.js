import mongoose,{Schema,ObjectId} from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        required:true,
        index: true
    },
    price:{
        type:Number,
        required:true
    },
    sale_price:{
        type:Number,
        required:true
    },
    // img:{
    //     type:String,
    //     required:true
    // },
    description:{
        type:String,
        required:true
    },
    category:{
        type: ObjectId,
        ref: "Category"
    },
    status: {
        type: Number,
        default:1
    }
},{timestamps: true});
// productSchema.index({'$**': 'text'});
export default mongoose.model("Product", productSchema);