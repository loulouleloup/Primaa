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
  people: any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit() {
    
    this.getAllPeople();
  }

  // Add one person to the API
  addPerson(name: any, age: any) {
    this.http.post(`${this.API}/users`, {name, age})
      .subscribe(() => {
        this.getAllPeople();
      })
  }

  // Get all users from the API
  getAllPeople() {
    this.http.get(`${this.API}/users`)
      .subscribe((people: any) => {
        console.log(people)
        this.people = people
      })
  }

  


}
