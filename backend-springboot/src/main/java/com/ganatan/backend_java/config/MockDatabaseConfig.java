package com.ganatan.backend_java.config;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnProperty(name = "db.client", havingValue = "mock")
@EnableAutoConfiguration(exclude = {
    HibernateJpaAutoConfiguration.class,
    JpaRepositoriesAutoConfiguration.class
})
public class MockDatabaseConfig {
    public MockDatabaseConfig() {
        System.out.println("[ganatan] ⚙️ [GANATAN] Mode MOCK : JPA désactivé.");
    }
}
