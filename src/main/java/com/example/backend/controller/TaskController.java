package com.example.backend.controller;

import com.example.backend.entity.Task;
import com.example.backend.repository.TaskRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/")
@RestController
public class TaskController {

    private final TaskRepository taskRepository;
    public TaskController(TaskRepository taskRepository){
        this.taskRepository=taskRepository;
    }
    @GetMapping
        public List<Task> getAllTask(){
            return taskRepository.findAll();
        }

    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable int id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task Kaga ketemu"));
    }

    @PostMapping
    public Task createAllTask(@RequestBody Task task){
        return taskRepository.save(task);

    }
    @PutMapping("/{id}")
    public Task updateTask(@PathVariable int id, @RequestBody Task sentTaskByUser){
        Task task= taskRepository.findById(id).orElseThrow(()-> new RuntimeException("Gak nemu Task yee"));
        task.setTitle(sentTaskByUser.getTitle());
        task.setDeskripsi(sentTaskByUser.getDeskripsi());
        task.setStatus(sentTaskByUser.isStatus());
        return taskRepository.save(task);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable int id){
        taskRepository.deleteById(id);
    }
    }

