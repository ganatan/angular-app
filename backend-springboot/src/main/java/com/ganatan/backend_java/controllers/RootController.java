package com.ganatan.backend_java.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class RootController {

	@Value("${app.version}")
	private String version;

	@Value("${app.name}")
	private String name;

	@Value("${db.client}")
	private String dbClient;

	@GetMapping("/")
	public Map<String, Object> index() {
		Map<String, Object> data = new LinkedHashMap<>();
		data.put("version", version);
		data.put("status", "ok");
		data.put("app", name);
		data.put("dbClient", dbClient);

		Map<String, Object> response = new LinkedHashMap<>();
		response.put("success", true);
		response.put("data", data);

		return response;
	}
}
