package com.ganatan.backend_java.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class RootController {

	private static final Logger logger = LoggerFactory.getLogger(RootController.class);

	@Value("${app.version}")
	private String version;

	@Value("${app.name}")
	private String name;

	@Value("${db.client}")
	private String dbClient;

	@GetMapping("/")
	public Map<String, Object> index() {
		logger.info("GET / - version={}, app={}, db={}", version, name, dbClient);

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
