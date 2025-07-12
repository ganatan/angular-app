package com.example;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import com.example.RootController;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(RootController.class)
public class RootControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void getAppInfo_returnsSuccessAndAppMetadata() throws Exception {
        // Arrange
        String endpoint = "/";

        // Act & Assert
        mockMvc.perform(get(endpoint))
            .andExpect(status().isOk())
            .andExpect(content().contentType("application/json"))
            .andExpect(jsonPath("$.success").value(true))
            .andExpect(jsonPath("$.data.version").value("1.0.0"))
            .andExpect(jsonPath("$.data.status").value("ok"))
            .andExpect(jsonPath("$.data.app").value("backend-java"));
    }
}
