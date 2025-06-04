package com.carddemo.auth.config;

import com.carddemo.auth.entity.Role;
import com.carddemo.auth.entity.User;
import com.carddemo.auth.repository.RoleRepository;
import com.carddemo.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataInitializer implements CommandLineRunner {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(String... args) {
        // Initialize roles if they don't exist
        initRoles();
        
        // Initialize default users if they don't exist
        initDefaultUsers();
    }

    private void initRoles() {
        if (roleRepository.count() == 0) {
            log.info("Initializing roles...");
            
            Role adminRole = Role.builder()
                    .name("ROLE_ADMIN")
                    .description("Administrator role with full access")
                    .build();
            
            Role userRole = Role.builder()
                    .name("ROLE_USER")
                    .description("Regular user with limited access")
                    .build();
            
            roleRepository.save(adminRole);
            roleRepository.save(userRole);
            
            log.info("Roles initialized successfully.");
        }
    }

    private void initDefaultUsers() {
        if (userRepository.count() == 0) {
            log.info("Initializing default users...");
            
            Role adminRole = roleRepository.findByName("ROLE_ADMIN")
                    .orElseThrow(() -> new RuntimeException("Admin role not found"));
            
            Role userRole = roleRepository.findByName("ROLE_USER")
                    .orElseThrow(() -> new RuntimeException("User role not found"));
            
            // Create admin user
            User adminUser = User.builder()
                    .username("admin")
                    .password(passwordEncoder.encode("admin123"))
                    .email("admin@carddemo.com")
                    .firstName("Admin")
                    .lastName("User")
                    .active(true)
                    .roles(Set.of(adminRole))
                    .build();
            
            // Create regular user
            User regularUser = User.builder()
                    .username("user")
                    .password(passwordEncoder.encode("user123"))
                    .email("user@carddemo.com")
                    .firstName("Regular")
                    .lastName("User")
                    .active(true)
                    .roles(Set.of(userRole))
                    .build();
            
            userRepository.save(adminUser);
            userRepository.save(regularUser);
            
            log.info("Default users initialized successfully.");
        }
    }
}