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
    "Un apasionado Full Stack Software Developer, 🚀 tengo experiencia construyendo aplicaciones Web y Mobiles con JavaScript / Reactjs / Nodejs  y algunas otras geniales bibliotecas y frameworks.",
  ),
  resumeLink:
    "https://drive.google.com/file/d/19vV460sAsv7EROumpyY2aAOKZlTW_3kW/view?usp=sharing", // Set to empty to hide the button
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
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section


export const images = {
  img : [
      {   
          src : "https://i.imgur.com/nT2Nwg1.png",
          href : "https://blais3pasc4l.github.io/salon_app/",
          title : "Salon App",
          description: "Aplicacion web para gestionar salones de belleza haciendo uso unicamente de html y css nativos"
      },
      {   
          src : "https://i.imgur.com/lzeHH6L.png",
          href : "https://blog-caf.netlify.app//",
          title : "Blog App",
          description: "Blog enfocado en demostrar mis conocimientos en html y css nativos"
      },
      {   
        src : "https://i.imgur.com/yxYerji.png",
        href : "https://blais3pasc4l.github.io/Edm-y-Rock/",
        title : "Rock and EDM",
        description: "Pagina web para promocionar un festival de rock y edm desarrollada con el objetivo de poner en practica mis conocimientos en UX/UI"
      },
      {   
          src : "https://i.imgur.com/K93Xanj.png",
          href : "https://userm4p.github.io/React-Buscador-de-gifs/",
          title : "Buscador de gifs" , 
          description: "Buscador de gifs hecho con React haciendo peticiones a una API de tipo REST que provee GIPHY, una de las más populares y que usan muchas redes sociales como WhatsApp, Facebook, Instagram, etc."
      },
      {
        src : "https://i.imgur.com/zUIKd3r.png",
        href : "https://github.com/Userm4p/HeroesApp",
        title : "Heroes App",
        description: "Es un landing page en donde se podrá encontrar una lista de los superheroes más conocidos de las franquicias de Marvel y DC comics, en donde haciendo click en cada una de sus respectivas tarjetas se puede acceder a una información más detallada."
      },
      {
        src : "https://i.imgur.com/NqlgO2i.png",
        href : "https://countrysapp.netlify.app",
        title : "Countrys App",
        description: "Es una aplicación web que nos permite ver todos los paises de la tierra, con sus respectivas capitales, poblacion, bandera, etc. Fue diseñada con React, React-Router-Dom y Bootstrap, la informacion de los paises fue extraida de una API REST. Cuenta con paginacion, busqueda por nombre del país y una pagina de información para cada país."
      },
      {
        src : "https://i.imgur.com/hdjCUFz.png",
        href : "https://marvel-challenge-app.netlify.app",
        title : "Marvel App",
        description: "Es una aplicación web completamente responsive que nos permite ver comics, series, personajes e historia de Marvel, con sus respectivas imagenes, descripciones y mas. Fue diseñada con React, Redux, React-Router-Dom y CSS, la informacion de los personajes fue extraida de una API REST. Cuenta con busqueda por nombre del personaje y diferentes categorias."
      },
      {
        src: "https://i.imgur.com/pOnNtvI.png",
        href: "https://movies-app-julianp.netlify.app",
        title: "Movies App",
        description: "Es una aplicación web que nos permite ver las peliculas mas populares y añadir peliculas a nuestros favoritos con sus respectivas imagenes, descripciones, comentarios de los usuarios y mas, la aplicación cuenta con un login completamente funcional que funciona en base al sistema de usuarios de The Movies DB. Fue diseñada con React, Redux, React-Router-Dom y CSS, la informacion de las peliculas fue extraida de una API REST"
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
      projectDesc: "Desarollor de React.js",
    },
    {
      image:"https://media-exp1.licdn.com/dms/image/C4E0BAQGW-pd52Nihcw/company-logo_200_200/0/1568133506441?e=2147483647&v=beta&t=MFDfKsyHIcZ9veB_wOT15bEY7aK99MUzwDpurxuIrcw",
      projectName: "Png technologies solution",
      projectDesc: "Desarollador Frontend",
    }
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
