package com.ganatan.backend_java.modules.person;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Repository;

import jakarta.annotation.PostConstruct;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
@ConditionalOnProperty(name = "db.client", havingValue = "mock")
public class PersonRepositoryMock implements PersonRepositoryInterface {

    private List<Person> persons = new ArrayList<>();

    @PostConstruct
    public void loadData() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            persons = mapper.readValue(
                new ClassPathResource("data/mock/persons.json").getInputStream(),
                new TypeReference<>() {}
            );
            System.out.println("[GANATAN MOCK] Chargé : " + persons.size() + " personnes.");
        } catch (IOException e) {
            System.err.println("[GANATAN MOCK] Erreur JSON : " + e.getMessage());
            persons.clear();
        }
    }

    @Override
    public List<Person> findAll() {
        return persons;
    }

    @Override
    public Optional<Person> findById(Long id) {
        return persons.stream()
                      .filter(person -> person.getId().equals(id))
                      .findFirst();
    }

    @Override
    public Person save(Person person) {
        deleteById(person.getId());
        persons.add(person);
        return person;
    }

    @Override
    public void deleteById(Long id) {
        persons.removeIf(person -> person.getId().equals(id));
    }

    @Override
    public boolean existsById(Long id) {
        return persons.stream().anyMatch(person -> person.getId().equals(id));
    }

    @Override
    public boolean existsByName(String name) {
        return persons.stream().anyMatch(person -> person.getName().equalsIgnoreCase(name));
    }
}
