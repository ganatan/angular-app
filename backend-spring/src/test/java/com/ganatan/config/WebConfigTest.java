package com.ganatan.config;

import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockServletContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;

import static org.junit.jupiter.api.Assertions.assertNotNull;

public class WebConfigTest {

    @Test
    void shouldLoadApplicationContext() {
        AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
        context.setServletContext(new MockServletContext()); // <-- ajout important
        context.register(WebConfig.class);
        context.refresh();

        assertNotNull(context);

        context.close();
    }
}
