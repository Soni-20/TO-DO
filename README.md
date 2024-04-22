Todo Application Project Summary

Introduction: The Todo Application is designed to help users manage their tasks effectively by organizing them into projects and todos. It provides a user-friendly interface for creating, updating, and tracking tasks.

Features:

1)Authentication: Implement basic authentication to ensure secure access to the application. 2)Project Management: 3)Create New Project: Users can create new projects by providing a title and optionally adding todos to them. 4)List All Projects: Display a list of all projects with their titles for easy navigation. 5)View Project Details: Users can view the details of a specific project, including its title and associated todos. ^)Todo Management: Add Todo: Users can add new todos to a project, specifying a description and completion status. Update Todo: Allow users to update existing todos, including their description and status. Remove Todo: Provide the option to delete todos from a project. Mark Todo: Users can mark todos as pending or complete to track their progress. 3. Schema:

Project: Unique ID Title Created Date List of Todos (associated todos) Todo: Unique ID Description Status (pending or complete) Created Date Updated Date 4. Workflow:

1)User Authentication: Users log in with their credentials to access the application. 2)Home Page: 3)Create a New Project: Users can create new projects and add todos to them. 4)List All Projects: Display all existing projects for easy navigation. 5)Project Details Page: 6)View Project: Users can view detailed information about a project, including its title and todos. 7)Manage Todos: Users can add, update, or remove todos within a project. 8)Mark Todos: Allow users to mark todos as pending or complete to track their progress. 5. Technology Stack:

Frontend: React.js for the user interface. Backend: java with springboot for server-side logic. Database: OracleDB for storing project and todo data. Authentication: Basic authentication using username and password.

Todo Application
This is a simple Todo application built with React for the frontend, Spring Boot for the backend, and Oracle Database for data storage.

Setup
Frontend (React)
Clone this repository:

git clone <repository-url>
Navigate to the frontend directory:

cd frontend
Install dependencies:

npm install
Backend (Spring Boot)
Navigate to the backend directory:

cd backend
Configure Oracle Database connection in src/main/resources/application.properties.
Build the project:

mvn clean install
Run
Frontend (React)
Make sure you are in the frontend directory.
Start the development server:

npm start
The frontend will be running at http://localhost:3000.
Backend (Spring Boot)
Make sure you are in the backend directory.
Run the Spring Boot application:

java -jar target/todo-backend.jar
The backend will be running at http://localhost:8084.
Test
Frontend (React)
To run tests for the frontend:

npm test
Backend (Spring Boot)
To run tests for the backend:

mvn test
