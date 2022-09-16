const express = require('express');

const router = express.Router();
const {
  addProduct,
  getProducts,
  deleteProduct,
  editProduct,
} = require('../controllers/product');

// router.post('/', addCategory, (req, res) => {
//   res.send('Category Added');
// });

router.post('/addProduct', addProduct);
router.get('/getProducts', getProducts, (req, res) => {
  res.redirect('/productMaster');
});

router.post('/editProduct/:id', editProduct, (req, res) => {
  res.redirect('/prodMaster');
});
router.get('/deleteProduct/:id', deleteProduct);
module.exports = router;
