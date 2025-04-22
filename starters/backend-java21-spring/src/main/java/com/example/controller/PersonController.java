package com.example.controller;

import com.example.model.Person;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class PersonController {

    @GetMapping("/")
    @ResponseBody
    public List<Person> getPersons() {
        return List.of(
            new Person("Christopher Nolan"),
            new Person("Quentin Tarantino"),
            new Person("Steven Spielberg"),
            new Person("Martin Scorsese"),
            new Person("Denis Villeneuve"),
            new Person("James Cameron"),
            new Person("Ridley Scott")
        );
    }
}
