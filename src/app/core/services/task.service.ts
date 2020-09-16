import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  private tasksCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<Task[]>;

  private taskDoc: AngularFirestoreDocument<Task>;

  constructor(
    private afs: AngularFirestore
  ) {
  }

  getTasks(userId: string): Observable<Task[]>{
    this.tasksCollection = this.afs.collection<Task>('tasks', ref => {
      return ref.where('userId', '==', userId);
    });
    this.tasks = this.tasksCollection.snapshotChanges()
    .pipe(
      map(actions => actions
        .map(a => {
        const data = a.payload.doc.data() as Task;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasksCollection.add(task);
  }

  deleteTask(task: Task): void{
    this.taskDoc = this.afs.doc<Task>(`tasks/${task.id}`);
    this.taskDoc.delete();
  }

  editTask(task: Task): void{
    this.taskDoc = this.afs.doc<Task>(`tasks/${task.id}`);
    this.taskDoc.update(task);
  }

}
