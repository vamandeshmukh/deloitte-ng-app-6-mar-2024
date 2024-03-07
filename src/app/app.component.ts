import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'deloitte-ng-app';
}

// @Component({})

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   // templateUrl: './app.component.html',
//   template: `<p>App component works!</p>`
// })








