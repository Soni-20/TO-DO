package Service;

import Entity.Todo;
import Repository.TodoRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> getTodosForProject(Long projectId) {
        return todoRepository.findByProjectId(projectId);
    }

    public Todo getTodoById(Long projectId, Long id) {
        return todoRepository.findByProjectIdAndId(projectId, id)
                .orElseThrow(() -> new EntityNotFoundException("Todo not found with id: " + id));
    }

    public Todo createTodoForProject(Long projectId, Todo todo) {
        todo.setProjectId(projectId);
        return todoRepository.save(todo);
    }

    public Todo updateTodoForProject(Long projectId, Long id, Todo todo) {
        Todo existingTodo = getTodoById(projectId, id);
        existingTodo.setDescription(todo.getDescription());
        existingTodo.setStatus(todo.getStatus());
        return todoRepository.save(existingTodo);
    }

    public void deleteTodoForProject(Long projectId, Long id) {
        todoRepository.deleteByProjectIdAndId(projectId, id);
    }

    public Todo updateTodoStatus(Long projectId, Long id, String status) {
        Todo existingTodo = getTodoById(projectId, id);
        existingTodo.setStatus(status);
        return todoRepository.save(existingTodo);
    }

}
