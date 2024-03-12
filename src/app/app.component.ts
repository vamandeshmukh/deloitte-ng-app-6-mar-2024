import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from './components/menubar/menubar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarComponent],
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








