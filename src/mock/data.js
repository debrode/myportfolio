import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Thanks for visiting my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Debarun Roy,',
  subtitle: 'a Web Developer and a ML Enthusiast also a 4* Coder at Codechef',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1P-7XNCtZY67E7VoWff7z50MpQxyVnmyo/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Movie Rating and review',
    info: 'It is a Movie rating app Developed using React.js and API call from TheMovieDB',
    info2: 'Developed a Search engine to retrive movies from API',
    url: 'https://roymovierating.netlify.app/',
    repo: 'https://github.com/debrode/moviereatingsystem', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Weather APP',
    info: 'It is a weather app retrieved data from OpenWeather API ',
    info2: 'It is developed using HTML,CSS and Vanilla-JS ,used Geolocation to show weather Info.',
    url: 'https://debweather.netlify.app/',
    repo: 'https://github.com/debrode/Weather-APP', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Real Time Object Detector and tracker based on Deep Learning for Video Surveillance',
    info:
      'It is a custom dataset based Object detection and tracking system, developed using YOLOv3 framework(CNN) and Transfer learning for Object detection and Deep Sort mechanism for Object tracking. ',
    info2:
      'This Object tracking system can easily track moving objects in a Traffic heavy environment and can be used in a CCTV surveillance sytem.',
    url: 'https://drive.google.com/file/d/1Iy9AUvLt7r33uTf0O9yDIrbQ5aQlJMH5/view?usp=sharing',
    repo: 'https://drive.google.com/drive/folders/1mvaASX-xclq0_71l3SFe-7qOcrfYPrZP?usp=sharing', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'debarunroy15824@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/DevDebarun',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/debarun-roy-20288a122/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/debrode',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
