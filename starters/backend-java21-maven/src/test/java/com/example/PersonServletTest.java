package com.example;

import jakarta.servlet.http.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import java.io.PrintWriter;
import java.io.StringWriter;

import static org.junit.jupiter.api.Assertions.*;

class PersonServletTest {

    @Test
    void testDoGet_returnsJson() throws Exception {
        PersonServlet servlet = new PersonServlet();

        HttpServletRequest request = Mockito.mock(HttpServletRequest.class);
        HttpServletResponse response = Mockito.mock(HttpServletResponse.class);

        StringWriter stringWriter = new StringWriter();
        PrintWriter writer = new PrintWriter(stringWriter);
        Mockito.when(response.getWriter()).thenReturn(writer);

        servlet.doGet(request, response);

        writer.flush();
        String json = stringWriter.toString();

        assertTrue(json.contains("Christopher Nolan"));
        assertTrue(json.contains("Steven Spielberg"));
        assertTrue(json.startsWith("["));
        assertTrue(json.endsWith("]"));
    }
}
