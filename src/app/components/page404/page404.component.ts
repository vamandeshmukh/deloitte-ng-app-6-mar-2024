
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [],
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.css'
})
export class Page404Component {

  testId: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.testId = activatedRoute.snapshot.queryParamMap.get('id');
    console.log(this.testId);
  }

}

// ActivatedRoute
// http://localhost:4200/somepath?id=22