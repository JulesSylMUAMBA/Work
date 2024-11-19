import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TodoDTO {
  id: number;
  title: string;
  description?: string;
  priority: number;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly apiUrl = '/api/todos'; // Proxy Angular configuré

  constructor(private http: HttpClient) {}

  getTodos(): Observable<TodoDTO[]> {
    return this.http.get<TodoDTO[]>(this.apiUrl);
  }
  updateTodo(todo: TodoDTO): Observable<TodoDTO> {
    return this.http.put<TodoDTO>(`${this.apiUrl}/${todo.id}`, todo);
  }
}
