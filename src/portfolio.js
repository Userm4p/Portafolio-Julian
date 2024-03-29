/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Julian Parada",
  title: "Hola, Mi nombre es Julian Esteban Parada",
  subTitle: emoji(
    "Un apasionado Full Stack Software Developer, 🚀 tengo experiencia construyendo aplicaciones Web y Mobiles con JavaScript / Reactjs / Angular / Nodejs  y algunas otras geniales bibliotecas y frameworks.",
  ),
  resumeLink:
    "https://drive.google.com/file/d/1OwK7DDOw9UzDT_hyNxTK6Nkq-oUcSkP7/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Userm4p/",
  linkedin: "https://www.linkedin.com/in/julián-esteban-parada-puerto-4a102b222/",
  gmail: "julianestebanparada@gmail.com",
  
  facebook: "https://www.facebook.com/julianestebanparada",
  
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Lo que hago",
  subTitle: "DESARROLLADOR FULL STACK QUE QUIERE EXPLORAR TODAS LAS TECNOLOGIAS",
  skills: [
    emoji(
      "⚡ Desarrollo de interfaces de usuario Front End / altamente interactivas para sus aplicaciones web y móviles",
    ),
    emoji("⚡ Aplicaciones web progresivas ( PWA ) en stacks SPA normales"),
    emoji(
      "⚡ Integración de servicios de terceros como Firebase/ AWS / Digital Ocean / Heroku"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad del Magdalena",
      logo: require("./assets/images/unimagdalena.png"),
      subHeader: "Ingenieria Electronica",
      duration: "2019 - Presente",
      desc: "Beca completa por excelencia academica",
      descBullets: [
        // "",
        // "",
      ]
    },
    {
      schoolName: "Udemy",
      logo: "https://i.imgur.com/z7TsXZn.png",
      subHeader: "Never Stop learning",
      duration: "2020 - Presente",
      desc: "Cursos de desarrollo web, manejo de servidores, entre otras mas",
      // descBullets: [""]
    },
    {
      schoolName: "Platzi",
      logo: "https://static.platzi.com/ui/assets/image/isotipoPlatzi093f27a2fb00922bb105.png",
      subHeader: "Never Stop learning",
      duration: "2021 - Presente",
      desc: "Cursos de desarrollo web, mobile, soft skills, entre otras mas",
      // descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section


export const images = {
  img : [
      {
        src: "https://i.imgur.com/QuOY00x.png",
        href: "https://clock-react-app.netlify.app",
        title: "Clock App",
        description: "Es una aplicación web completamente responsive que nos permite visualizar un reloj en base a la relación de aspecto que tenga tu pantalla, siendo que en el caso de que la resolución sea mayor o menor a 1024px el reloj cambiara completamente de aspecto. Fue desarrollada usando React con typescript y CSS"
      },
      {
        src : "https://i.imgur.com/zUIKd3r.png",
        href : "https://github.com/Userm4p/HeroesApp",
        title : "Heroes App",
        description: "Es un landing page en donde se podrá encontrar una lista de los superheroes más conocidos de las franquicias de Marvel y DC comics, en donde haciendo click en cada una de sus respectivas tarjetas se puede acceder a una información más detallada."
      },
      {   
        src : "https://i.imgur.com/HC59HXp.png",
        href : "https://angular-julian-gifs-app.netlify.app",
        title : "Buscador de gifs - Angular" , 
        description: "Buscador de gifs hecho con Angular haciendo peticiones a una API de tipo REST que provee GIPHY, una de las más populares y que usan muchas redes sociales como WhatsApp, Facebook, Instagram, etc."
      },
      {   
        src : "https://i.imgur.com/K93Xanj.png",
        href : "https://userm4p.github.io/React-Buscador-de-gifs/",
        title : "Buscador de gifs - React" , 
        description: "Buscador de gifs hecho con React haciendo peticiones a una API de tipo REST que provee GIPHY, una de las más populares y que usan muchas redes sociales como WhatsApp, Facebook, Instagram, etc."
      },
      {
        src : "https://i.imgur.com/NqlgO2i.png",
        href : "https://countrysapp.netlify.app",
        title : "Countries App - React",
        description: "Es una aplicación web que nos permite ver todos los países de la tierra, con sus respectivas capitales, población, bandera, etc. Fue diseñada con React, React-Router-Dom y Bootstrap, la información de los países fue extraída de una API REST. Cuenta con paginacion, búsqueda por nombre del país y una pagina de información para cada país."
      },
      {
        src : "https://i.imgur.com/mu1soet.png",
        href : "https://julian-paises-app-angular.netlify.app",
        title : "Countries App - Angular",
        description: "Es una aplicación web que nos permite ver todos los países de la tierra, con sus respectivas capitales, población, bandera, etc. Fue diseñada con Angular 14 haciendo uso del modulo de peticiones HTTPS, el modulo de rutas y pipes, la información de los países fue extraída de una API REST. Cuenta búsqueda por nombre del país, secciones para buscar por diferentes categorías, barra de búsqueda con autocompletado y una pagina de información para cada país."
      },
      {
        src : "https://i.imgur.com/hdjCUFz.png",
        href : "https://marvel-challenge-app.netlify.app",
        title : "Marvel App",
        description: "Es una aplicación web completamente responsive que nos permite ver comics, series, personajes e historia de Marvel, con sus respectivas imágenes, descripciones y mas. Fue diseñada con React, Redux, React-Router-Dom y CSS, la información de los personajes fue extraída de una API REST. Cuenta con búsqueda por nombre del personaje y diferentes categorías."
      },
      {
        src: "https://i.imgur.com/pOnNtvI.png",
        href: "https://movies-app-julianp.netlify.app",
        title: "Movies App",
        description: "Es una aplicación web que nos permite ver las películas mas populares y añadir películas a nuestros favoritos con sus respectivas imágenes, descripciones, comentarios de los usuarios y mas, la aplicación cuenta con un login completamente funcional que funciona en base al sistema de usuarios de The Movies DB. Fue diseñada con React, Redux, React-Router-Dom y CSS, la información de las películas fue extraída de una API REST"
      },
      {
        src:"/Royal-films.jpg",
        href:"https://royal-films.com/cartelera/",
        title: "Royal Films",
        description:"Esta aplicación fue desarrollada por mi junto con el equipo de PNG web technologies con la tecnología de angular en el front y NodeJS con sequalize en el backend y las bases de datos estaban en sql server, su función es manejar toda la infraestructura digital de la compañía Royal Films desde el area de ventas hasta la gestión de inventario y personal "
      }
      
  ]
}

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
  ]
};



const openSource = {
  showGithubProfile: "false", 
  display: true 
};

// Some big projects you have worked on

const bigProjects = {
  title: "Grandes Proyectos",
  subtitle: "ALGUNAS STARTUPS Y EMPRESAS A LAS QUE AYUDÉ A CREAR SU TECNOLOGÍA",
  projects: [
    {
      image: "https://i.imgur.com/ryrTRD2.png",
      projectName: "Parangón",
      projectDesc: "Fullstack Developer",
    },
    {
      image:"https://media-exp1.licdn.com/dms/image/C4E0BAQGW-pd52Nihcw/company-logo_200_200/0/1568133506441?e=2147483647&v=beta&t=MFDfKsyHIcZ9veB_wOT15bEY7aK99MUzwDpurxuIrcw",
      projectName: "Png technologies solution",
      projectDesc: "Fullstack Developer - Fullstack Semi Senior Developer",
    },
    {
      image: "/C4C7US_LOGO_512x512-07.png",
      projectName: "C4C7US",
      projectDesc: "Senior Frontend Developer",
    },
  ],
  display: true 
};



const blogSection = {
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactame ☎️"),
  subtitle:
"  ¿Deseas discutir un proyecto o simplemente decir hola? Mi bandeja de entrada está abierta para todos.",
  number: "+57-3045484475",
  email_address: "julianestebanparada@gmail.com"
};



const twitterDetails = {
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  // achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
