package com.ganatan.controllers;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.LinkedHashMap;
import java.util.Map;

@Path("/health")
@Produces(MediaType.APPLICATION_JSON)
public class HealthController {

	@GET
	public Response getStatus() {
		Map<String, Object> response = new LinkedHashMap<>();

		response.put("status", "ok");

		return Response.ok(response).build();
	}
}
