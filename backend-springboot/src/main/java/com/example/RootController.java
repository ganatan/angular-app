package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;


@RestController
public class RootController {

    @GetMapping("/")
  public Map<String, Object> getAppInfo() {
	  return Map.of(
	      "success", true,
	      "data", Map.of(
	          "version", "1.0.0",
	          "status", "ok",
	          "app", "backend-springboot"
	      )
	  );
	}
}
