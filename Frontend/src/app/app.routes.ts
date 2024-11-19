import { Routes } from '@angular/router';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' }, // Redirection par défaut
  { path: 'todos', component: TodoListPageComponent },
];
