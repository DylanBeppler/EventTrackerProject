package com.skilldistillery.carprojecttracker.services;

import java.util.List;

import com.skilldistillery.carprojecttracker.entities.CarProject;

public interface CarProjectService {
List<CarProject> index();
public CarProject findById(int id);
public CarProject create(CarProject film);	
public boolean delete(int id);
public CarProject update(int id, CarProject updatedCarProject);
}
