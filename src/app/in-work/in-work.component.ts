import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-work',
  imports: [],
  templateUrl: './in-work.component.html',
  styleUrl: './in-work.component.css'
})
export class InWorkComponent {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/home']);
  }


}
