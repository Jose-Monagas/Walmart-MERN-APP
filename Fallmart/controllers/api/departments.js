const Dept = require('../../models/department');

module.exports = {
	index
	//show
};
//shows list of all depts
async function index(req, res) {
	try {
		const departments = await Dept.find({}).populate('subcategories').sort('name').exec();
		const departmentData = departments.map((department) => ({
			_id: department._id,
			name: department.name,
			subcategories: department.subcategories
		}));
		res.status(200).json(departmentData);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}
//show a specifc dept
// async function show(req, res) {
// 	try {
// 		const dept = await Dept.findById(req.params.id);
// 		res.status(200).json(dept);
// 	} catch (e) {
// 		res.status(400).json({ msg: e.message });
// 	}
// }
