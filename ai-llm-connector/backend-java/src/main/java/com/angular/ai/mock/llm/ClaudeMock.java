package com.angular.ai.mock.llm;

import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class ClaudeMock {

    public String reply(String type, Map<String, Object> input) {
        String name = getString(input.get("name"), "Inconnu").replace("-", " ");
        String style = getString(input.get("style"), "neutral");
        String length = getString(input.get("length"), "medium");
        String llm = "claude";

        String validType;
        switch (type.toLowerCase()) {
            case "biography":
            case "filmography":
            case "summary":
                validType = type;
                break;
            default:
                validType = "contenu";
        }

        return String.format(
            "Java Mock Backend - Demande envoyée à %s pour une %s de \"%s\", avec un style \"%s\" et une longueur \"%s\".",
            llm, validType, name, style, length
        );
    }

    private String getString(Object value, String defaultValue) {
        return value instanceof String ? (String) value : defaultValue;
    }
}



//package com.angular.ai.mock.llm;
//
//import org.springframework.stereotype.Component;
//
//import java.util.Map;
//
//@Component
//public class ClaudeMock {
//    public String reply(String type, Map<String, Object> input) {
//        return "Mock Claude pour type: " + type;
//    }
//}
