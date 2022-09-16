const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Category = require('./models/categoryMaster');
const Product = require('./models/products');

const catAddRoute = require('./routes/category');
const productRoute = require('./routes/product');
const indexRoutes = require('./routes/index');
// const paginateRoutes = require('./routes/paginatedProdList');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// Database
mongoose.connect('mongodb://localhost/NiMap', { useNewUrlParser: true });
mongoose.connection
  .once('open', function () {
    console.log('Database connected Successfully');
  })
  .on('error', function (err) {
    console.log('Error', err);
  });

// Set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', async (req, res) => {
  const categories = await Category.find({});
  const products = await Product.find({});

  // fetch the names of all categories using id from product

  res.render('index');
  // res.send('Hello World!');
});

app.use('/', indexRoutes);
app.use('/', catAddRoute);
app.use('/', productRoute);
// app.use('/', paginateRoutes);

// app.post('/edit', (req, res) => {
//   res.send('Edit Category');
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
