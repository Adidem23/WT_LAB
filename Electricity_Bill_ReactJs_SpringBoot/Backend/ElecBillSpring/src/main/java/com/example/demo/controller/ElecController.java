package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.ElecServiceClass;

@RestController
@CrossOrigin("http://localhost:3000")
public class ElecController {
	
	@GetMapping("/home")
	public String getString() {
		return "Hello Here using SpringBoot!!";
	}
	
	@GetMapping("/bill/{units}")
	public int CalculateBill(@PathVariable int units) {
		ElecServiceClass Es = new ElecServiceClass();
		int bill=Es.calculate(units);
		return bill;
	}
	
}
