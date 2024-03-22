const express = require("express");

const app = express();
const port = 8000;
app.use(express.json());

let products = [
  { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
  { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
  { id: 3, name: "Sony PlayStation 5", price: 499.99 },
  { id: 4, name: "MacBook Pro 16", price: 2399.99 },
  { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
];
app.use((req, res, next) => {
  console.log(
    `Date = [${new Date().toISOString()}] 
        Method = ${req.method}, 
        URL = ${req.url}`
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, this is GET request ");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/search", (req, res) => {
  const { q, minPrice, maxPrice } = req.query;
  let filterProduct = products;
  if (q) {
    filterProduct = filterProduct.filter((product) =>
      product.name.toLowerCase().includes(q.toLowerCase())
    );
  }
  if (minPrice) {
    filterProduct = filterProduct.filter(
      (product) => product.price >= parseFloat(minPrice)
    );
  }
  if (maxPrice) {
    filterProduct = filterProduct.filter(
      (product) => product.price <= parseFloat(maxPrice)
    );
  }
  res.json(filterProduct);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === parseInt(id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
});

app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: "Polo wins",
    price: 890,
  };
  products.push(newProduct);
  res.json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    return res.status(404).send("Product not found !!!");
  }
  const updateProduct = {
    id: products[index].id,
    name: req.body.name,
    price: req.body.price,
  };
  products[index] = updateProduct;
  res.json(updateProduct);
});

app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    res.status(404).send("Product not found !!");
  }
  products.splice(index, 1);
  res.json("Product deleted !!");
});

// app.get("/error-test", (req, res, next) => {
//   throw new error("Test error");
// });

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
  next();
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
