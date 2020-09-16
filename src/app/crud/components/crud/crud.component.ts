import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { TaskService } from '../../../core/services/task.service';
import { AuthService } from './../../../core/services/auth.service';

import { Task } from './../../../models/task.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  form: FormGroup;
  tasks: Task[] = [];

  task: Task = {
    name : '',
    completed: false
  };

  editTask: Task;

  userId: string;

  constructor(
    private roter: Router,
    private authService: AuthService,
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.authService.hasUser()
    .subscribe(state => {
      if (state != null){
        this.userId = state.uid;
        this.getTasks(this.userId);
      }
    });
  }

  addItem(event: Event): void{
    event.preventDefault();
    this.task.userId = this.userId;
    this.taskService.addTask(this.task);
    this.task.name = '';
  }

  delate(task: Task): void{
    this.taskService.deleteTask(task);
  }

  edit(task: Task): void{
    this.editTask = task;
  }

  addItemEdit(event: Event): void{
    event.preventDefault();
    this.taskService.editTask(this.editTask);
  }

  logout(): void {
    this.authService.logout()
    .then(() => {
      this.roter.navigate(['/']);
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      text: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get textField(): AbstractControl{
    return this.form.get('text');
  }

  private getTasks(userId: string): void {
    this.taskService.getTasks(userId)
    .subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}
