// Image assets for the carousel
// Import your actual image files here

// Example imports (uncomment and update with your actual image files):
// import studentsClassroom from './students-classroom.jpg';
// import schoolCampus from './school-campus.jpg';
// import studentsStudying from './students-studying.jpg';
// import scienceLab from './science-lab.jpg';

import studentsClassroom from './students-classroom.jpg';
import image1 from './image1.png';

export const carouselImages = [
  {
    url: studentsClassroom,
    alt: 'Students in classroom',
    caption: 'Excellence in Academic Learning'
  },
  {
    url: image1,
    alt: 'School campus',
    caption: 'Beautiful Modern Campus'
  },
  {
    url: studentsClassroom, // Using the same image for now, replace with actual image
    alt: 'Students studying',
    caption: 'Collaborative Learning Environment'
  },
  {
    url: image1, // Using the same image for now, replace with actual image
    alt: 'Science laboratory',
    caption: 'State-of-the-Art Facilities'
  }
];

// Alternative approach using imports (recommended):
// export const carouselImages = [
//   {
//     url: studentsClassroom,
//     alt: 'Students in classroom',
//     caption: 'Excellence in Academic Learning'
//   },
//   {
//     url: schoolCampus,
//     alt: 'School campus',
//     caption: 'Beautiful Modern Campus'
//   },
//   {
//     url: studentsStudying,
//     alt: 'Students studying',
//     caption: 'Collaborative Learning Environment'
//   },
//   {
//     url: scienceLab,
//     alt: 'Science laboratory',
//     caption: 'State-of-the-Art Facilities'
//   }
// ]; 