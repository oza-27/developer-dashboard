import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  collapsed = false;

  constructor(private router: Router) { }

  // Check active route for the indicator
  isActiveRoute(route: string) {
    return this.router.url === route;
  }
}
