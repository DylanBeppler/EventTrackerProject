package com.skilldistillery.carprojecttracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.carprojecttracker.entities.CarProject;
import com.skilldistillery.carprojecttracker.services.CarProjectService;

import jakarta.servlet.http.HttpServletResponse;

@RequestMapping("api")
@RestController
@CrossOrigin({ "*", "http://localhost/" })
public class CarProjectController {
	@Autowired
	private CarProjectService cpService;

	@GetMapping("projects")
	public List<CarProject> index() {
		return cpService.index();
	}

	@GetMapping("projects/{id}")
	public CarProject show(@PathVariable("id") int id, HttpServletResponse rsp) {
		CarProject carProject = cpService.findById(id);
		if (carProject == null) {
			rsp.setStatus(404);
		}
		return carProject;
	}

	@PostMapping("projects")
	public CarProject create(@RequestBody CarProject carProject, HttpServletResponse rsp) {
		CarProject createdCarProject = cpService.create(carProject);

		if (createdCarProject != null) {
			rsp.setStatus(201);
		} else {
			rsp.setStatus(404);
		}
		return createdCarProject;
	}

	@PutMapping("projects/{id}")
	public CarProject update(@PathVariable("id") int id, @RequestBody CarProject carProject, HttpServletResponse rsp) {
		try {
			carProject = cpService.update(id, carProject);
			if (carProject == null) {
				rsp.setStatus(404);
			}
		} catch (Exception e) {
			rsp.setStatus(400);
			carProject = null;
			e.printStackTrace();
		}
		return carProject;

	}

	@DeleteMapping("projects/{id}")
	public void delete(@PathVariable("id") int id, HttpServletResponse rsp) {
		CarProject carProject = cpService.findById(id);
		try {
			if (carProject != null) {
				cpService.delete(id);
				rsp.setStatus(204);
			} else {
				rsp.setStatus(404);
			}
		} catch (Exception e) {
			rsp.setStatus(400);
			e.printStackTrace();
		}
	}

}
