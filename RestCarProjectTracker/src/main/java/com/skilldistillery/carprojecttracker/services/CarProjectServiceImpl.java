package com.skilldistillery.carprojecttracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.carprojecttracker.entities.CarProject;
import com.skilldistillery.carprojecttracker.repositories.CarProjectRepository;

@Service
public class CarProjectServiceImpl implements CarProjectService {
	@Autowired
	private CarProjectRepository repo;

	@Override
	public List<CarProject> index() {

		return repo.findAll();
	}

	@Override
	public CarProject findById(int id) {
		return repo.searchById(id);
	}

	@Override
	public CarProject create(CarProject carProject) {
		if (carProject.getModel() == null) {
			carProject.setModel("Default Car");
		}
		return repo.save(carProject);
	}

	@Override
	public boolean delete(int id) {
		repo.deleteById(id);
		return !repo.existsById(id);
	}

	@Override
	public CarProject update(int id, CarProject updatedCarProject) {
		CarProject carProject = repo.searchById(id);
		if (carProject == null) {
			carProject.setModel(updatedCarProject.getModel());
			carProject.setEngine(updatedCarProject.getEngine());
			carProject.setExterior(updatedCarProject.getExterior());
			carProject.setInterior(updatedCarProject.getInterior());
			carProject.setSuspension(updatedCarProject.getSuspension());

			return repo.save(carProject);
		}
		return null;
	}
}
