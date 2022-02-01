package com.example.Backend.models.exam;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long qid;

    private String title;
    private String description;

    private String maxMarks;

    private String numberOfQuestion;

    private boolean active=false;

    @ManyToOne(fetch = FetchType.EAGER)
    private Category category;
    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Collection<Question> questions ;



}
