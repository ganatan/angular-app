package com.angular.ai.controller;

import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.RestController;

import java.util.Map;


import com.angular.ai.config.AiServicesConfig; 

@RestController
public class RootController {

	@GetMapping("/")
	public Map<String, Object> getInfo() {
	    return Map.of(
	        "success", true,
	        "data", AiServicesConfig.getAllServices()
	    );
	}
	
	@GetMapping("/api/test")
	public Map<String, Object> testGet() {
	  System.out.println("00000000001");
	  System.out.println("GET /api/test");
	  return Map.of(
	      "success", true,
	  "method", "GET",
	  "message", "GET request successful"
	      );
	}
	
	@PostMapping("/api/test")
	public Map<String, Object> testPost(@RequestBody(required = false) Map<String, Object> body) {
	    System.out.println("POST /api/test: " + body);
	    return Map.of(
	        "success", true,
	        "method", "POST",
	        "received", body != null ? body : Map.of("info", "no body provided")
	    );
	}
	
	@PutMapping("/api/test")
	public Map<String, Object> testPut(@RequestBody(required = false) Map<String, Object> body) {
	    System.out.println("PUT /api/test: " + body);
	    return Map.of(
	        "success", true,
	        "method", "PUT",
	        "updated", body != null ? body : Map.of("info", "no body provided")
	    );
	}

	@DeleteMapping("/api/test")
	public Map<String, Object> testDelete(@RequestParam(name = "id", required = false) String id) {
	    System.out.println("DELETE /api/test?id=" + id);
	    return Map.of(
	        "success", true,
	        "method", "DELETE",
	        "deletedId", id != null ? id : "undefined"
	    );
	}
	
		
}

