package com.ganatan.modules.person;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class PersonTest {

    @Test
    void shouldCreatePersonAndReturnFields() {
        Person person = new Person(1L, "John", "Doe");

        assertEquals(1L, person.getId());
        assertEquals("John", person.getFirstName());
        assertEquals("Doe", person.getLastName());
    }
}
