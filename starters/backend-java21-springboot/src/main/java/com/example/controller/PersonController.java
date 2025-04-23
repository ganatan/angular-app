package com.example.controller;

import com.example.model.Person;
import com.example.model.Response;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PersonController {

    @GetMapping("/persons")
    public Response<List<Person>> getAllPersons() {
        System.out.println("00000000001:PersonController");

        List<Person> persons = List.of(
            new Person(1, "Christopher Nolan"),
            new Person(2, "Quentin Tarantino"),
            new Person(3, "Steven Spielberg"),
            new Person(4, "Martin Scorsese"),
            new Person(5, "James Cameron"),
            new Person(6, "Ridley Scott"),
            new Person(7, "Denis Villeneuve")
        );

        return new Response<>(true, persons);
    }
}



//package com.example.controller;
//
//import com.example.model.Person;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//public class PersonController {
//
//    @GetMapping("/persons")
//    public List<Person> getAllPersons() {
//    	System.out.println("00000000001:PersonController");
//        return List.of(
//            new Person("Christopher Nolan"),
//            new Person("Quentin Tarantino"),
//            new Person("Steven Spielberg"),
//            new Person("Martin Scorsese"),
//            new Person("Denis Villeneuve"),
//            new Person("James Cameron"),
//            new Person("Ridley Scott")
//        );
//    }
//}
