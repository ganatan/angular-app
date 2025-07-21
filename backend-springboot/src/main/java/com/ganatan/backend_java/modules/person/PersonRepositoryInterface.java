package com.ganatan.backend_java.modules.person;

import java.util.List;
import java.util.Optional;

public interface PersonRepositoryInterface {

    List<Person> findAll();

    Optional<Person> findById(Long id);

    Person save(Person person);

    void deleteById(Long id);

    boolean existsById(Long id);

    boolean existsByName(String name);

    default void logRepositoryUsed() {
        System.out.println("[ganatan] Repository actif : " + getClass().getSimpleName());
    }
}

