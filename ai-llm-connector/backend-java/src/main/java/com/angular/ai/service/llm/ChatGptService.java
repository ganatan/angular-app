package com.angular.ai.service.llm;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class ChatGptService {

    @Value("${openai.api.key}")
    private String openAiApiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public String reply(String type, Map<String, Object> input) {
        try {
            String name = input.getOrDefault("name", "inconnu").toString();
            String rawStyle = input.getOrDefault("style", "neutral").toString();
            String rawLength = input.getOrDefault("length", "medium").toString();

            String style = styleMap.getOrDefault(rawStyle, styleMap.get("neutral"));
            String length = lengthMap.getOrDefault(rawLength, lengthMap.get("medium"));

            String prompt;
            if ("summary".equals(type)) {
                prompt = String.format("Fais un résumé du film \"%s\" avec un style %s, %s.", name, style, length);
            } else {
                prompt = String.format("Écris une biographie de %s avec un style %s, %s.", name, style, length);
            }

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.setBearerAuth(openAiApiKey);

            String body = """
                {
                  "model": "gpt-4-turbo",
                  "messages": [
                    { "role": "user", "content": "%s" }
                  ]
                }
                """.formatted(prompt);

            HttpEntity<String> request = new HttpEntity<>(body, headers);

            ResponseEntity<Map> response = restTemplate.postForEntity(
                "https://api.openai.com/v1/chat/completions",
                request,
                Map.class
            );

            Map<String, Object> choice = ((Map<String, Object>) ((java.util.List<?>) response.getBody().get("choices")).get(0));
            Map<String, Object> message = (Map<String, Object>) choice.get("message");
            return message.get("content").toString().trim();

        } catch (Exception e) {
            System.err.println("❌ ChatGptService error: " + e.getMessage());
            return "Erreur lors de l’appel à l’API OpenAI.";
        }
    }

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
}



//package com.angular.ai.service.llm;
//
//import org.springframework.stereotype.Service;
//
//import java.util.Map;
//
//@Service
//public class ChatGptService {
//    public String reply(String type, Map<String, Object> input) {
//        // TODO: intégration avec OpenAI API (simulé ici)
//        return "Réponse générée par ChatGptService";
//    }
//}
