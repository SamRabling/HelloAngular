import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
  }
  getTasks() {
    return this._http.get('/tasks');
    // const tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log('This are our tasks!', data));
  }

  oneTask(id: string) {
    return this._http.get(`/tasks/${id}`);
  }

  addTask(newtask) {
    return this._http.post('/tasks', newtask);
  }

  editTask(editedTask) {
    return this._http.post(`/tasks/${this.editedTask._id}`, editedTask);
  }

  deleteTask(deletedTask) {
    return this._http.post(`/tasks/delete/${this.deletedTask._id}`, deletedTask);
  }

}
