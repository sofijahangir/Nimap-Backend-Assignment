// Product Master Controller
const Product = require('../models/products');

const addProduct = async (req, res) => {
  const { prodName, prodDesc, prodPrice, prodQuantity, prodCat } = req.body;

  // console.log('Hello Oroduct');

  const product = new Product({
    prodName,
    prodDesc,
    prodPrice,
    prodCat,
    prodQuantity,
  });

  try {
    await product.save();
    res.status(201).redirect('/prodMaster');
  } catch (error) {
    res.status(400).send(error);
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.render('productMaster', { productList: products });
  } catch (error) {
    res.status(500).send(error);
  }
};

const editProduct = async (req, res) => {
  const updates = Object.keys(req.body);
  // If some fields are empty, then don't update them

  const allowedUpdates = ['prodName', 'prodDesc', 'prodPrice', 'prodCat'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update),
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const product = await Product.findById(req.params.id);

    updates.forEach((update) => (product[update] = req.body[update]));
    await product.save();
    if (!product) {
      return res.status(404).redirect('/prodMaster');
    }
    res.direct('/');
  } catch (error) {
    res.status(400).send(error);
  }
};

deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      res.status(404).send();
    }
    res.redirect('/prodMaster');
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { addProduct, getProducts, deleteProduct, editProduct };
