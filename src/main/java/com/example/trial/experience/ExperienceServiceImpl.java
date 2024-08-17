package com.example.trial.experience;

import com.example.trial.exception.ResourceNotFoundException;
import com.example.trial.user.User;
import com.example.trial.user.UserRespository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ExperienceServiceImpl implements ExperienceService{

    private ExperienceRepository experienceRepository;
    private UserRespository userRepository;

    @Override
    public ExperienceDto createExperience(ExperienceDto experienceDto) {

        Experience experience = ExperienceMapper.mapToExperience(experienceDto);
        Experience savedExperience = experienceRepository.save(experience);

        return ExperienceMapper.mapToExperienceDto(savedExperience);
    }

    @Override
    public ExperienceDto getExperienceById(Long experienceId) {
        Experience experience = experienceRepository.findById(experienceId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(("Experience does not exist with given id: " + experienceId)));

        return ExperienceMapper.mapToExperienceDto(experience);
    }

    @Override
    public List<ExperienceDto> getAllExperiences() {
        List<Experience> experiences = experienceRepository.findAll();
        return experiences.stream().map(ExperienceMapper::mapToExperienceDto)
                .collect(Collectors.toList());
    }

    @Override
    public ExperienceDto updateExperience(Long experienceId, ExperienceDto updatedExperience) {

        Experience experience = experienceRepository.findById(experienceId).orElseThrow(
                () -> new ResourceNotFoundException("Experience does not exist with given id: " + experienceId)

        );

        experience.setTitle(updatedExperience.getTitle());
        experience.setDescription(updatedExperience.getDescription());

        Experience updatedExperienceObj = experienceRepository.save(experience);

        return ExperienceMapper.mapToExperienceDto(updatedExperienceObj);
    }

    @Override
    public ExperienceDto addExperienceToUser(Long experienceId){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new ResourceNotFoundException(("User does not exist with given email: " + email)));
        Experience experience = experienceRepository.findById(experienceId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(("Experience does not exist with given id: " + experienceId)));

        user.getExperiences().add(experience);
        experience.getUsers().add(user);

        userRepository.save(user);
        experienceRepository.save(experience);
        return ExperienceMapper.mapToExperienceDto(experience);

    }

    @Override
    public void deleteExperience(Long experienceId) {
        Experience experience = experienceRepository.findById(experienceId).orElseThrow(
                () -> new ResourceNotFoundException("Experience does not exist with given id: " + experienceId)

        );

        experienceRepository.deleteById(experienceId);
    }

}
