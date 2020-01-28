import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { People } from "../Models/People";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  Url='http://localhost:8080/back-end/people';

  getPeople(){
    console.log("esta conectado")
    return this.http.get<People[]>(this.Url)
  }
}
