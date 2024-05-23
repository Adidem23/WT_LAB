package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Employee;
import com.example.demo.repository.EmployeeRepository;

@RestController
@CrossOrigin("")
public class EmployeeController {
	
	@Autowired
	EmployeeRepository EmpRepo;
	
	@GetMapping("/")
	public String ReturnGreeting() {
		return "Welcome to Employee";
	}
	
	@PostMapping("/addEmployee")
	Employee AddEmployee(@RequestBody Employee NewEmp) {
	return EmpRepo.save(NewEmp);
	}
	
	@GetMapping("/getAll")
	List<Employee> ListAllUsers(){
		return EmpRepo.findAll();
	}
	
	
	
	

}
