package com.ganatan.config;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletRegistration;
import org.junit.jupiter.api.Test;
import org.springframework.web.servlet.DispatcherServlet;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

public class ApplicationTest {
    
    @Test
    void shouldRegisterDispatcherServlet() throws Exception {
        ServletContext servletContext = mock(ServletContext.class);
        ServletRegistration.Dynamic dynamic = mock(ServletRegistration.Dynamic.class);
        
        when(servletContext.addServlet(eq("dispatcher"), any(DispatcherServlet.class)))
            .thenReturn(dynamic);
        
        Application initializer = new Application();
        initializer.onStartup(servletContext);
        
        verify(servletContext).addServlet(eq("dispatcher"), any(DispatcherServlet.class));
        verify(dynamic).setLoadOnStartup(1);
        verify(dynamic).addMapping("/");
    }
}
