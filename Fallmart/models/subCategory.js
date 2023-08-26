const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subcategory = new Schema({
name:{type:String,required:true},
products:[{type:Schema.Types.ObjectId,ref:"product"}]
})


module.exports = mongoose.model("subcategory",subCategorySchema)