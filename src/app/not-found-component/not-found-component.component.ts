import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-not-found-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './not-found-component.component.html',
  styleUrl: './not-found-component.component.css'
})
export class NotFoundComponentComponent {

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/home']);
  }
}
