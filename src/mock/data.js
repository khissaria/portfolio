import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Khissaria', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kaushal Hissaria',
  subtitle: 'I am a Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  
  paragraphOne: 'I am a full stack web developer,currently based in Mumbai with 3 years of experience, with a flair for creating elegant solutions in the least amount of time. Developed multiple in-house applications for client to ease the business processes and delivered multiple RPA Bots to increase productivity. Passionate about web  development and Automation.',
 
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'babyover.PNG',
    title: 'Tabular Quiz App',
    info: 'Build with React JS, it is a Sporcle like time based Quiz based on Cricket. It reads the data out of config file and display Quiz data dynamically.',
    info2: '',
    url: 'https://babyover.netlify.app/',
    repo: 'https://github.com/khissaria/quiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cryptoBoard.PNG',
    title: 'CryptoBoard',
    info: 'Build with ReactJS and Node JS, this application tracks the user crypto portfolio with real time prices. User can login and add the desired cryptocurrency in their portfolio and track the real time profit/loss they made.',
    info2: '',
    url: 'https://khissaria-cryptoboard.netlify.app/',
    repo: 'https://github.com/khissaria/cryptoBoard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'moneyManager.PNG',
    title: 'Money Manager',
    info: 'This app is developed with ReactJS and Node JS. This application is used to track the money of the user ranging from income, expenses and savings.',
    info2: '',
    url: 'https://khissaria-money-manager.netlify.app/',
    repo: 'https://github.com/khissaria/moneyManager', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'things2do.PNG',
    title: 'things2do',
    info: 'This app is developed with ReactJS and Node JS. Users can share the experiences they had while travelling and plan their travel seeing the experiences people had for a certain city. ',
    info2: '',
    url: 'https://khissaria-travel.netlify.app/',
    repo: 'https://github.com/khissaria/travel', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo.PNG',
    title: 'To Do List',
    info: 'Developed with ReactJS and Node JS. This application is used to track the the tasks user needs to complete. User can change the status of the tasks based and plan their tasks accordingly by setiing the priority of the task.',
    info2: '',
    url: 'https://todo-list-app-khissaria.netlify.app/',
    repo: 'https://github.com/khissaria/ToDoList', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kaushalhissaria24@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
