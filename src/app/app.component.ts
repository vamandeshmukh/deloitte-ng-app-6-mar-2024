import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })

// @Component({})

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  template: `<p>App component works!</p>`
})
export class AppComponent {

  title = 'deloitte-ng-app';
  firstName = 'Sonu';

}








