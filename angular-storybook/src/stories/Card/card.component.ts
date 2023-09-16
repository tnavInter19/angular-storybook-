import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-card',
  imports: [CommonModule],
  template: `<div class="card">
  <div class="card-image" [style.background-image]="'url(' + imageUrl + ')'" [style.background-color]="backgroundColor">
    <div class="avatar-container">
      <img [src]="avatarUrl" alt="Avatar" class="avatar">
    </div>
  </div>
  <div class="card-content">
    <h3 class="card-title">{{ title }}</h3>
    <div class="card-details">{{ details }}</div>
    <div class="card-job-details">
      <div><strong>Company:</strong> {{ company }}</div>
      <div><strong>Location:</strong> {{ location }}</div>
      <div><strong>Salary:</strong> {{ salary }}</div>
    </div>
  </div>
</div>`,
  styleUrls: ['./card.css'],
})
export default class CardComponent {
 @Input() title?: string;
 @Input() details?: string;
 @Input() company?: string;
 @Input() location?: string;
 @Input() salary?: string;
 @Input() imageUrl?: string;
 @Input() avatarUrl?: string;
 @Input() backgroundColor?: string;
 @Input() textColor?: string;
}