package Repository;
import Entity.Todo;

import java.util.List;
import java.util.Optional;


public interface TodoRepository {
    List<Todo> findByProjectId(Long projectId);
    Optional<Todo> findByProjectIdAndId(Long projectId, Long id);
    void deleteByProjectIdAndId(Long projectId, Long id);

    Todo save(Todo todo);
}
