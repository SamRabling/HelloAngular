import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  tasks = [];
  showTask = {};
  newTask: any;

  constructor(private _httpService: HttpService) {}
  tasksFromService(): void {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Here are our tasks!', data);
      this.tasks = data['data'];
    });
  }

  oneTask(id: string) {
    const observable = this._httpService.oneTask(id);
    observable.subscribe(data => this.showTask = data['data']);
  }

  addTask() {
    const observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log('new task', data);
      this.newTask = { title: '', description: '' };
      this.tasksFromService();
    });
  }

  editTask(id: string) {
    const observable = this._httpService.editTask(this.showTask);
    observable.subscribe(data => {
      console.log('updated task', data);
      this.showTask = {title: '', description: ''};
      this.tasksFromService();
    });
  }

  deleteTask(id: string) {
    const observable = this._httpService.deleteTask(id);
    observable.subscribe(data => this.deleteTask = data['data']);
  }

  ngOnInit() {
    this.newTask = { title: '', description: '' };
  }

  onSubmit() {

  }
}


