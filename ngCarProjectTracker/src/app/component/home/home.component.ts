import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];
  newProject: Project = new Project();
  editProject: Project | null = null;
  showModal: boolean = false;
  selectedProject: Project | null = null;

  constructor(private projectService: ProjectService) {}

  setEditProject(): void {
    this.editProject = Object.assign({}, this.selectedProject);
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  closePopup(): void {
   this.selectedProject = null;
    this.showModal = false;
  }

  showDetails(project: Project): void {
    this.editProject = project;
  }


  selectProject(project: Project): void {
    this.selectedProject = project;
    this.showModal = true;
    console.log('Editing project:', project)
  }

  loadProjects() {
    this.projectService.index().subscribe({
      next: (projectList) => {
        this.projects = projectList;
        console.log(this.projects);
      },
      error: (err) => console.error('ProjectListComponent.loadProjects: error'),
    });
  }

  addProject(project: Project): void {
    console.log(project);
    this.projectService.create(project).subscribe({
      next: (result) => {
        this.newProject = new Project();
        this.loadProjects();
      },
      error: (nojoy) => {
        console.error(
          'ProjectListHttpComponent.addProject(): error creating project:'
        );
        console.error(nojoy);
      },
    });
  }

  updateProject(): void {
    this.projectService.update(this.selectedProject!).subscribe({
      next: (project) => {
        const index = this.projects.findIndex(p => p.id === project.id);
        if (index !== -1) {
          this.projects[index] = project;
        }
        this.selectedProject = null;
      },
      error: (err) => console.error(err)
    });
  }

  deleteProject(projectId: number): void {
    this.projectService.destroy(projectId).subscribe({
      next: () => this.loadProjects(),
      error: (err) => console.error(err),
    });
  }
}
