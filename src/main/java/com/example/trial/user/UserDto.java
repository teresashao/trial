package com.example.trial.user;

import com.example.trial.experience.Experience;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    Long id;
    String firstName;
    String lastName;
    String email;
    Role role;
    Set<Experience> experiences;
}

