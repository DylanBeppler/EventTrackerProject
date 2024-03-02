import { Project } from './../models/project';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
private url = environment.baseUrl + 'api/projects';

constructor(
private http: HttpClient

  ) { }

index(): Observable<Project[]> {
  return this.http.get<Project[]>(this.url).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error('ProjectService.index(): error retrieving project: ' + err)
        );
      })
      );
    }


    create(project: Project): Observable<Project> {
      console.log(project);
      return this.http.post<Project>(this.url, project).pipe(
        catchError((err: any) => {
          console.error(err);
          return throwError(
             () => new Error( 'ProjectService.create(): error creating Project: ' + err )
          );
        })
      );
    }

    update(project: Project): Observable<Project> {
      const updateUrl='${this.url}/${project.id}';
      return this.http.put<Project>(updateUrl, project).pipe(
        catchError((err: any) => {
          console.error(err);
          return throwError(
            () => Error('ProjectService.update(): error updating project: ' + err)
          );
        })
      );
    }



    destroy(id: number): Observable<void> {
      const deleteUrl = '${this.url}/${id}';
      return this.http.delete<void>(deleteUrl).pipe(
        catchError((err: any) => {
          console.error('projectService.destroy(): error deleting project', err);
          return throwError(() => new Error('projectService.destroy(): error deleting project: ' + err));
        })
      );
    }
  }







