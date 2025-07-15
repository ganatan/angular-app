package com.ganatan.backend_java.modules.continent;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class ContinentController {
    
    private final ContinentService service;
    
    public ContinentController(ContinentService service) {
        System.out.println("[ganatan] ContinentController Constructor:");
        this.service = service;
    }
    
    @GetMapping("/continents")
    public List<Continent> getItems() {
        System.out.println("[ganatan] ContinentController getItems:");
        return service.getItems();
    }
}
