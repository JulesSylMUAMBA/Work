import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Nécessaire pour les directives comme *ngFor
import { TodoService } from '../services/todo.service'; // Import du service
import { TodoDTO } from '../services/todo.service'; // Modèle des données

@Component({
  selector: 'app-todo-list-page',
  standalone: true,
  imports: [CommonModule], // Ajout du module Angular de base
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css']
})
export class TodoListPageComponent implements OnInit {
  todos: TodoDTO[] = []; // Liste des todos

  constructor(private todoService: TodoService) {} // Injection du service

  ngOnInit(): void {
    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.todos = data; // Charge les données
        console.log('Todos chargés :', data);
      },
      error: (err) => {
        console.error('Erreur de chargement :', err); // Gère les erreurs
      }
    });
  }
}
