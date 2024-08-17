package com.example.trial.user;

public class UserMapper {
    public static UserDto mapToUserDto(User user){
        return new UserDto(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getRole(),
                user.getExperiences()
        );
    }
    public static User mapToUser(UserDto userDto){
        return new User(
                userDto.getId(),
                userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getEmail(),
                null,
                null,
                null,
                userDto.getRole(),
                userDto.getExperiences()
        );
    }
}


//public class ExperienceMapper {
//    public static ExperienceDto mapToExperienceDto(Experience experience){
//        return new ExperienceDto(
//                experience.getId(),
//                experience.getTitle(),
//                experience.getDescription(),
//                experience.getUsers()
//        );
//    }
//
//    public static Experience mapToExperience(ExperienceDto experienceDto){
//        return new Experience(
//                experienceDto.getId(),
//                experienceDto.getTitle(),
//                experienceDto.getDescription(),
//                experienceDto.getUsers()
//        );
//    }
//}