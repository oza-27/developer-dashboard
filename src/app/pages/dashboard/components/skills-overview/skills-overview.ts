import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../dashboard.data';

@Component({
  selector: 'app-skills-overview',
  imports: [CommonModule],
  templateUrl: './skills-overview.html',
})
export class SkillsOverview {
  @Input({ required: true }) skills: Skill[] = [];
}
