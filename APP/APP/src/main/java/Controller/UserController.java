package Controller;

import Entity.User;
import Service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserDetailsService userDetailsService;

    // POST endpoint to add a new user
    @PostMapping("/register")
    public void addUser(@RequestBody User user) {
        userDetailsService.addUser(user);
    }
}
