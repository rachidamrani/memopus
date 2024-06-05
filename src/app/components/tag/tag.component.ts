import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag',
  standalone: true,
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
  imports: [CommonModule]
})
export class TagComponent {
  @Input() tags: string[] = [];
  activeIndex: number | null = null;

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }
}