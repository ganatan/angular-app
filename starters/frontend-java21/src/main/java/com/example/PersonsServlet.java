package com.example;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.util.List;
import java.util.Arrays;
import jakarta.servlet.annotation.WebServlet;

@WebServlet("/persons")
public class PersonsServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        
        List<String> persons = Arrays.asList(
            "Christopher Nolan servlet",
            "Quentin Tarantino",
            "Steven Spielberg",
            "Martin Scorsese",
            "James Cameron",
            "Ridley Scott",
            "Denis Villeneuve"
        );

        req.setAttribute("persons", persons);
        req.getRequestDispatcher("/persons.jsp").forward(req, res);
    }
}
