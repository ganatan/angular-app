package com.ganatan.backend_java.modules.continent;

import org.springframework.stereotype.Service;

import java.util.List;
import org.springframework.aop.framework.AopProxyUtils;

@Service
public class ContinentService {

	private final ContinentRepositoryInterface repository;

	public ContinentService(ContinentRepositoryInterface repository) {
		System.out.println("[ganatan] ContinentService Constructor:");
		System.out.println(
				"[ganatan] Repository injecté : " + AopProxyUtils.ultimateTargetClass(repository).getSimpleName());
		this.repository = repository;
	}

	public List<Continent> getItems() {
		System.out.println("[ganatan] ContinentService getItems:");
		return repository.findAll();
	}
}
