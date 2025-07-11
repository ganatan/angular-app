package com.angular.ai.controller;

import com.angular.ai.controller.RootController;
import com.angular.ai.config.AiServicesConfig;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(RootController.class)
public class RootControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void getRootInfo_shouldReturnAllServices_successTrue() throws Exception {
        mockMvc.perform(get("/"))
            .andExpect(status().isOk())
            .andExpect(content().contentType("application/json"))
            .andExpect(jsonPath("$.success").value(true))
            .andExpect(jsonPath("$.data.llm", hasSize(greaterThanOrEqualTo(1))))
            .andExpect(jsonPath("$.data.llm[0].type", not(emptyOrNullString())))
            .andExpect(jsonPath("$.data.tts[0].label", is("ElevenLabs")))
            .andExpect(jsonPath("$.data.avatar[*].type", hasItem("jogg")))
            .andExpect(jsonPath("$.data.music[*].label", hasItems("Suno AI", "Udio AI")));
    }
}




//package com.example;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.test.web.servlet.MockMvc;
//
//import com.angular.ai.controller.RootController;
//
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
//
//@WebMvcTest(RootController.class)
//public class RootControllerTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Test
//    void getAppInfo_returnsSuccessAndAppMetadata() throws Exception {
//        // Arrange
//        String endpoint = "/";
//
//        // Act & Assert
//        mockMvc.perform(get(endpoint))
//            .andExpect(status().isOk())
//            .andExpect(content().contentType("application/json"))
//            .andExpect(jsonPath("$.success").value(true))
//            .andExpect(jsonPath("$.data.version").value("1.0.0"))
//            .andExpect(jsonPath("$.data.status").value("ok"))
//            .andExpect(jsonPath("$.data.app").value("backend-java-springboot"));
//    }
//}
