import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {

  featuredProductId: number | any;

  constructor() {
    this.featuredProductId = Math.floor(Math.random() * 100) + 1;
  }

}
