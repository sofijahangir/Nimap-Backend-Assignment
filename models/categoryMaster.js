const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  catName: {
    type: String,
    required: true,
  },
  catDesc: {
    type: String,
    // required: true,
  },


  // ref: 'Product',

  
});
module.exports = mongoose.model('Cat', categorySchema);
