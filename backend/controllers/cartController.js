import Cart from "../models/Cart.js";

// Add item to cart
export const addToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [{ productId, quantity: 1 }] });
    } else {
      const item = cart.items.find((i) => i.productId.toString() === productId);
      if (item) {
        item.quantity += 1;
      } else {
        cart.items.push({ productId, quantity: 1 });
      }
    }

    await cart.save();
    res.json({
      message: "Item added to cart",
      cart,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Remove item from cart
export const removeItem = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter((i) => i.productId.toString() !== productId);

    await cart.save();
    res.json({
      message: "Item removed from cart",
      cart,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Update item quantity in cart

export const updateQuantity = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.find((i) => i.productId.toString() === productId);

    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    item.quantity = quantity;

    await cart.save();
    res.json({
      message: "Item quantity updated",
      cart,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get cart by user ID
export const getCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.findOne({ userId }).populate("items.productId");

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
































// const Cart = require("../models/Cart");
// const Product = require("../models/product");

// // Add to cart
// const addToCart = async (req, res) => {
//   try {
//     const { userId, productId, quantity } = req.body;

//     if (!userId ||!productId) {
//       return res.status(400).json({ message: "userId and productId required" });
//     }

//     // Find existing cart
//     let cart = await Cart.findOne({ user: userId });

//     if (!cart) {
//       // Create new cart if not exists
//       cart = new Cart({
//         user: userId,
//         items: []
//       });
//     }

//     // Check if product already in cart
//     const existingItemIndex = cart.items.findIndex(
//       (item) => item.product.toString() === productId
//     );

//     if (existingItemIndex > -1) {
//       // If exists, increase quantity
//       cart.items[existingItemIndex].quantity += quantity || 1;
//     } else {
//       // If not exists, push new item
//       cart.items.push({
//         product: productId,
//         quantity: quantity || 1
//       });
//     }

//     await cart.save();

//     // Populate product details and send
//     const updatedCart = await Cart.findOne({ user: userId }).populate("items.product");

//     res.status(200).json({
//       message: "Added to cart",
//       cart: updatedCart
//     });

//   } catch (error) {
//     console.log("ADD TO CART ERROR:", error.message);
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get cart
// const getCart = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const cart = await Cart.findOne({ user: userId }).populate("items.product");
//     if (!cart) {
//       return res.status(200).json({ items: [] });
//     }
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { addToCart, getCart };
