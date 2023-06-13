import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    private static final String DEFAULT_USERNAME = "admin";
    private static final String DEFAULT_PASSWORD = "password";

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Perform login authentication
        if (username.equals(DEFAULT_USERNAME) && password.equals(DEFAULT_PASSWORD)) {
            if (username.equals("admin")) {
                response.sendRedirect("food.html");
            } else {
                response.sendRedirect("dashboard.html");
            }
        } else {
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();

            out.println("<html><head><title>Login Failed</title></head><body>");
            out.println("<h1>Login Failed</h1>");
            out.println("<p>Invalid username or password. Please try again.</p>");
            out.println("<a href=\"login.html\">Go back to Login</a>");
            out.println("</body></html>");
        }
    }
}
