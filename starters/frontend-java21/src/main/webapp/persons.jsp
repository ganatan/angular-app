<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.util.List" %>

<html>
<head><title>Réalisateurs</title></head>
<body>
    <h1>🎬 Réalisateurs célèbres</h1>
    <ul>
        <%
            List<String> list = (List<String>) request.getAttribute("persons");
            for (String name : list) {
        %>
            <li><%= name %></li>
        <%
            }
        %>
    </ul>
</body>
</html>
