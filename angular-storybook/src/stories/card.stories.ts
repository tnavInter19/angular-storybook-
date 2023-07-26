import type { Meta, StoryObj } from '@storybook/angular';

import CardComponent from './card.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CardComponent> = {
  title: 'Example/Card',
  component: CardComponent,
  tags: ['autodocs'],
  render: (args: CardComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<CardComponent>;


export const Default:Story={
 args: {
  title: 'Example Card',
  details: 'This is a simple example of a responsive card component in Angular with Storybook.',
  company: 'Example Company',
  location: 'Example Location',
  salary: '$100,000',
  imageUrl: 'https://th.bing.com/th/id/OIP.CmnOtzYtc1nihZIsga_KBwHaEK?pid=ImgDet&rs=1',
  backgroundColor: '#f0f0f0',
  avatarUrl:'https://i1.wp.com/www.talkmobiledev.com/wp-content/uploads/2016/12/Screen-Shot-2016-12-10-at-9.23.49-PM.png?resize=453%2C378',
  textColor: '#333',
 },
};


export const Customized:Story={
 args: {
  title: 'Customized Card',
  details: 'This card is customized with different colors and job details.',
  company: 'Custom Company',
  location: 'Custom Location',
  salary: '$80,000',
  imageUrl: 'https://via.placeholder.com/400x200',
  backgroundColor: '#007bff', // Blue background
  textColor: '#fff', // White text color
 },
};

