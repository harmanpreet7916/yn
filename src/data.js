//  icons
import {

  FiLayout,
  FiPenTool,
  FiHash,
  FiChevronsUp
} from 'react-icons/fi';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.jpg';
import TestiImage2 from './assets/img/testimonials/testimonial-2.jpg';
import TestiImage3 from './assets/img/testimonials/testimonial-3.jpg';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'Detect',
    href: 'uploadImage',
  },
  {
    name: 'features',
    href: 'services',
  },
  {
    name: 'team',
    href: 'testimonials',
  },

];

// social
export const social = [
 
];
// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Fast Detection',
    description:
      'This app is lightening quick that can detect poses in just few seconds.',
  },
  {
    icon: <FiChevronsUp />,
    name: 'High Accuracy',
    description:
      'Highly accurate app with an accuracy level of more than 86%.',
  },
  {
    icon: <FiPenTool />,
    name: 'Easy Use',
    description:
      'Clean and Clearly designed UI for easy usage.',
  },
  {
    icon: <FiHash />,
    name: 'Multiple Poses',
    description:
      'Detects a wide variety of yoga poses which are 32 in number.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Computer science student at NIT Hamirpur, love to explore new technologies.  ',
    authorName: 'Harmanpreet Singh',
    authorPosition: 'Web Developer',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'I am a person who likes to contribute to innovative technological developments associated with solving some of the world’s biggest problems.',
    authorName: 'Harsh vardhan',
    authorPosition: 'AI/ML Devloper',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Aims to learn Technologies and automations to contribute in real world problems.',
    authorName: 'Keshav Kumar',
    authorPosition: 'App Developer',
  },
];