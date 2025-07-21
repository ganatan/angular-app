package com.ganatan.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class HealthController {

	@GetMapping("/health")
	public Map<String, Object> getStatus() {
		Map<String, Object> response = new LinkedHashMap<>();
		response.put("status", "ok");

		return response;
	}

}
