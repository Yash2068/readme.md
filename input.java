import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
public class UserService { public boolean authenticateUser(String email, String password) { try (
  Connection conn = DatabaseConnector.getConnection()
) { String query = "SELECT * FROM users WHERE email = ? AND password = ?";
PreparedStatement stmt = conn.prepareStatement(query);
stmt.setString(1, email);
stmt.setString(2, password);
ResultSet rs = stmt.executeQuery();
return rs.next();
} catch (SQLException e) { e.printStackTrace();
} return false;
} public void createProject(
  String projectName,
  String creatorEmail,
  String collaboratorEmail
) { try (
  Connection conn = DatabaseConnector.getConnection()
) { String query = "INSERT INTO projects (name, creator, collaborator) VALUES (?, ?, ?)";
PreparedStatement stmt = conn.prepareStatement(query);
stmt.setString(1, projectName);
stmt.setString(2, creatorEmail);
stmt.setString(3, collaboratorEmail);
stmt.executeUpdate();
} catch (SQLException e) { e.printStackTrace();
} } }