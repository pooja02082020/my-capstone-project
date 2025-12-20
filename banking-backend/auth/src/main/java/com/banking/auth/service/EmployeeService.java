package com.banking.auth.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.banking.auth.dto.CreateEmployeeRequest;
import com.banking.auth.dto.EmployeeResponse;
import com.banking.auth.dto.UpdateEmployeeRequest;
import com.banking.auth.model.Employee;
import com.banking.auth.model.Role;
import com.banking.auth.model.User;
import com.banking.auth.model.UserStatus;
import com.banking.auth.repo.EmployeeRepository;
import com.banking.auth.repo.UserRepository;

@Service
public class EmployeeService {
 
    private final EmployeeRepository employeeRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
 
    public EmployeeService(EmployeeRepository employeeRepository,
                           UserRepository userRepository,
                           PasswordEncoder passwordEncoder) {
        this.employeeRepository = employeeRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
 
    // ================= CREATE EMPLOYEE =================
    @Transactional
    public EmployeeResponse createEmployee(CreateEmployeeRequest request) {
 
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new IllegalArgumentException("Username already exists");
        }
 
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }
 
        // Create User
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.EMPLOYEE); // Employee role
        user.setStatus(UserStatus.ACTIVE);
 
        userRepository.save(user);
 
        // Create Employee
        Employee employee = new Employee();
        employee.setId(user.getId());
        employee.setDepartment(request.getDepartment());
        employee.setDesignation(request.getDesignation());
 
        employeeRepository.save(employee);
 
        return mapToResponse(employee);
    }
 
    // ================= LIST ALL EMPLOYEES =================
    public List<EmployeeResponse> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map(this::mapToResponse).collect(Collectors.toList());
    }
 
    // ================= UPDATE EMPLOYEE =================
    @Transactional
    public EmployeeResponse updateEmployee(Long id, UpdateEmployeeRequest request) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found"));
 
        User user = userRepository.findById(employee.getId())
                .orElseThrow(() -> new RuntimeException("User not found"));
 
        if (request.getUsername() != null && !request.getUsername().equals(user.getUsername())) {
            if (userRepository.existsByUsername(request.getUsername())) {
                throw new IllegalArgumentException("Username already exists");
            }
            user.setUsername(request.getUsername());
        }
 
        if (request.getEmail() != null && !request.getEmail().equals(user.getEmail())) {
            if (userRepository.existsByEmail(request.getEmail())) {
                throw new IllegalArgumentException("Email already exists");
            }
            user.setEmail(request.getEmail());
        }
 
        if (request.getPassword() != null) {
            user.setPassword(passwordEncoder.encode(request.getPassword()));
        }
 
        if (request.getDepartment() != null) {
            employee.setDepartment(request.getDepartment());
        }
 
        if (request.getDesignation() != null) {
            employee.setDesignation(request.getDesignation());
        }
 
        userRepository.save(user);
        employeeRepository.save(employee);
 
        return mapToResponse(employee);
    }
 
    // ================= DELETE EMPLOYEE =================
    @Transactional
    public void deleteEmployee(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found"));
        User user = userRepository.findById(employee.getId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        userRepository.deleteById(employee.getId()); // Deletes user first
        employeeRepository.delete(employee);
    }
 
    // ================= UTILITY METHOD =================
    private EmployeeResponse mapToResponse(Employee employee) {
        EmployeeResponse response = new EmployeeResponse();
        User user = userRepository.findById(employee.getId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        response.setId(employee.getId());
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());
        response.setDepartment(employee.getDepartment());
        response.setDesignation(employee.getDesignation());
        response.setRole(user.getRole());
        response.setStatus(user.getStatus());
        return response;
    }
    
}
