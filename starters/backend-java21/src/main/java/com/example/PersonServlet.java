package com.example;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/persons")
public class PersonServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        resp.setContentType("application/json");
        PrintWriter out = resp.getWriter();

        String json = """
            [
                { "id": 1, "name": "Christopher Nolan" },
                { "id": 2, "name": "Quentin Tarantino" },
                { "id": 3, "name": "Steven Spielberg" },
                { "id": 4, "name": "Martin Scorsese" },
                { "id": 5, "name": "James Cameron" },
                { "id": 6, "name": "Ridley Scott" },
                { "id": 7, "name": "Denis Villeneuve" }
            ]
            """;

        out.print(json);
        out.flush();
    }
}
