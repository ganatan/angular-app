package com.ganatan.backend_java.modules.person;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@ConditionalOnProperty(name = "db.client", havingValue = "sql")
public interface PersonRepositoryJpa extends JpaRepository<Person, Long>, PersonRepositoryInterface {
}