package com.angular.ai.config;

import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.Map;

@Configuration
public class AiServicesConfig {

    public static Map<String, List<Map<String, String>>> getAllServices() {
        return Map.of(
            "llm", List.of(
                create("chatgpt", "OpenAI", "Text generation, summarization, Q&A, code completion"),
                create("claude", "Claude", "Structured reasoning, content writing, safe dialogue"),
                create("gemini", "Gemini", "Multimodal LLM for text and image understanding"),
                create("mistral", "Mistral", "Open-source LLM for high-performance text/code tasks"),
                create("perplexity", "Perplexity AI", "Web-augmented search engine powered by LLM"),
                create("deepseek", "DeepSeek", "Code generation, explanation and debugging assistant")
            ),
            "tts", List.of(
                create("elevenlabs", "ElevenLabs", "High-quality voice synthesis from text, multilingual")
            ),
            "avatar", List.of(
                create("did", "D-ID", "Animate a still photo with audio or text"),
                create("heygen", "Heygen", "Generate talking avatar videos from script"),
                create("jogg", "Jogg AI", "Create realistic talking avatars from custom photos")
            ),
            "image", List.of(
                create("leonardo", "Leonardo AI", "Create illustrations, concept art and product visuals"),
                create("midjourney", "MidJourney", "Stylized artistic image generation from prompt"),
                create("kling", "Kling AI", "Future video generation from text (Sora-level quality)")
            ),
            "agent", List.of(
                create("langchain", "LangChain", "Chain tools, memory, and LLMs into intelligent agents"),
                create("llamaindex", "LlamaIndex", "Connect LLMs to data sources, documents, and files")
            ),
            "music", List.of(
                create("suno", "Suno AI", "Generate full songs with lyrics, melody, and vocals"),
                create("udio", "Udio AI", "Generate high-quality vocal music tracks from prompt")
            )
        );
    }

    private static Map<String, String> create(String type, String label, String purpose) {
        return Map.of(
            "type", type,
            "label", label,
            "purpose", purpose
        );
    }
}



//package com.angular.ai.config;
//
//import org.springframework.context.annotation.Configuration;
//
//import java.util.List;
//import java.util.Map;
//
//@Configuration
//public class AiServicesConfig {
//
//    public static Map<String, List<Map<String, String>>> getAllServices() {
//        return Map.of(
//            "llm", List.of(
//                Map.of("type", "chatgpt", "label", "OpenAI", "purpose", "Text generation, summarization, Q&A, code completion"),
//                Map.of("type", "claude", "label", "Claude", "purpose", "Structured reasoning, content writing, safe dialogue"),
//                Map.of("type", "gemini", "label", "Gemini", "purpose", "Multimodal LLM for text and image understanding"),
//                Map.of("type", "mistral", "label", "Mistral", "purpose", "Open-source LLM for high-performance text/code tasks"),
//                Map.of("type", "perplexity", "label", "Perplexity AI", "purpose", "Web-augmented search engine powered by LLM"),
//                Map.of("type", "deepseek", "label", "DeepSeek", "purpose", "Code generation, explanation and debugging assistant")
//            ),
//            "tts", List.of(
//                Map.of("type", "elevenlabs", "label", "ElevenLabs", "purpose", "High-quality voice synthesis from text, multilingual")
//            ),
//            "avatar", List.of(
//                Map.of("type", "did", "label", "D-ID", "purpose", "Animate a still photo with audio or text"),
//                Map.of("type", "heygen", "label", "Heygen", "purpose", "Generate talking avatar videos from script"),
//                Map.of("type", "jogg", "label", "Jogg AI", "purpose", "Create realistic talking avatars from custom photos")
//            ),
//            "image", List.of(
//                Map.of("type", "leonardo", "label", "Leonardo AI", "purpose", "Create illustrations, concept art and product visuals"),
//                Map.of("type", "midjourney", "label", "MidJourney", "purpose", "Stylized artistic image generation from prompt"),
//                Map.of("type", "kling", "label", "Kling AI", "purpose", "Future video generation from text (Sora-level quality)")
//            ),
//            "agent", List.of(
//                Map.of("type", "langchain", "label", "LangChain", "purpose", "Chain tools, memory, and LLMs into intelligent agents"),
//                Map.of("type", "llamaindex", "label", "LlamaIndex", "purpose", "Connect LLMs to data sources, documents, and files")
//            ),
//            "music", List.of(
//                Map.of("type", "suno", "label", "Suno AI", "purpose", "Generate full songs with lyrics, melody, and vocals"),
//                Map.of("type", "udio", "label", "Udio AI", "purpose", "Generate high-quality vocal music tracks from prompt")
//            )
//        );
//    }
//}
