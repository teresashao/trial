package com.example.trial.experience;

import java.util.List;

public interface ExperienceService {
    ExperienceDto createExperience(ExperienceDto experienceDto);

    ExperienceDto getExperienceById(Long experienceId);

    List<ExperienceDto> getAllExperiences();

    ExperienceDto updateExperience(Long experienceId, ExperienceDto updatedExperience);

    ExperienceDto addExperienceToUser(Long experienceId);

    void deleteExperience(Long experienceId);
}
