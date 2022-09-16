const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const productSchema = new mongoose.Schema({
  prodName: {
    type: String,
    required: true,
  },
  prodDesc: {
    type: String,
    // required: true,
  },
  prodPrice: {
    type: Number,
    // required: true,
  },
  prodQuantity: {
    type: Number,
    // required: true,
  },
  prodCat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cat',
  },
});

productSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Product', productSchema);
