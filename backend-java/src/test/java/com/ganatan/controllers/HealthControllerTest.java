package com.ganatan.controllers;

import org.junit.jupiter.api.Test;
import jakarta.ws.rs.core.Response;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

public class HealthControllerTest {

    @Test
    public void testGetStatus() {
        HealthController controller = new HealthController();
        Response response = controller.getStatus();

        assertEquals(200, response.getStatus());

        Map<?, ?> json = (Map<?, ?>) response.getEntity();

        assertTrue(json.containsKey("status"));
        assertEquals("ok", json.get("status"));
    }
}
