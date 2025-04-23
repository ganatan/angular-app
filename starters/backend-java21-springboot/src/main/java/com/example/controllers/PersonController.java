package com.example.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class PersonController {

    record Person(int id, String name) {}

    @GetMapping("/persons")
    public Map<String, Object> getAllPersons() {
        List<Person> persons = List.of(
            new Person(1, "Christopher Nolan"),
            new Person(2, "Quentin Tarantino"),
            new Person(3, "Steven Spielberg"),
            new Person(4, "Martin Scorsese"),
            new Person(5, "James Cameron"),
            new Person(6, "Ridley Scott"),
            new Person(7, "Denis Villeneuve")
        );

        return Map.of(
            "success", true,
            "data", persons
        );
    }
}
