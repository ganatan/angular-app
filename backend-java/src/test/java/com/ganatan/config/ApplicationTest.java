package com.ganatan.config;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ApplicationTest {

    @Test
    public void testApplicationConfigInitialization() {
        Application config = new Application();
        assertNotNull(config);
    }
}
