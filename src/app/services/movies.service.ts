import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MoviesService {
    private apiUrl = 'http://localhost:3000/peliculas'; 

    constructor(private http: HttpClient) {}

    getMovies(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}
