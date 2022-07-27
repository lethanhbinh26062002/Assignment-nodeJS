import User from "../models/user";
import Product from "../models/product";
import CartItems from "../models/cartItems";

export const createCartItems = async (req, res) => {
    try {
        const cartItems = await new CartItems(req.body).save();
        res.json(cartItems);
    } catch (error) {
        res.status(400).json({ error })
        console.log(error);
    }
}

// export const real = async (req, res) => {
//     try {
//         const category = await Category.findOne({ _id: req.params.id }).exec();
//         // const products = await Product.find({category}).select("-category").exec();
//         res.json(category)
//         // res.json({
//         //     category,
//         //     products
//         // })
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const realProductByCategory = async (req, res) => {
//     try {
//         const category = await Category.findOne({ _id: req.params.id }).exec();
//         const products = await Product.find({ category }).select("-category").exec();
//         res.json({
//             category,
//             products
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const list = async (req, res) => {
//     try {
//         const categories = await Category.find().exec();
//         res.json(categories)
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const remove = async (req, res) => {
//     const condition = { _id: req.params.id };
//     try {
//         const category = await Category.findOneAndDelete(condition).exec();
//         const products = await Product.find({category}).deleteMany({category}).select("-category").exec();
//         res.json({
//             category,
//             products,
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const update = async (req, res) => {
//     const condition = { _id: req.params.id };
//     const document = req.body;
//     const options = { new: true }
//     try {
//         const category = await Category.findOneAndUpdate(condition, document, options).exec();
//         res.json(category)
//     } catch (error) {
//         console.log(error);
//     }
// }