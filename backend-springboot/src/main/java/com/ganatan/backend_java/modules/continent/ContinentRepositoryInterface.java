package com.ganatan.backend_java.modules.continent;

import java.util.List;

public interface ContinentRepositoryInterface {

    List<Continent> findAll();

    default void logRepositoryUsed() {
        System.out.println("[ganatan] Repository actif : " + this.getClass().getName());
    }
}