package com.skilldistillery.carprojecttracker.services;

import java.util.List;

import com.skilldistillery.carprojecttracker.entities.CarProject;

public interface CarProjectService {
List<CarProject> index();
CarProject findById(int id);
CarProject create(CarProject carProject);	
boolean delete(int id);
CarProject update(int id, CarProject updatedCarProject);
}
