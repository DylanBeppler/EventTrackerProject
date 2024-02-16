package com.skilldistillery.carprojecttracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.carprojecttracker.entities.CarProject;
import com.skilldistillery.carprojecttracker.services.CarProjectService;

@RequestMapping("api")
@RestController
public class CarProjectController {
	@Autowired
	private CarProjectService cpService;

	@GetMapping("projects")
	public List<CarProject> index() {
		return cpService.index();
	}

	
	
}
