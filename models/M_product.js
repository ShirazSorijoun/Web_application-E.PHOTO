const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    image: {
      type: String,
      require: "Image is required",
    },
    brand: {
      type: String,
      required: "Brand is required",
    },
    category: {
      type: String,
      required: "Category is required",
    },
    price: {
      type: Number,
      required: "Price is required",
    },
    countInStock: {
      type: Number,
      required: "CountInStock is required",
      min: [0, "Only greater than 0"],
    },
    rating: {
      type: Number,
      required: "Rating is required",
    },
    numReviews: {
      type: Number,
      required: "Number of Review is required",
    },
    description: {
      type: String,
      required: "Description is required",
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
