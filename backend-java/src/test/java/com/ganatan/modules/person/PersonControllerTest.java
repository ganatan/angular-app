package com.ganatan.modules.person;

import org.junit.jupiter.api.Test;
import jakarta.ws.rs.core.Response;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

public class PersonControllerTest {

    @Test
    public void testGetAllPersons() {
        PersonController controller = new PersonController();
        Response response = controller.getItems();

        assertEquals(200, response.getStatus());
        List<?> persons = (List<?>) response.getEntity();
        assertNotNull(persons);
        assertEquals(7, persons.size());
    }
}
