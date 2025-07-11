package com.angular.ai.mock.llm;

import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class ChatGptMock {

    public String reply(String type, Map<String, Object> input) {
        try {
            Thread.sleep(1000); // Simule un délai de traitement
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        String name = normalize((String) input.getOrDefault("name", "Inconnu"));
        String style = (String) input.getOrDefault("style", "neutral");
        String length = (String) input.getOrDefault("length", "medium");
        String llm = "chatgpt";

        String validType;
        switch (type.toLowerCase()) {
            case "biography":
            case "filmography":
            case "summary":
                validType = type.toLowerCase();
                break;
            default:
                validType = "contenu";
        }

        return String.format(
            "Java Mock Backend - Demande envoyée à %s pour une %s de \"%s\", avec un style \"%s\" et une longueur \"%s\".",
            llm, validType, name, style, length
        );
    }

    private String normalize(String value) {
        return value.replace("-", " ");
    }
}
