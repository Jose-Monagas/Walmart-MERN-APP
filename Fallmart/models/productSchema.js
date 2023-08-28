const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
name:{type:String,required:true},
price:{type:Number,required:true},
image:{type:String,required:true},
manufacturer:{type:String,required:true},
department:{type:Schema.Types.ObjectId,ref:'department',required:true},
description:{type:String,required:true},
reviews:[{type:Schema.Types.ObjectId,ref:'review'}]
})

module.exports = productSchema