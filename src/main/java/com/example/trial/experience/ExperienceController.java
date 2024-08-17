package com.example.trial.experience;

import com.example.trial.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/experiences")
@AllArgsConstructor
public class ExperienceController {

    private ExperienceService experienceService;
    private UserService userService;

    //Build Add Experience Rest API
    @PostMapping
    public ResponseEntity<ExperienceDto> createExperience(@RequestBody ExperienceDto experienceDto){
        ExperienceDto savedExperience = experienceService.createExperience(experienceDto);
        return new ResponseEntity<>(savedExperience, HttpStatus.CREATED);
    }

    //Get Experience Rest API
    @GetMapping("/{id}")
    public ResponseEntity<ExperienceDto> getExperienceById(@PathVariable("id") Long experienceId){
        ExperienceDto experienceDto = experienceService.getExperienceById(experienceId);
        return ResponseEntity.ok(experienceDto);
    }

    //Get all Experiences REST API
    @GetMapping
    public ResponseEntity<List<ExperienceDto>> getAllExperiences(){
        List<ExperienceDto> experiences = experienceService.getAllExperiences();
        return ResponseEntity.ok(experiences);
    }

    //build update experience rest api
    @PutMapping("/{id}")
    public ResponseEntity<ExperienceDto> updateExperience(@PathVariable("id") Long experienceId,
                                                      @RequestBody ExperienceDto updatedExperience){
        ExperienceDto experienceDto =  experienceService.updateExperience(experienceId, updatedExperience);

        return ResponseEntity.ok(experienceDto);
    }

    @PostMapping("/user-add/{id}")
    public ResponseEntity<ExperienceDto> addExperienceToUser(@PathVariable("id") Long experienceId) {
        ExperienceDto experienceDto =  experienceService.addExperienceToUser(experienceId);
        return ResponseEntity.ok(experienceDto);
    }

    //build delete experience rest api
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteExperience(@PathVariable("id") Long experienceId){
        experienceService.deleteExperience(experienceId);
        return ResponseEntity.ok("Experience deleted successfully");
    }
}
