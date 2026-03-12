import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface NavItem {
  route: string;
  label: string;
  icon: string;
  exact?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  private readonly router = inject(Router);
  collapsed = false;

  readonly navItems: NavItem[] = [
    { route: '/', label: 'Dashboard', icon: '🏠', exact: true },
    { route: '/frontend', label: 'Frontend Skills', icon: '💻' },
    { route: '/backend', label: 'Backend Skills', icon: '🛠️' },
    { route: '/ai', label: 'AI Skills', icon: '🤖' },
    { route: '/projects', label: 'Projects', icon: '📁' },
    { route: '/architecture', label: 'Architecture', icon: '🏗️' },
  ];

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}
