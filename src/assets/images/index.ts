// Image and video assets for the carousel
// Import your actual image and video files here

// Example imports (uncomment and update with your actual image files):
// import studentsClassroom from './students-classroom.jpg';
// import schoolCampus from './school-campus.jpg';
// import studentsStudying from './students-studying.jpg';
// import scienceLab from './science-lab.jpg';

import i1 from './i1.jpg';
import i2 from './i2.jpg';
import music from './music.jpg';
import vid1 from './vid1.mp4';

interface CarouselItem {
  url: string;
  alt: string;
  caption: string;
  type: 'image' | 'video';
}

export const carouselImages: CarouselItem[] = [
  {
    url: i1,
    alt: 'Image 1',
    caption: 'Excellence in Academic Learning',
    type: 'image'
  },
  {
    url: i2,
    alt: 'Image 2',
    caption: 'Beautiful Modern Campus',
    type: 'image'
  },
  {
    url: vid1,
    alt: 'School activities video',
    caption: 'Dynamic Learning Environment',
    type: 'video'
  },
  {
    url: music,
    alt: 'Music and arts',
    caption: 'Creative Arts and Music Program',
    type: 'image'
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