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
// export class DialogOverviewExampleDialog {
//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }
export class TodoListComponent {

  todos: any;
  todoName: string = ""
  completedTodo: any = []
  animal: string = "";
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

  updateTodo() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

