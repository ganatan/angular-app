package com.ganatan.backend_java.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

@RestController
public class HealthController {
	
	private static final Logger logger = LoggerFactory.getLogger(HealthController .class);
	
    @GetMapping("/health")
    public Map<String, String> health() {
    	logger.info("GET / - health");
        return Map.of("status", "ok");
    }
}
