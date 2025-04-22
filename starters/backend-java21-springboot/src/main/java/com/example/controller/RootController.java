//package com.example.controller;
//
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.Map;
//
//@RestController
//public class PersonController {
//
//    @GetMapping("/persons")
//    public Map<String, Object> getAppInfo() {
//        System.out.println("00000000001:PersonController");
//
//        return Map.of(
//            "success", true,
//            "data", Map.of(
//                "version", "1.0.0",
//                "status", "ok",
//                "app", "backend-java21-springboot"
//            )
//        );
//    }
//}
//


package com.example.controller;

import com.example.model.Person;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;


@RestController
public class RootController {

    @GetMapping("/")
    
  public Map<String, Object> getAppInfo() {
  System.out.println("00000000001:PersonController");
	  return Map.of(
	      "success", true,
	      "data", Map.of(
	          "version", "1.0.0",
	          "status", "ok",
	          "app", "backend-java21-springboot"
	      )
	  );
	}

    
//    public List<Person> getAllPersons() {
//    	System.out.println("00000000001:PersonController");
//        return List.of(
//            new Person("Christopher Nolan Continent"),
//            new Person("Quentin Tarantino"),
//            new Person("Steven Spielberg"),
//            new Person("Martin Scorsese"),
//            new Person("Denis Villeneuve"),
//            new Person("James Cameron"),
//            new Person("Ridley Scott")
//        );
//    }
}
