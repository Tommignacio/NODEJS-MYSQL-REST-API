import { pool } from "../db.js";

//GET ALL
export const getEmployees = async (req, res) => {
	try {
		//select table sql
		const [rows] = await pool.query("SELECT * FROM employee");
		res.json(rows);
	} catch (error) {
		return res.status(500).json({ message: "something goes wrong" });
	}
};

//GET ONE
export const getEmployee = async (req, res) => {
	try {
		// const id = req.params.id;
		const [rows] = await pool.query("SELECT * FROM employee WHERE id=?", [
			req.params.id,
		]);
		if (rows.length <= 0)
			return res.status(404).json({
				message: "Employee not found",
			});
		res.json(rows[0]);
	} catch (error) {
		return res.status(500).json({ message: "something goes wrong" });
	}
};

//CREATE
export const createEmployees = async (req, res) => {
	const { name, salary } = req.body;
	try {
		//INSERT values SQL
		const [rows] = await pool.query(
			"INSERT INTO employee(name,salary) VALUES (?,?)",
			[name, salary] //name 1 ?, salary 2 ?
		);
		res.send({
			id: rows.insertId,
			name,
			salary,
		});
	} catch (error) {
		return res.status(500).json({ message: "something goes wrong" });
	}
};

//DELETE
export const deleteEmployees = async (req, res) => {
	try {
		const [result] = await pool.query("DELETE FROM employee WHERE id=?", [
			req.params.id,
		]);
		console.log(result);
		if (result.affectedRows <= 0)
			return res.status(400).json({ message: "employee not found" });

		res.sendStatus(204);
	} catch (error) {
		return res.status(500).json({ message: "something goes wrong" });
	}
};

//UPDATE
export const updateEmployees = async (req, res) => {
	const { id } = req.params;
	const { name, salary } = req.body;
	try {
		const [result] = await pool.query(
			"UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id=?",
			[name, salary, id]
		);

		if (result.affectedRows === 0)
			return res.status(404).json({ message: "employee not found" });
		//GET to call the modified object
		const [rows] = await pool.query("SELECT * FROM employee WHERE id=?", [id]);

		res.send(rows[0]);
	} catch (error) {
		return res.status(500).json({ message: "something goes wrong" });
	}
};
