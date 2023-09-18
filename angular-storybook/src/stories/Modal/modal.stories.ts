import type { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from './modal.component';
import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/dom';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ModalComponent> = {
  title: 'Example/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  render: (args: ModalComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
  },
  
};

export default meta;
type Story = StoryObj<ModalComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default: Story = (args: ModalComponent) => ({
 props: {
   ...args,
 },
 template: `
   <app-modal [isOpen]="isOpen" [title]="title">
     <div>
       <h3>Modal Content</h3>
       <p>This is the content of the modal.</p>
       <ng-content></ng-content>
     </div>
   </app-modal>
 `,
});

Default.args = {
 isOpen: true,
 title: 'Sample Modal',
};


