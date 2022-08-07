import User from "../models/user";
import Product from "../models/product";
import CartItems from "../models/cartItems";

export const listCartItems = async (req, res) => {
    try {
        // const idUser = await User.findOne({_id}).exec();
        const listCartItems = await CartItems.find().exec();
        res.json(listCartItems);
    } catch (error) {
        console.log(error);
    }
}
export const read_cartItem = async (req, res) => {
    try {
        const cart_detail  = await CartI.findOne({ _id: req.params.id }).exec();
        res.json(cart_detail)
    } catch (error) {
        console.log(error);
    }
}
export const createCartItems = async (req, res) => {
    try {
        const cartItems = await new CartItems(req.body).save();
        res.json(cartItems);
    } catch (error) {
        res.status(400).json({ error })
        console.log(error);
    }
}
export const remove_cartItems = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const cartItems = await CartItems.findOneAndDelete(condition).exec();
        res.json(cartItems);
    } catch (error) {
        console.log(error);
    }
};
export const update_cartItems= async (req, res) => {
    const condition = { _id: req.params.id };
    const doc = req.body;
    const options = { new: true }
    try {
        const cartItems = await CartItems.findOneAndUpdate(condition, doc, options);
        res.json(cartItems);
    } catch (error) {
        console.log(error);
    }
};