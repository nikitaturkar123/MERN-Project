// import express from 'express';
// import {
//     addToCart,
//     removeItem,
//     updateQuantity,
//     getCart
// } from '../controllers/cartController.js';

// const router = express.Router();

// // Add item to cart
// router.post('/add', addToCart);

// // Remove item from cart
// router.post('/remove', removeItem);

// // Update item quantity in cart
// router.post('/update', updateQuantity);

// // Get user's cart
// router.get('/:userId', getCart);

// export default router;







// import express from 'express';
// import Cart from '../models/Cart.js';
// const router = express.Router();

// router.post('/add', async (req, res) => {
//   try {
//     const { userId, productId } = req.body;
//     console.log("Add cart ->", req.body);
    
//     if (!userId) return res.status(400).json({ message: "Please login, userId missing" });

//     let cart = await Cart.findOne({ userId });
//     if (!cart) {
//       cart = new Cart({ userId, items: [{ productId, quantity: 1 }] });
//     } else {
//       const found = cart.items.find(i => i.productId === productId);
//       if (found) found.quantity += 1;
//       else cart.items.push({ productId, quantity: 1 });
//     }
    
//     await cart.save();
//     res.status(200).json({ message: "Added", cart });

//   } catch (err) {
//     console.error("CART ERROR:", err);
//     res.status(500).json({ message: err.message });
//   }
// });

// router.get('/:userId', async (req,res)=>{
//   const cart = await Cart.findOne({ userId: req.params.userId });
//   res.json(cart || { items: [] });
// });

// export default router;



import express from 'express';
import Cart from '../models/Cart.js';
import Product from '../models/product.js';
const router = express.Router();

// 1. ADD to cart
router.post('/add', async (req, res) => {
  try {
    const { userId, productId } = req.body;
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [{ productId, quantity: 1 }] });
    } else {
      const found = cart.items.find(i => i.productId === productId);
      if (found) found.quantity += 1;
      else cart.items.push({ productId, quantity: 1 });
    }
    await cart.save();
    res.json({ message: "Added", cart });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// 2. GET cart - yehi missing tha, isiliye 404 aa raha tha
router.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) return res.json({ items: [] });
    res.json(cart);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

export default router;