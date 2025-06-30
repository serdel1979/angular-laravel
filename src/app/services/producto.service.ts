import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'http://localhost:8000/api/productos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  create(producto: { nombre: string; precio: number }): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }

  update(id: number, producto: { nombre: string; precio: number }): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
