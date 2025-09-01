package com.example.backend.entity;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Task {
    private Integer id;
    private String deskripsi;
    private Boolean status;
    private String title;


}
