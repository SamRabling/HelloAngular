import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
});

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

  ngOnInit() {
    this.newTask = { title: '', description: '' };
  }

  onSubmit() {
    const observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
    console.log('new task', data);
      this.newTask = { title: '', description: '' };
    });
  }
}


