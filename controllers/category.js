// Category Controller

const Category = require('../models/categoryMaster');

const addCategory = async (req, res) => {
  const { catName } = req.body;

  const category = new Category({
    catName,
  });

  try {
    await category.save();
    const categories = await Category.find({});
    // console.log(categories);
    // res.render('categoryMaster', { categoryList: categories });
    // res.status(201).render('categoryMaster', { categoryList: categories });
    res.redirect('/catMaster');

    // res.status(201).send(category);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    // console.log(categories);
    res.render('categoryMaster', { categoryList: categories });
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete category
const deleteCategory = async (req, res) => {
  const catId = req.params.id;
  await Category.findByIdAndDelete(catId);
  const categories = await Category.find({});
  // console.log(categories);
  res.render('categoryMaster', { categoryList: categories });
  // res.redirect('/');
};

const editCategory = async (req, res) => {
  const catId = req.params.id;
  const { catName } = req.body;

  await Category.findByIdAndUpdate(catId, { catName });

  // await Category.findByIdAndUpdate(catId);
  // const categories = await Category.find({});
  // console.log(categories);
  // res.render('categoryMaster', { categoryList: categories });
  res.redirect('/catMaster');
};

module.exports = { addCategory, getCategories, deleteCategory, editCategory };
