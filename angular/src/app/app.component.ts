import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks = [];
  showTask = {};


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
  }


