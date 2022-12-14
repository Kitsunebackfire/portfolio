import instagram from "../../assets/projectImages/instagram.jpg";
import resume from "../../assets/projectImages/resume.jpg";
import signUpForm from "../../assets/projectImages/signUpForm.jpg";
import weather from "../../assets/projectImages/weather.jpg";
import portfolio from "../../assets/projectImages/portfolio.jpg";
import bobaProject from "../../assets/projectImages/bobaProject.png";
const projectsMade = [
  {
    projectName: "Boba-Depot ",
    key: "p01",
    src: bobaProject,
    alt: "portfolio website",
    website: "#",
    github: "https://github.com/Kitsunebackfire/boba_project",
    description:
      "This app is one of the most recent apps that I have built on my backend development journey. It utilizes nodeJs, amazon AWS S3 for image storage, mongoDb, and ejs. I initially ran into issues getting images to upload to mongoDB, so I instead opted to learn AWS S3 to solve my image uploading troubles. There is no website link due to heroku eliminating its free service. Once I find another provider, I'll update the link.",
  },
  {
    projectName: "Portfolio Website",
    key: "p0",
    src: portfolio,
    alt: "portfolio website",
    website: "https://kitsunebackfire.github.io/portfolio/",
    github: "https://github.com/Kitsunebackfire/portfolio",
    description:
      "This is the app you are currently viewing. It's my portfolio app that I built using ReactJs, Redux, ReactRouter v6, and basic javascript. This really stretched my css muscles out due to the different layouts within it. I implemented color theory principles to maintain a cohesive color theme.",
  },
  {
    projectName: "Instagram Clone",
    key: "p1",
    src: instagram,
    alt: "instagram clone",
    website: "https://instagram-clone-6438d.web.app/",
    github: "https://github.com/Kitsunebackfire/instagramClone",
    description:
      "This is an Instagram clone I built using ReactJs, ReactRouter v6, and Firebase Hosting for my backend. This presented many challenges as a lot of the guides on how to implement things were deprecated. This forced me to grow considerably since I had to infer and apply a lot of information from the firebase docs.",
  },
  {
    projectName: "Resume App",
    key: "p2",
    src: resume,
    alt: "resume application",
    website: "https://kitsunebackfire.github.io/resumeResizableWithRedux/",
    github: "https://github.com/Kitsunebackfire/resumeResizableWithRedux",
    description:
      "This is a Resume app I built using ReactJs, Redux, and basic javascript. It was one of the first applications that I tried to make responsive through grid auto-fit and media queries. I used the react testing library extensively in this application due to all the inputs that output information.",
  },
  {
    projectName: "Sign Up Form",
    key: "p3",
    src: signUpForm,
    alt: "dummy sign up form",
    website: "https://kitsunebackfire.github.io/signUpForm2responsive/",
    github: "https://github.com/Kitsunebackfire/signUpForm2responsive",
    description:
      "This is a Sign Up Form I built using basic javascript and ReactJs. I've styled the whole website to be responsive at nearly all resolutions. In addition, there is active form validation upon submission. I learned to be extra vigilant in monitoring inherited css styles with this project.",
  },
  {
    projectName: "Weather App",
    key: "p4",
    src: weather,
    alt: "weather application",
    website: "https://kitsunebackfire.github.io/weatherAppWithReact/",
    github: "https://github.com/Kitsunebackfire/weatherAppWithReact",
    description:
      "This is a Weather App I built using basic javascript and ReactJs. I've styled the whole website to be responsive at nearly all resolutions. It utilizes the openweather Api in order to fetch live weather information.",
  },
];

export default projectsMade;
