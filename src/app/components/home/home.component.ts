import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isAllowed = true;
  firstName = 'Sonu';
  lastName = 'Reddy';
  salary = 10.5;
  emp = { eid: 101, fName: 'Monu' }

  personName = '';



  constructor() {
    setTimeout(() => {
      this.isAllowed = false;
    }, 5000);
  }

  viewName = () => {
    this.personName = 'Tonu';
  };




}


