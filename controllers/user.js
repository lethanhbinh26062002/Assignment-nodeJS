import User from "../models/user";
import jwt from "jsonwebtoken"
export const create = async (req, res) => {
    try {
        const user = await new User(req.body).save();
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không thêm được user"
        });
        console.log(error);
    }
};
export const real = async (req, res) => {
    const filter = { _id: req.params.id }
    try {
        const user = await User.findOne(filter).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm đc user"
        })
        console.log(error);
    }
};
export const update = async (req, res) => {
    const condition = { _id: req.params.id };
    const doc = req.body;
    const options = { new: true }
    try {
        const user = await User.findOneAndUpdate(condition, doc, options);
        message: "Đã update thành công";
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: "Lỗi không update đc user" })
        console.log(error);
    }
};
export const remove = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const user = await User.findOneAndDelete(condition).exec();
        res.json({
            message: "Đã xóa thành công user",
            data: user
        });
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được user"
        })
        console.log(error);
    }
};
export const userList = async (req, res,) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được danh sách user"
        })
        console.log(error);
    }
};
export const signUp = async (req, res) => {
    const {name,email,password} = req.body;
    try {
        const existUser = await User.findOne({email}).exec();
        if (existUser) {
            res.status(400).json({
                message:"Email đã tồn tại"
            })
        }
        const user = await new User({name,email,password}).save();
        res.json({
            message: "Đăng ký thành công",
            user :{
                _id: user._id,
                email: user.email,
                name: user.name,
            }
        });
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không đăng ký được tài khoản"
        });
        console.log(error);
    }
};
export const signIn = async (req, res) => {  
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if (!user) {
            res.status(400).json({message: 'Email không tồn tại'});
        }
        if(!user.authenticate(password)) {
            res.status(400).json({message: 'Sai mật khẩu'}); 
        }
        const token = jwt.sign({_id: user._id},"bin26",{expiresIn: '24h' }) // jwt.sign(): Tạo token __________ expiresIn: Settime tồn tại token
        res.json({
            token: token,
            user:{
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role,
                status: user.status,
            }
        })
    } catch (error) {
        console.log(error);
    }
};