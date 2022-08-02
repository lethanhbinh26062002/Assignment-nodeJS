import User from "../models/user";
import Product from "../models/product";
import CartItems from "../models/cartItems";
import Cart from "../models/cart";

export const createCart = async (req, res) => {
    try {
        const cart = await new Cart(req.body).save();
        res.json(cart);
    } catch (error) {
        res.status(400).json({ error })
        console.log(error);
    }
}
export const remove_cart = async (req, res) => {
    const condition = { _id: req.params.id };
    try {
        const cart = await Cart.findOneAndDelete(condition).exec();
        const cartItems = await CartItems.find({ cart }).deleteMany({ cart }).select("-cart").exec();
        res.json({
            cartItems,
            cart
        })
    } catch (error) {
        console.log(error);
    }
}
export const realCart = async(req, res) => {
    try {
        const cart = await Cart.findOne({_id: req.params.id}).exec();
        const cartItems = await CartItems.find({cart}).select("-cart").exec();
        res.json(cartItems);
    } catch (error) {
        console.log(error);
    }
}