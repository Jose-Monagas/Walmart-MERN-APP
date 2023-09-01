const Dept = require('../../models/department');

module.exports = {
	index
	//show
};
//shows list of all depts
async function index(req, res) {
	try {
		const departments = await Dept.find({}).sort('name').exec();
		const departmentNames = departments.map((department) => department.name);
		res.status(200).json(departmentNames);
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
