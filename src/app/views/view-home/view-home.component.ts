import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss'],
})
export class ViewHomeComponent {
  constructor(private router: Router) {}

  handleViewComponents(): void {
    this.router.navigate(['components']);
  }
}
