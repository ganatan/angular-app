package com.ganatan.backend_java.modules.continent;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Repository;

import jakarta.annotation.PostConstruct;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Repository
@ConditionalOnProperty(name = "db.client", havingValue = "mock")
public class ContinentRepositoryMock implements ContinentRepositoryInterface {

    private List<Continent> continents = new ArrayList<>();

    @PostConstruct
    public void loadData() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            ClassPathResource resource = new ClassPathResource("data/mock/continent.json");
            continents = mapper.readValue(resource.getInputStream(), new TypeReference<List<Continent>>() {});
            System.out.println("[GANATAN MOCK] JSON chargé : " + continents.size() + " continents.");
        } catch (IOException e) {
            System.err.println("[GANATAN MOCK] Erreur JSON : " + e.getMessage());
            continents.clear();
        }
    }

    @Override
    public List<Continent> findAll() {
        return continents;
    }
}
