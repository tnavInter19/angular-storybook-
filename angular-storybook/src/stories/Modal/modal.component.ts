import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
  <div
  class="fixed inset-0 flex items-center justify-center z-50"
  [class.hidden]="!isOpen"
>
  <div class="modal-overlay fixed inset-0 bg-black opacity-40"></div>
  <div class="modal-container bg-white mx-auto rounded-lg shadow-lg z-50 overflow-y-auto relative">
    <div class="modal-content py-4 text-left px-6">
    <div class="modal-header mb-4 relative flex justify-between items-center">
    <h2 class="text-2xl font-semibold">{{ title }}</h2>
    <button
      (click)="onCloseModal()"
      class="text-gray-600 hover:text-gray-800 focus:outline-none transition duration-150"
    >
      &times;
    </button>
  </div>
      <div class="modal-body">
        <!-- Your modal content goes here -->
        <ng-content></ng-content>
      </div>
      <div class="modal-footer mt-4">
        <button
          (click)="onCloseModal()"
          class="bg-gray-400 text-white hover:bg-gray-500 px-4 py-2 rounded-md mr-2"
        >
          Close
        </button>
        <button
          class="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</div>
  `,
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  onCloseModal() {
    this.close.emit();
  }
}
