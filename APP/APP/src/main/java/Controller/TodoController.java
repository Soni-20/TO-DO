package Controller;

import java.util.List;

import Entity.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import Service.TodoService;



@RestController
@RequestMapping("/projects/{projectId}/todos")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping
    public List<Todo> getTodosForProject(@PathVariable Long projectId) {
        return todoService.getTodosForProject(projectId);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getTodoById(@PathVariable Long projectId, @PathVariable Long id) {
        Todo todo = todoService.getTodoById(projectId, id);
        return ResponseEntity.ok().body(todo);
    }

    @PostMapping
    public ResponseEntity<Object> createTodoForProject(@PathVariable Long projectId, @RequestBody Todo todo) {
        Todo createdTodo = todoService.createTodoForProject(projectId, todo);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTodo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateTodoForProject(@PathVariable Long projectId, @PathVariable Long id, @RequestBody Todo todo) {
        Todo updatedTodo = todoService.updateTodoForProject(projectId, id, todo);
        return ResponseEntity.ok().body(updatedTodo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTodoForProject(@PathVariable Long projectId, @PathVariable Long id) {
        todoService.deleteTodoForProject(projectId, id);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<Object> updateTodoStatus(@PathVariable Long projectId, @PathVariable Long id, @RequestParam String status) {
        Todo updatedTodo = todoService.updateTodoStatus(projectId, id, status);
        return ResponseEntity.ok().body(updatedTodo);
    }

}
