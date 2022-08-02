import User from "../models/user";
import Product from "../models/product";
import CartItems from "../models/cartItems";
import Cart from "../models/cart";

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