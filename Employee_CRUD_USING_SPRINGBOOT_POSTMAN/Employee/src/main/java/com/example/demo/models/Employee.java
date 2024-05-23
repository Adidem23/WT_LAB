package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Employee {
	
 @Id
 @GeneratedValue
 private long id;
 
 private int EmpId;
 private String EmpName;
 private int EmpAge;
 private String Job;
 
 
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public int getEmpId() {
	return EmpId;
}
public void setEmpId(int empId) {
	EmpId = empId;
}
public String getEmpName() {
	return EmpName;
}
public void setEmpName(String empName) {
	EmpName = empName;
}
public int getEmpAge() {
	return EmpAge;
}
public void setEmpAge(int empAge) {
	EmpAge = empAge;
}
public String getJob() {
	return Job;
}
public void setJob(String job) {
	Job = job;
}
 
 
}
