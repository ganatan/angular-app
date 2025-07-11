package com.angular.ai.service.llm;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class ClaudeService {

    @Value("${anthropic.api.key}")
    private String apiKey;

    private static final Map<String, String> styleMap = Map.ofEntries(
        Map.entry("neutral", "neutre, objectif, informatif sans émotion"),
        Map.entry("casual", "décontracté, langage simple et familier"),
        Map.entry("technical", "axé sur les faits techniques et professionnels"),
        Map.entry("narrative", "raconté comme une histoire avec du rythme"),
        Map.entry("press", "journalistique, structuré comme un article de presse"),
        Map.entry("humorous", "humoristique, ton léger et amusant"),
        Map.entry("poetic", "poétique, style littéraire et imagé"),
        Map.entry("dramatic", "dramatique, avec tension et intensité émotionnelle"),
        Map.entry("emotional", "émotionnel, centré sur les sentiments et l’empathie"),
        Map.entry("cinematic", "cinématographique, ambiance visuelle et descriptive comme un film"),
        Map.entry("historical", "historique, avec mise en contexte chronologique"),
        Map.entry("marketing", "marketing, valorisant avec un ton accrocheur"),
        Map.entry("scientific", "scientifique, ton analytique et factuel"),
        Map.entry("satirical", "satirique, critique subtile et ironique"),
        Map.entry("inspirational", "inspirant, motivant avec des citations et une mise en valeur"),
        Map.entry("minimal", "très court, phrases simples et dépouillées"),
        Map.entry("dialog", "rédigé sous forme de dialogue entre deux personnes"),
        Map.entry("interview", "présenté comme une interview fictive, questions-réponses")
    );

    private static final Map<String, String> lengthMap = Map.of(
        "short", "environ 30 mots, réponse très concise",
        "medium", "environ 60 mots, réponse équilibrée",
        "long", "environ 100 mots, réponse développée mais synthétique"
    );

    public String reply(String type, Map<String, Object> input) {
        try {
            String name = (String) input.getOrDefault("name", "inconnu");
            String rawStyle = (String) input.getOrDefault("style", "neutral");
            String rawLength = (String) input.getOrDefault("length", "medium");

            String style = styleMap.getOrDefault(rawStyle, styleMap.get("neutral"));
            String length = lengthMap.getOrDefault(rawLength, lengthMap.get("medium"));

            String prompt = type.equals("summary")
                ? String.format("Fais un résumé du film \"%s\" avec un style %s, %s.", name, style, length)
                : String.format("Écris une biographie de %s avec un style %s, %s.", name, style, length);

            RestTemplate restTemplate = new RestTemplate();

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("x-api-key", apiKey);
            headers.set("anthropic-version", "2023-06-01");

            String body = String.format(
                """
                {
                  "model": "claude-3-5-sonnet-20240620",
                  "max_tokens": 1000,
                  "messages": [{ "role": "user", "content": "%s" }]
                }
                """,
                prompt.replace("\"", "\\\"")
            );

            HttpEntity<String> entity = new HttpEntity<>(body, headers);
            ResponseEntity<Map> response = restTemplate.postForEntity("https://api.anthropic.com/v1/messages", entity, Map.class);

            if (response.getStatusCode() == HttpStatus.OK) {
                Object content = ((Map<?, ?>) ((java.util.List<?>) response.getBody().get("content")).get(0)).get("text");
                return content != null ? content.toString().trim() : "Réponse vide de Claude.";
            } else {
                return "Erreur Claude (" + response.getStatusCodeValue() + ") : " + response.getBody();
            }

        } catch (Exception e) {
            return "Erreur Claude : " + e.getMessage();
        }
    }
}
