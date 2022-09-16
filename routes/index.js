const express = require('express');

const router = express.Router();

const Category = require('../models/categoryMaster');
const Product = require('../models/products');

// router.post('/addProduct', addProduct);
router.get('/catMaster', async (req, res) => {
  const categories = await Category.find({});
  const products = await Product.find({});
  res.render('categoryMaster', {
    categoryList: categories,
    productList: products,
  });
});
router.get('/prodMaster', async (req, res) => {
  const categories = await Category.find({});
  const products = await Product.find({});
  res.render('productMaster', {
    categoryList: categories,
    productList: products,
  });
});
router.get('/prodList', async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = (page - 1) * limit;
  const total = await Product.countDocuments();
  const totalPages = Math.ceil(total / limit);

  // get products
  const products = await Product.find({}).skip(skip).limit(limit);
  const categories = await Category.find({});

  res.render('productList', {
    productList: products,
    categoryList: categories,
    totalPages,
    limit,
  });
});

module.exports = router;
