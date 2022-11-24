const express = require("express");

const EmployeeCtrl = require("../controllers/employee-ctrl");

const router = express.Router();

router.get("/employees", EmployeeCtrl.getEmployees);
router.get("/employees/:id", EmployeeCtrl.getEmployeeById);
router.post("/employees", EmployeeCtrl.createEmployee);
router.put("/employees/:id", EmployeeCtrl.updateEmployee);
router.delete("/employees/:id", EmployeeCtrl.deleteEmployee);

module.exports = router;
