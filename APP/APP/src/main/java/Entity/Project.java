package Entity;

import jakarta.persistence.*;

import java.util.List;

public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
    private List<Todo> todos;

    public Object getTitle() {
        return title;
    }

    public Object setTitle(Object title) {
        return title;
    }

    // Constructors, getters, and setters



}
