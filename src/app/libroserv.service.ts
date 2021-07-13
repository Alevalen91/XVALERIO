import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Libro } from './libro';



@Injectable({
  providedIn: 'root'
})
export class LibroservService {
  HttpClient: any;
  constructor(private http: HttpClient ){}
  getlibri(): Observable <Libro>  {
    return this.http.get<Libro>('http://192.168.1.195:8087/libri/2')
    }     
      
}


