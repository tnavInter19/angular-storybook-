import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-card',
  template: `
    <div class="card border-radius-8 overflow-hidden shadow-md transition-shadow flex flex-col min-h-300">
      <div
        class="card-image relative h-180 bg-cover bg-center flex items-end justify-center p-16"
        [style.background-image]="'url(' + imageUrl + ')'"
        [style.background-color]="backgroundColor"
      >
        <div class="avatar-container w-60 h-60 rounded-full overflow-hidden border-2 border-white shadow-sm">
          <img [src]="avatarUrl" alt="Avatar" class="w-full h-full object-cover">
        </div>
      </div>
      <div class="card-content flex-1 p-16">
        <h3 class="card-title text-24 font-bold mb-8 text-gray-800">{{ title }}</h3>
        <div class="card-details text-16 mb-12 text-gray-600">{{ details }}</div>
        <div class="card-job-details text-14 text-gray-800">
          <div><strong>Company:</strong> {{ company }}</div>
          <div><strong>Location:</strong> {{ location }}</div>
          <div><strong>Salary:</strong> {{ salary }}</div>
        </div>
      </div>
    </div>
  `,
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
