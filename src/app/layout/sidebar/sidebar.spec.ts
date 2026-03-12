import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { Sidebar } from './sidebar';

@Component({ template: '' })
class Dummy {}

describe('Sidebar', () => {
  let component: Sidebar;
  let fixture: ComponentFixture<Sidebar>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar],
      providers: [
        provideRouter([
          { path: '', component: Dummy },
          { path: 'projects', component: Dummy },
          { path: 'backend', component: Dummy },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Sidebar);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    await router.navigateByUrl('/projects');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect active route correctly', () => {
    expect(component.isActiveRoute('/projects')).toBe(true);
    expect(component.isActiveRoute('/backend')).toBe(false);
  });
});
