package com.lab.student;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

    @Autowired
    private Studentrepo studentRepo;

    @PostMapping("/add")
    public ResponseEntity<Student> add(@RequestBody Student student) {
        Student savedStudent = studentRepo.save(student);
        return ResponseEntity.ok(savedStudent);
    }
    
   
    @GetMapping("/get/{id}")
    public ResponseEntity<Student> get(@PathVariable Long id) {
        Student student = studentRepo.findById(id).orElse(null);
        if (student != null) {
            return ResponseEntity.ok(student);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
    }

