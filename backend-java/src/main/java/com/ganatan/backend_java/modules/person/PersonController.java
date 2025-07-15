package com.ganatan.backend_java.modules.person;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.ganatan.backend_java.modules.person.AlreadyExistsException;
import com.ganatan.backend_java.modules.person.NotFoundException;

import java.util.List;

@RestController
@RequestMapping("/persons")
public class PersonController {

    private final PersonService service;

    public PersonController(PersonService service) {
        this.service = service;
    }

    @GetMapping
    public List<Person> getAll() {
        return service.getItems();
    }

    @GetMapping("/{id}")
    public Person getById(@PathVariable Long id) {
        return service.getItemById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Person create(@RequestBody Person person) {
        return service.createItem(person);
    }

    @PutMapping("/{id}")
    public Person update(@PathVariable Long id, @RequestBody Person person) {
        return service.updateItem(id, person);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteItem(id);
    }
}
