package com.ganatan.controllers;

import jakarta.ws.rs.core.Response;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class LatencyControllerTest {

	@Test
	void simulateLatency_shouldReturnOk() {
		LatencyController controller = new LatencyController();
		int delayMs = 300;

		Response response = controller.simulateLatency(delayMs);

		assertEquals(200, response.getStatus());
		String body = response.getEntity().toString();
		assertTrue(body.contains("\"status\":\"ok\""));
		assertTrue(body.contains("\"latency_ms\":" + delayMs));
	}

	@Test
	void simulateLatency_withZeroDelay_shouldReturnImmediately() {
		LatencyController controller = new LatencyController();
		int delayMs = 0;

		Response response = controller.simulateLatency(delayMs);

		assertEquals(200, response.getStatus());
		String body = response.getEntity().toString();
		assertTrue(body.contains("\"status\":\"ok\""));
		assertTrue(body.contains("\"latency_ms\":0"));
	}

	@Test
	void simulateLatency_shouldHandleInterruptedException() {
		LatencyController controller = new LatencyController();

		Thread.currentThread().interrupt(); // force l'interruption

		Response response = controller.simulateLatency(100);

		assertEquals(500, response.getStatus());
		String body = response.getEntity().toString();
		assertTrue(body.contains("\"status\":\"error\""));
		assertTrue(body.contains("Interrupted during sleep."));

		Thread.interrupted(); // réinitialise l'état du thread après le test
	}

}

//package com.ganatan.controllers;
//
//import jakarta.ws.rs.core.Response;
//import org.junit.jupiter.api.Test;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//class LatencyControllerTest {
//
//    @Test
//    void simulateLatency_shouldReturnOkStatus() {
//        LatencyController controller = new LatencyController();
//
//        int delayMs = 500; // 500 ms
//        Response response = controller.simulateLatency(delayMs);
//
//        assertEquals(200, response.getStatus());
//        String entity = response.getEntity().toString();
//        assertTrue(entity.contains("\"status\":\"ok\""));
//        assertTrue(entity.contains("\"latency_ms\":" + delayMs));
//    }
//}
