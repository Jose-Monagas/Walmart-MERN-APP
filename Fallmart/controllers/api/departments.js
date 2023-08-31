const Dept = require('../../models/department');

module.exports = {
	index,
	show
};
//shows list of all depts
async function index(req, res) {
	try {
		const depts = await Dept.find({})
			.sort('name')
			.populate('subcategories')
			.exec();
		depts.sort(
			(a, b) => a.subcategories[0].sortOrder - b.subcategories[0].sortOrder
		);
		res.status(200).json(depts);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}
//show a specifc dept
async function show(req, res) {
	try {
		const dept = await Dept.findById(req.params.id);
		res.status(200).json(dept);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}
