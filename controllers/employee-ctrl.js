const Employee = require("../models/employee-model");

createEmployee = (req, res) => {
  const body = req.body;
  console.log(body);
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an employee data!",
    });
  }

  const employee = new Employee(body);

  if (!employee) {
    return res.status(400).json({ success: false, error: err });
  }

  employee
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: employee._id,
        message: "Employee created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Employee couldn't be created!",
      });
    });
};

updateEmployee = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Employee.findOne({ _id: req.params.id }, (err, employee) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Employee not found!",
      });
    }
    employee.name = body.name;
    employee.time = body.time;
    employee.rating = body.rating;
    employee
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: employee._id,
          message: "Employee updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Employee not updated!",
        });
      });
  });
};

deleteEmployee = async (req, res) => {
  await Employee.findOneAndDelete({ _id: req.params.id }, (err, employee) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!employee) {
      return res
        .status(404)
        .json({ success: false, error: `Employee not found` });
    }

    return res.status(200).json({ success: true, data: employee });
  }).catch((err) => console.log(err));
};

getEmployeeById = async (req, res) => {
  await Employee.findOne({ _id: req.params.id }, (err, employee) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!employee) {
      return res
        .status(404)
        .json({ success: false, error: `Employee not found` });
    }
    return res.status(200).json({ success: true, data: employee });
  }).catch((err) => console.log(err));
};

getEmployees = async (req, res) => {
  await Employee.find({}, (err, employees) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!employees.length) {
      return res
        .status(404)
        .json({ success: false, error: `Employees cannot be found` });
    }
    return res.status(200).json({ success: true, data: employees });
  }).catch((err) => console.log(err));
};

module.exports = {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployees,
  getEmployeeById,
};
