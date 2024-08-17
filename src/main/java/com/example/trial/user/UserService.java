package com.example.trial.user;

import com.example.trial.experience.ExperienceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRespository userRespository;

    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
                return userRespository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("Username not found"));
            }
        };
    }

    public User save(User newUser) {
        if (newUser.getId()==null){
            newUser.setCreatedAt(LocalDateTime.now());
        }
        newUser.setUpdatedAt((LocalDateTime.now()));

        return userRespository.save(newUser);
    }

}
