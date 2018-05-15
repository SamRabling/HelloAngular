import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  tasks = [];
  showTasks = {};


  constructor(private _httpService: HttpService) {}
  ngOnInit() {
      this.tasksFromService();
    }
  tasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Here are our tasks!', data);
      this.tasks = data['data'];
    });
  }
  }


