import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, Observable, take, throwError } from 'rxjs';
import { Course } from './models/courses.interface';

const baseURL: string = `${environment.baseUrl}/courses`;

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private http: HttpClient = inject(HttpClient);

  public get(currentPage: number, pageSize: number, category: string, search: string): 
    Observable<HttpResponse<any>> {
    let url = `${baseURL}?_page=${currentPage}&_limit=${pageSize}`
    if(category)
      url = `${url}&category=${category}`

    if(search)
      url = `${url}&q=${search}`
    return this.http.get<Course[]>(`${url}`, { observe: 'response'})
      .pipe(
        take(1),
        catchError(this.handleError)
      )
  }

  public getById(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${baseURL}/${id}`)
    .pipe(
      take(1),
      catchError(this.handleError)
    )
  }

  public post(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`${baseURL}`, course)
    .pipe(
      take(1),
      catchError(this.handleError)
    )
  }

  public put(id: number, course: Course): Observable<Course[]> {
    return this.http.put<Course[]>(`${baseURL}/${id}`, course)
    .pipe(
      take(1),
      catchError(this.handleError)
    )
  }

  public delete(id: number): Observable<Course[]> {
    return this.http.delete<Course[]>(`${baseURL}/${id}`)
      .pipe(
        take(1),
        catchError(this.handleError)
      )
  }


  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`
    } else {
      errorMessage = `Backend returned code: ${err.status}: ${err.message}`
    }
    console.error(err);
    return throwError(() => errorMessage);
  }

}
