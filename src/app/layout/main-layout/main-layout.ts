import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { Navbar } from '../navbar/navbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [Sidebar, Navbar,RouterModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
