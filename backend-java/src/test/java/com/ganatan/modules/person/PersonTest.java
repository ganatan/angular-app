package com.ganatan.modules.person;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class PersonTest {

    @Test
    public void testPersonCreation() {
        Person person = new Person(1L, "Steven", "Spielberg");

        assertEquals(1L, person.getId());
        assertEquals("Steven", person.getFirstName());
        assertEquals("Spielberg", person.getLastName());
    }
}
