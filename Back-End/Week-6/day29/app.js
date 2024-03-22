const mongoose = require("mongoose");
const Product = require("./models/products.model");
const url = "mongodb://localhost:27017/db-product-management-II";

//! Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log(" 🟢🟢🟢 Connect database");
  } catch (error) {
    console.log(" 🚀🚀🚀 Error connecting : ", error.message);
  }
};
//

const main = async () => {
  await connectDB();
  try {
    await insertProduct();
    // await sortProducts();
    // await paginationProduct(2, 3);
    // await aggregationCountProduct();
    // await aggregationAveragePrice();
    // await sortProductsByName();
    // await groupProductsByCategory();
    // await updatePriceByName("Laptop", 1500);
    // await softDelete();
  } catch (error) {
    console.log("errooooooooor ", error);
  }
};
const products = [
  {
    name: "Laptop",
    price: 1200,
    description: "High-performance laptop with powerful specs.",
    inStock: true,
    isDeleted: true,
  },
  {
    name: "Smartphone",
    price: 800,
    description: "Latest smartphone with advanced features.",
    inStock: true,
  },
  {
    name: "Headphones",
    price: 150,
    description: "Over-ear headphones with noise-cancelling technology.",
    inStock: true,
  },
  {
    name: "Smartwatch",
    price: 250,
    description: "Fitness tracker and smartwatch with health monitoring.",
    inStock: false,
  },
  {
    name: "Camera",
    price: 600,
    description: "Digital camera with high-resolution imaging.",
    inStock: true,
  },
  {
    name: "Gaming Console",
    price: 400,
    description: "Next-gen gaming console for immersive gaming experiences.",
    inStock: true,
  },
  {
    name: "Bluetooth Speaker",
    price: 80,
    description: "Portable Bluetooth speaker with crisp sound.",
    inStock: true,
  },
  {
    name: "Tablet",
    price: 300,
    description: "Slim and lightweight tablet for on-the-go productivity.",
    inStock: true,
  },
  {
    name: "Coffee Maker",
    price: 50,
    description: "Automatic coffee maker for brewing your favorite coffee.",
    inStock: true,
  },
  {
    name: "Fitness Tracker",
    price: 100,
    description: "Wearable fitness tracker with heart rate monitoring.",
    inStock: false,
  },
  {
    name: "External Hard Drive",
    price: 120,
    description: "Large-capacity external hard drive for data storage.",
    inStock: true,
  },
  {
    name: "Wireless Mouse",
    price: 30,
    description: "Ergonomic wireless mouse for comfortable computing.",
    inStock: true,
  },
  {
    name: "Portable Charger",
    price: 20,
    description: "Compact portable charger for on-the-go device charging.",
    inStock: true,
  },
  {
    name: "Smart Bulbs",
    price: 15,
    description: "Set of smart bulbs for customizable lighting at home.",
    inStock: true,
  },
  {
    name: "Backpack",
    price: 40,
    description: "Durable backpack with multiple compartments for storage.",
    inStock: true,
  },
  {
    name: "Wireless Earbuds",
    price: 120,
    description: "True wireless earbuds for immersive audio experiences.",
    inStock: false,
  },
  {
    name: "Graphic Tablet",
    price: 200,
    description: "Digital graphic tablet for artists and designers.",
    inStock: true,
  },
  {
    name: "Desk Chair",
    price: 150,
    description: "Comfortable desk chair with adjustable features.",
    inStock: true,
  },
  {
    name: "Air Purifier",
    price: 80,
    description: "HEPA air purifier for cleaner and fresher indoor air.",
    inStock: true,
  },
  {
    name: "Electric Toothbrush",
    price: 40,
    description: "Electric toothbrush for effective dental care.",
    inStock: true,
  },
];

//! */ Insert Sample Products:
const insertProduct = async () => {
  //Add this array of sample products to your database
  try {
    const insertedProducts = await Product.insertMany(products);
    console.log(
      " 🟢🟢🟢 ~ insertProduct ~ products inserted",
      insertedProducts
    );
  } catch (error) {
    console.log(" 🚀🚀🚀 ~ insertProduct ~ error:", error);
  }
};

//! * Sort Products by Price:
const sortProducts = async () => {
  try {
    const findProductByPrice = await Product.find().sort({ price: 1 });
    console.log(" 🟢🟢🟢 ~ findProductByPrice:", findProductByPrice);
  } catch (error) {
    console.log(" 🚀🚀🚀 ~ error:", error);
  }
};

//! * Pagination Products: Limiting Results / Custom with Variables
const paginationProduct = async (pageSize, pageNumber) => {
  // const pageSize = 5;
  try {
    const paginatedProduct = await Product.find()
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
    console.log(" 🟢🟢🟢 ~ paginatedProduct:", paginatedProduct);
  } catch (error) {
    console.log("🚀 ~ paginationProduct ~ error:", error);
  }
};

//! * Aggregation - Count Products in Stock:
const aggregationCountProduct = async () => {
  try {
    const aggregatedProduct = await Product.aggregate([
      {
        $match: { inStock: true },
      },
      {
        $group: {
          _id: null,
          count: { $sum: 1 },
        },
      },
    ]);
    console.log(
      " 🟢🟢🟢 ~ aggregationProduct ~ aggregatedProduct:",
      aggregatedProduct[0].count
    );
  } catch (error) {
    console.log(" 🚀🚀🚀 ~ aggregationProduct ~ error:", error.message);
  }
};

//! * Aggregation - Average Price:
const aggregationAveragePrice = async () => {
  try {
    const averagePrice = await Product.aggregate([
      {
        $group: {
          _id: null,
          price: {
            $avg: "$price",
          },
        },
      },
    ]);
    console.log(
      "🟢🟢🟢 ~ aggregationAveragePrice ~ Average price of all products:",
      averagePrice[0].price
    );
  } catch (error) {
    console.log("🚀🚀🚀 ~ aggregationAveragePrice ~ error:", error.message);
  }
};

//! * Sort Products by Name:
const sortProductsByName = async () => {
  try {
    const sortedByName = await Product.find().sort({ name: 1 });
    console.log(" 🟢🟢🟢 ~ sortedByName:", sortedByName);
  } catch (error) {
    console.log("🚀🚀🚀 ~ sortProductsByName ~ error:", error);
  }
};

//! * Update Product by Name:
const updatePriceByName = async (name, price) => {
  try {
    const updatedPrice = await Product.updateOne(
      { name: name },
      { $set: { price: price } }
    );
    console.log(" 🟢🟢🟢 ~ updatedPrice:", updatedPrice);
  } catch (error) {
    console.log(" 🚀🚀🚀 ~ updatePriceByName ~ error:", error);
  }
};

//! * Soft Delete Products:
const softDelete = async () => {
  try {
    const deletedProduct = await Product.deleteMany({ isDeleted: true });
    if (deletedProduct) {
      console.log(" 🟢🟢🟢 ~ deletedProduct ~ deleted : ", deletedProduct);
    } else {
      console.log(" 🚀🚀🚀 ~ product not found :");
    }
  } catch (error) {
    console.log("🚀🚀🚀 ~ softDelete ~ error:", error.message);
  }
};
main();
