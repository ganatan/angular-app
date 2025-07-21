package com.ganatan.controllers;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.io.IOException;
import java.io.InputStream;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Properties;

@Path("/")
@Produces(MediaType.APPLICATION_JSON)
public class RootController {

	private static final String VERSION;

	static {
		Properties properties = new Properties();
		try (InputStream input = RootController.class.getClassLoader().getResourceAsStream("application.properties")) {
			if (input != null) {
				properties.load(input);
			}
		} catch (IOException e) {
			// Fail silently or handle error as needed
		}
		VERSION = properties.getProperty("app.version", "unknown");
	}

	@GET
	public Response getStatus() {
		Map<String, Object> response = new LinkedHashMap<>();
		Map<String, Object> data = new LinkedHashMap<>();

		response.put("success", true);

		data.put("version", VERSION);
		data.put("status", "ok");
		data.put("app", "backend-java");
		data.put("env", "development");
		data.put("dbClient", "mock");

		response.put("data", data);

		return Response.ok(response).build();
	}
}

//package com.ganatan.controllers;
//
//import jakarta.ws.rs.GET;
//import jakarta.ws.rs.Path;
//import jakarta.ws.rs.Produces;
//import jakarta.ws.rs.core.MediaType;
//import jakarta.ws.rs.core.Response;
//import java.util.LinkedHashMap;
//import java.util.Map;
//
//@Path("/")
//@Produces(MediaType.APPLICATION_JSON)
//public class RootController {
//
//	@GET
//	public Response getStatus() {
//		Map<String, Object> response = new LinkedHashMap<>();
//		Map<String, Object> data = new LinkedHashMap<>();
//
//		response.put("success", true);
//
//		data.put("version", "1.1.1");
//		data.put("status", "ok");
//		data.put("app", "backend-java");
//		data.put("env", "development");
//		data.put("dbClient", "mock");
//		response.put("data", data);
//
//		return Response.ok(response).build();
//	}
//}
