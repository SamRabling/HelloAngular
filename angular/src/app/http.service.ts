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

  addTask(newTask) {
    return this._http.post('/tasks', newTask);
  }

  editTask(updatedTask) {
    return this._http.post(`/tasks/${updatedTask._id}`, updatedTask);
  }

  deleteTask(destroyedTask) {
    return this._http.post(`/tasks/delete/${destroyedTask._id}`, destroyedTask);
  }

}
