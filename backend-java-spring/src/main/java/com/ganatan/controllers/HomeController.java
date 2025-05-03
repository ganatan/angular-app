package com.ganatan.controllers;

import com.ganatan.models.Person;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/")
public class HomeController {
    @GetMapping
    public List<Person> getPersons() {
        return List.of(
            new Person(1, "Christopher Nolan", "London"),
            new Person(2, "Quentin Tarantino", "Knoxville"),
            new Person(3, "Martin Scorsese", "New York"),
            new Person(4, "Steven Spielberg", "Cincinnati")
        );
    }
}
