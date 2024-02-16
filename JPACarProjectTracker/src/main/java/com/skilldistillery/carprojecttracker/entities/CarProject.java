package com.skilldistillery.carprojecttracker.entities;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="car_project")
public class CarProject {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String model;
	private String engine;
	private String interior;
	private String exterior;
	private String suspension;
	
	public CarProject() {
		
	}
	
	public CarProject(int id, String model, String engine, String interior, String exterior, String suspension) {
		super();
		this.id = id;
		this.model = model;
		this.engine = engine;
		this.interior = interior;
		this.exterior = exterior;
		this.suspension = suspension;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEngine() {
		return engine;
	}
	public void setEngine(String engine) {
		this.engine = engine;
	}
	public String getInterior() {
		return interior;
	}
	public void setInterior(String interior) {
		this.interior = interior;
	}
	public String getExterior() {
		return exterior;
	}
	public void setExterior(String exterior) {
		this.exterior = exterior;
	}
	public String getSuspension() {
		return suspension;
	}
	public void setSuspension(String suspension) {
		this.suspension = suspension;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	@Override
	public String toString() {
		return "CarProject [id=" + id + ", model=" + model + ", engine=" + engine + ", interior=" + interior
				+ ", exterior=" + exterior + ", suspension=" + suspension + "]";
	}
	@Override
	public int hashCode() {
		return Objects.hash(engine, exterior, id, interior, model, suspension);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CarProject other = (CarProject) obj;
		return Objects.equals(engine, other.engine) && Objects.equals(exterior, other.exterior) && id == other.id
				&& Objects.equals(interior, other.interior) && Objects.equals(model, other.model)
				&& Objects.equals(suspension, other.suspension);
	}
	
	
	

}
