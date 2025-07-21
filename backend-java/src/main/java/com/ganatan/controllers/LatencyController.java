package com.ganatan.controllers;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/latency")
@Produces(MediaType.APPLICATION_JSON)
public class LatencyController {

    @GET
    @Path("/{delay}")
    public Response simulateLatency(@PathParam("delay") int delayMs) {
        try {
            Thread.sleep(delayMs);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return Response.serverError()
                    .entity("{\"status\":\"error\",\"message\":\"Interrupted during sleep.\"}")
                    .build();
        }

        String json = String.format("{\"status\":\"ok\",\"latency_ms\":%d}", delayMs);
        return Response.ok(json).build();
    }
}
