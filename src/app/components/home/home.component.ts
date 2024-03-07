import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor() {
    setTimeout(() => {
      this.isAllowed = false;
    }, 5000);
  }

  isAllowed = true;
  firstName = 'Sonu';
  lastName = 'Reddy';
  salary = 10.5;

  emp = { eid: 101, fName: 'Monu' }



}


