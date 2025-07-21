package com.ganatan.controllers;

import org.junit.jupiter.api.Test;

import jakarta.ws.rs.core.Response;
import java.util.Map;
import static org.junit.jupiter.api.Assertions.*;

public class RootControllerTest {

    @Test
    public void testGetStatus() {
        RootController controller = new RootController();
        Response response = controller.getStatus();

        assertEquals(200, response.getStatus());
        Map<?, ?> json = (Map<?, ?>) response.getEntity();
        assertTrue(json.containsKey("success"));
        assertTrue(json.containsKey("data"));
    }
}
