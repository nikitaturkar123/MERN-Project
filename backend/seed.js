// import mongoose from "mongoose";

// const MONGO_URI = "mongodb://127.0.0.1:27017/mern-ecommerce";

// const productSchema = new mongoose.Schema({
//   title: String,
//   price: Number,
//   image: String,
//   description: String,
//   category: String,
// });

// const Product = mongoose.model("Product", productSchema, "products");

// mongoose.connect(MONGO_URI).then(async () => {
//   console.log("MongoDB connected");

//   await Product.deleteMany({});

//   await Product.insertMany([
//     {
//       title: "MacBook Air M2",
//       price: 999,
//       image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500",
//       description: "Apple MacBook Air with M2 chip",
//       category: "Laptops",
//     },
//     {
//       title: "iPhone 15 Pro",
//       price: 799,
//       image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500",
//       description: "Latest iPhone",
//       category: "Mobiles",
//     },
//     {
//       title: "iPad Pro 12.9",
//       price: 599,
//       image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
//       description: "Apple iPad Pro",
//       category: "Tablets",
//     },
//     {
//       title: "Dell XPS 13",
//       price: 899,
//       image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
//       description: "Dell Laptop",
//       category: "Laptops",
//     },
//   ]);

//   console.log("4 Products Added! Done");
//   process.exit();
// });



import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/mern-ecom";

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  description: String,
  category: String,
});

const Product = mongoose.model("Product", productSchema, "products");

mongoose.connect(MONGO_URI).then(async () => {
  console.log("Connected to mern-ecom");
  await Product.deleteMany({});
  await Product.insertMany([
    {
      title: "MacBook Air M2",
      price: 999,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500",
      description: "Apple MacBook Air",
      category: "Laptops",
    },
    {
      title: "iPhone 15 Pro",
      price: 799,
      image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500",
      description: "Latest iPhone",
      category: "Mobiles",
    },
    {
      title: "iPad Pro 12.9",
      price: 599,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
      description: "Apple iPad Pro",
      category: "Tablets",
    },
    {
      title: "Dell XPS 13",
      price: 899,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
      description: "Dell Laptop",
      category: "Laptops",
    },
  ]);
  console.log("4 Products Added to mern-ecom!");
  process.exit();
});