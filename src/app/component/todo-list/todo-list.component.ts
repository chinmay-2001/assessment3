import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export interface DialogData {
  name: string;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {

  todos: any;
  todoName: string = ""
  completedTodo: any = []

  name: string = "";


  constructor(private http: HttpClient, public dialog: MatDialog) {
    this.http.get('http://localhost:3000/api/getodo').subscribe(ev => this.todos = ev)
  }

  creatTodo() {
    this.http.post('http://localhost:3000/api/createTodo', { todo: this.todoName }).subscribe(ev => console.log(ev))
    this.http.get('http://localhost:3000/api/getodo').subscribe(ev => this.todos = ev)
  }

  deleteEmployee(id: number) {
    this.http.delete(`http://localhost:3000/api/deletetodo/${id}`).subscribe(ev => console.log(ev))
  }
  onComplete(todo: any) {
    this.completedTodo.push(todo)
  }
  setTodo: any;
  updateTodoName: string = ""
  setodo(todo: any) {
    console.log("inside set todo")
    this.setTodo = todo
  }
  updateTodo() {
    this.http.put(`http://localhost:3000/api/updatetodo/${this.setTodo._id}`, { Name: this.updateTodoName }).subscribe(ev => console.log(ev))
  }






}

