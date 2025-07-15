package com.ganatan.backend_java.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
        return Map.of(
            "success", true,
            "data", Map.of(
                "version", version,
                "status", "ok",
                "app", name,
                "dbClient", dbClient
            )
        );
    }
}
