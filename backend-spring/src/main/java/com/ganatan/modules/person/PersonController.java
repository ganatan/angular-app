package com.ganatan.modules.person;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PersonController {

	@GetMapping("/persons")
	public List<Person> getItems() {
		return List.of(new Person(1L, "Steven", "Spielberg"), new Person(2L, "Martin", "Scorsese"),
				new Person(3L, "Quentin", "Tarantino"), new Person(4L, "Christopher", "Nolan"),
				new Person(5L, "James", "Cameron"), new Person(6L, "Clint", "Eastwood"),
				new Person(7L, "Ridley", "Scott"));
	}
}
