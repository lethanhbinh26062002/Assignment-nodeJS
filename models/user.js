import mongoose,{Schema} from "mongoose";
import {createHmac} from 'crypto'
const userSchema = new Schema({
    name:{
        type:String,
        minLength:6,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        minLength:6,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    role: {
        type:Number,
        default: 0
    },
    status: {
        type:Number,
        default: 1
    }
},{timestamps: true});

userSchema.methods = {
    authenticate(password){
        return this.password == this.encryptPassword(password);
    },
    encryptPassword(password){
        if(!password) return;
        try {
            return createHmac("sha256","bin26").update(password).digest("hex");
        } catch (error) {
            console.log(error);
        }
    }
}
userSchema.pre("save", function(next){
    this.password = this.encryptPassword(this.password);
    next();
})
export default mongoose.model("User", userSchema);