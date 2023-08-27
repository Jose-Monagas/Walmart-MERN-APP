const Product = require('../../models/product');

module.exports = {
  index,
  show
};

async function index(req, res) {
  try{
    const products = await Product.find({}).sort('name').populate('department').exec();
    // re-sort based upon the sortOrder of the categories
    products.sort((a, b) => a.department.sortOrder - b.department.sortOrder);
    res.status(200).json(products);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const product = await Product.findById(req.params.id).populate('department').exec();
    res.status(200).json(product);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}