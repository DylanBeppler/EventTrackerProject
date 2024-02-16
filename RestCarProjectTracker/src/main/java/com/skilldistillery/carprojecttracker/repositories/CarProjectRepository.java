package com.skilldistillery.carprojecttracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.carprojecttracker.entities.CarProject;

public interface CarProjectRepository extends JpaRepository<CarProject, Integer> {
	CarProject searchById(int id);

}
