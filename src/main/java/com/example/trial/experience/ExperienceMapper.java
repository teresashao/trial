package com.example.trial.experience;

public class ExperienceMapper {
    public static ExperienceDto mapToExperienceDto(Experience experience){
        return new ExperienceDto(
                experience.getId(),
                experience.getTitle(),
                experience.getDescription(),
                experience.getUsers()
        );
    }

    public static Experience mapToExperience(ExperienceDto experienceDto){
        return new Experience(
                experienceDto.getId(),
                experienceDto.getTitle(),
                experienceDto.getDescription(),
                experienceDto.getUsers()
        );
    }
}
