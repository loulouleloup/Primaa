import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-client';

  API = 'http://localhost:3000';
  data: any;

  constructor(private http: HttpClient){}

  ngOnInit() {
  }

  
  clickMe() {
    this.http.get(`${this.API}/someData`)
      .subscribe((data: any) => {
        console.log("data",data);
        this.data = data;
      })
  }
}
