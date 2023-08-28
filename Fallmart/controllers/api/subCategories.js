const SubCategory = require('../../models/subCategory')

module.exports = {
    getSubCategoriesByDepartment
}

async function getSubCategoriesByDepartment(req,res){
    try {
        const departmentId = req.params.departmentId;
        const subCategories = await SubCategory.find({department:departmentId}).exec();
        res.status(200).json(subCategories)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}