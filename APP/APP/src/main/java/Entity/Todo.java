package Entity;

import jakarta.persistence.*;

public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    private String status;

    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    public void setProjectId(Long projectId) {
    }

    public Object getDescription() {
        return null;
    }

    public void setDescription(Object description) {
    }

    public String getStatus() {
        return null;
    }

    public void setStatus(String status) {
    }

    // Constructors, getters, and setters


}
