package com.ganatan.modules.person;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

@Path("/persons")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PersonController {

    private static final List<Person> persons = new ArrayList<>();

    static {
        persons.add(new Person(1L, "Steven", "Spielberg"));
        persons.add(new Person(2L, "Martin", "Scorsese"));
        persons.add(new Person(3L, "Quentin", "Tarantino"));
        persons.add(new Person(4L, "Christopher", "Nolan"));
        persons.add(new Person(5L, "James", "Cameron"));
        persons.add(new Person(6L, "Clint", "Eastwood"));
        persons.add(new Person(7L, "Ridley", "Scott"));
    }

    @GET
    public Response getItems() {
        return Response.ok(persons).build();
    }
}
