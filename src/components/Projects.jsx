// components/Projects.js
import React from "react";

const projects = [
  {
    title: "Silly Spotify",
    description:
      "a web app for managing Spotify accounts, analyzing user listening trends, and remixing playlists using",
    tech: "React Node.js",
    codeLink: "will be up soon..",
    liveLink: "https://skateaway.vercel.app/",
    imageSrc: "../assets/SillySpotify.png",
  },
  {
    title: "SKATEAWAY",
    description:
      "A frontend for clothing shop inspired by the good folks over Vans. This project is still under devolepment, but feel free to view it & intract with it!",
    tech: "React",
    codeLink: "https://github.com/SultanAlzahrani/SKATEAWAY",
    liveLink: "https://skateaway.vercel.app/",
    imageSrc: "../assets/skateaway.webp",
  },
  {
    title: "GG: The Memory Card Game!",
    description:
      "A game that challenges & test your memeory. There's one simple rule: Don't pick the same card twice. There are three main diffecilty options. I recommend starting with easy.",
    tech: "React",
    codeLink: "https://github.com/SultanAlzahrani/GG-MemoryCardGame",
    liveLink: "https://gg-memory-card-game.vercel.app/",
    imageSrc: "../assets/ggcard.webp",
  },
  {
    title: "The Weather App",
    description:
      "I used The Weather API to build a simple front-end. Just type in the city, and it shows you the upcoming forecast. Easy as that!",
    tech: "HTML CSS JS",
    codeLink:
      "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/tree/main/TheWeatherApp",
    liveLink: "https://sultanalzahrani.github.io/TheWeatherApp/",
    imageSrc: "../assets/The-Weather-App-Logo.webp",
  },
  {
    title: "DoWhat?!",
    description:
      "Introducing your ultimate To-Do Lists companion – effortlessly organized and designed for productivity! Seamlessly manage daily tasks, plan ahead for the next 7 days, and prioritize with the Favorites section. Say hello to stress-free productivity and make every day a breeze with our user-friendly platform – your go-to solution for conquering your to-do list!",
    tech: "HTML CSS JS",
    codeLink:
      "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/tree/main/DoWhat",
    liveLink: "https://sultanalzahrani.github.io/DoWhat/",
    imageSrc: "../assets/ToDo.webp",
  },
  {
    title: "The Personal Blog",
    description:
      "A full-stack blogging platform with a front page, publishing page, and a server-side API for managing posts. Enabled efficient CRUD operations with a user-friendly interface",
    tech: "React Node.js",
    codeLink: "will be up soon..",
    liveLink: "",
    imageSrc: "",
  },
  {
    title: "Validation Form page",
    description:
      "A fully functional Sign-up/Register form that has a neat UI, check it out!",
    tech: "HTML CSS JS",
    codeLink:
      "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/tree/main/SignUpForm",
    liveLink: "https://sultanalzahrani.github.io/SignUpForm/",
  },
  {
    title: "Bakery Front page",
    description:
      "Very simple page that took no time to make. It looks clean and has an image slider.",
    tech: "HTML CSS JS",
    codeLink:
      "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/tree/main/BakeryFrontPage",
    liveLink: "https://sultanalzahrani.github.io/BakeryFrontPage/",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "The classic game in a modern style! Up to 2 players to play locally and have fun!",
    tech: "HTML CSS JS",
    codeLink:
      "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/tree/main/TicTacToe",
    liveLink: "https://sultanalzahrani.github.io/TicTacToe/",
  },
];

function Projects() {
  return (
    <section className="projects-section flex-col centerd">
      <h2 className="title">Projects</h2>
      {projects.map((project, index) => (
        <div className="project flex-row" key={index}>
          {project.imageSrc && (
            <div className="proj-img-container">
              <img src={project.imageSrc} alt={`${project.title} Logo`} />
            </div>
          )}
          <div className="project-details flex-col">
            <span className="project-title">{project.title}</span>
            <span className="project-description">{project.description}</span>
            <span className="project-tech low-opacity">{project.tech}</span>
            <div className="project-links">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="low-opacity"
              >
                Code
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="low-opacity"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
