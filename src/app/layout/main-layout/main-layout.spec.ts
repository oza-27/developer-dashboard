import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MainLayout } from './main-layout';

@Component({ template: '' })
class Dummy {}

describe('MainLayout', () => {
  let component: MainLayout;
  let fixture: ComponentFixture<MainLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayout],
      providers: [
        provideRouter([
          { path: '', component: Dummy },
          { path: 'frontend', component: Dummy },
          { path: 'backend', component: Dummy },
          { path: 'ai', component: Dummy },
          { path: 'projects', component: Dummy },
          { path: 'architecture', component: Dummy },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MainLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
