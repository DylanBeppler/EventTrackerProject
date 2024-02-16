package com.skilldistillery.carprojecttracker.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.carprojecttracker.entities.CarProject;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

class CarProjectTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private CarProject carProject;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	    emf = Persistence.createEntityManagerFactory("JPACarProjectTracker");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	    emf.close();
	}
	@BeforeEach
	void setUp() throws Exception {
	    em = emf.createEntityManager();
	    carProject = em.find(CarProject.class, 2);
	}

	@AfterEach
	void tearDown() throws Exception {
	    em.close();
	carProject = null;
	}


	@Test
	void test_CarProject_has_Engine() {
		assertNotNull(carProject.getEngine());
		assertNotNull(carProject.getModel());
		
	}


}
