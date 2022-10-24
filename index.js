const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const categories = require("./data/Categories.json");
const categoryDetails = require("./data/CategoryDetails.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Coding Corner API running");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
// app.get("/categoryDetails", (req, res) => {
//   res.send(categoryDetails);
// });
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const categoryFullDetails = categoryDetails.filter(
    (n) => n.category_id === id
  );
  res.send(categoryFullDetails);
});
// app.get("/categoryDetails/:id", (req, res) => {
//   const id = req.params.id;
//   const selected_categoryDetails = categoryDetails.find((n) => n._id === id);
//   res.send(selected_categoryDetails);
// });

app.listen(port, () => {
  console.log(`Coding Corner server running on port ${port}`);
});
