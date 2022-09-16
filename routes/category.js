const express = require('express');

const router = express.Router();
const {
  addCategory,
  getCategories,
  deleteCategory,
  editCategory,
} = require('../controllers/category');

// router.post('/', addCategory, (req, res) => {
//   res.send('Category Added');
// });

router.post('/addCategory', addCategory);
router.get('/getCategories', getCategories, (req, res) => {
  res.render('categoryMaster');
});

router.post('/edit/:id', editCategory, (req, res) => {
  res.redirect('/catMaster');
});
router.get('/delete/:id', deleteCategory);
module.exports = router;
