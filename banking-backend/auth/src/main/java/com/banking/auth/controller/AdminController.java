package com.banking.auth.controller;

import org.springframework.web.bind.annotation.*;

import com.banking.auth.dto.CreateEmployeeRequest;
import com.banking.auth.dto.UpdateEmployeeRequest;
import com.banking.auth.service.EmployeeService;

@RestController
@RequestMapping("/admin/employees")
public class AdminController {

	private final EmployeeService employeeService;

	public AdminController(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}

	@PostMapping
	public void createEmployee(@RequestBody CreateEmployeeRequest request) {
		employeeService.createEmployee(request);
	}

	@GetMapping
	public void getAllEmployees() {
		employeeService.getAllEmployees();
	}

	@PutMapping("/{id}")
	public void updateEmployee(@PathVariable Long id, @RequestBody UpdateEmployeeRequest request) {
		employeeService.updateEmployee(id, request);
	}

	@DeleteMapping("/{id}")
	public void deleteEmployee(@PathVariable Long id) {
		employeeService.deleteEmployee(id);
		// System.out.println("Employee deleted successfully");
	}
}
