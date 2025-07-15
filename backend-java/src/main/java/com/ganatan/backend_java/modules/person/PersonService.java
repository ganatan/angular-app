package com.ganatan.backend_java.modules.person;

import org.springframework.stereotype.Service;

import com.ganatan.backend_java.modules.person.AlreadyExistsException;
import com.ganatan.backend_java.modules.person.NotFoundException;

import java.util.List;

@Service
public class PersonService {

    private final PersonRepositoryInterface repository;

    public PersonService(PersonRepositoryInterface repository) {
        this.repository = repository;
    }

    public List<Person> getItems() {
        return repository.findAll();
    }

    public Person getItemById(Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Person not found"));
    }

    public Person createItem(Person person) {
        if (repository.existsByName(person.getName())) {
            throw new AlreadyExistsException("Person already exists");
        }
        return repository.save(person);
    }

    public Person updateItem(Long id, Person person) {
        if (!repository.existsById(id)) {
            throw new NotFoundException("Person not found");
        }
        person.setId(id);
        return repository.save(person);
    }

    public void deleteItem(Long id) {
        if (!repository.existsById(id)) {
            throw new NotFoundException("Person not found");
        }
        repository.deleteById(id);
    }
}
