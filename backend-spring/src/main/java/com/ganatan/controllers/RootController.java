package com.ganatan.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.InputStream;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Properties;

@RestController
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

	@GetMapping("/")
	public Map<String, Object> getStatus() {
		Map<String, Object> response = new LinkedHashMap<>();
		response.put("success", true);

		Map<String, Object> data = new LinkedHashMap<>();
		data.put("version", VERSION);
		data.put("status", "ok");
		data.put("app", "backend-spring");
		data.put("env", "development");
		data.put("dbClient", "mock");

		response.put("data", data);

		return response;
	}
}