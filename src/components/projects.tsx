// components/Projects.js
import { useState } from "react";
const projects = [
  {
    title: "SKATEAWAY",
    description:
      "A frontend for clothing shop inspired by the good folks over Vans. This project is still under devolepment, but feel free to view it & intract with it! Note: Optimized for chromium.",
    tech: "React",
    codeLink: "https://github.com/SultanAlzahrani/SKATEAWAY",
    liveLink: "https://skateaway.vercel.app/",
    imageSrc: "./projects/skateaway.webp",
    expandable: true,
  },
  {
    title: "SultanOnline",
    description:
      "A  for clothing shop inspired by the good folks over Vans. This project is still under devolepment, but feel free to view it & intract with it!",
    tech: "Unity C# .NET Python",
    codeLink: "",
    liveLink: "",
    imageSrc: "./projects/SultanOnline.webp",
    expandable: true,
  },
  {
    title: "Silly Spotify",
    description:
      "a web app for managing Spotify accounts, analyzing user listening trends, and remixing playlists using",
    tech: "React Node.js",
    codeLink: "",
    liveLink: "",
    imageSrc: "./projects/SillySpotify.webp",
  },
  {
    title: "The Weather App",
    description:
      "I used The Weather API to build a simple front-end. Just type in the city, and it shows you the upcoming forecast. Easy as that! Note: Token Expired. Try running it locally by getting your own API key.",
    tech: "HTML CSS JS",
    codeLink:
      "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/tree/main/TheWeatherApp",
    liveLink: "https://sultanalzahrani.github.io/TheWeatherApp/",
    imageSrc: "./projects/The-Weather-App-Logo.webp",
  },
  {
    title: "DoWhat?!",
    description:
      "Introducing your ultimate To-Do Lists companion – effortlessly organized and designed for productivity! Seamlessly manage daily tasks, plan ahead for the next 7 days, and prioritize with the Favorites section. Say hello to stress-free productivity and make every day a breeze with our user-friendly platform – your go-to solution for conquering your to-do list!",
    tech: "HTML CSS JS",
    codeLink:
      "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/tree/main/DoWhat",
    liveLink: "https://sultanalzahrani.github.io/DoWhat/",
    imageSrc: "./projects/ToDo.webp",
  },
  {
    title: "GG: The Memory Card Game!",
    description:
      "A game that challenges &amp; test your memeory. There's one simple rule: Don't pick the same card twice. There are three main diffecilty options. I recommend starting with easy.",
    tech: "HTML CSS JS",
    codeLink: "https://github.com/SultanAlzahrani/GG-MemoryCardGame",
    liveLink: "https://gg-memory-card-game.vercel.app/",
    imageSrc: "./projects/ggame.png",
  },
  {
    title: "My Portfolio Website",
    description:
      "This is my personal portfolio website that you're viewing right now! It showcases my projects!",
    tech: "React",
    codeLink: "",
    liveLink: "",
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

const expand = [
  {
    id: "SultanOnline",
    title: "Project SultanOnline",
    blocks: [
      {
        id: "b1",
        type: "image",
        src: "./projects/SultanOnline.webp",
        alt: "SultanOnline Logo",
        caption: "The SultanOnline Logo",
      },
      {
        id: "b2",
        type: "paragraph",
        content:
          "The idea of this project is to create an interactive online environment for my twitch viewers to view." +
          " This project is multi-layered, involving a game client, server backend, and various tools to manage the community." +
          " The game client is built using Unity, providing a silly 3D experience where viewers can interact with each other and the streamer in a way.",
      },
      {
        id: "b3",
        type: "paragraph",
        content:
          "This Project is still under devolepment, with a BETA release that actually has most of the features implemented." +
          " Feel free to reach out to me if you want to test it out or contribute to the project!",
      },
    ],
  },
  {
    id: "SKATEAWAY",
    title: "Project SKATEAWAY",
    blocks: [
      {
        id: "b1",
        type: "paragraph",
        content:
          "I have always found clothing online websites so facitating and easy to the eye. This is smart. You need to make your customers feel good and comfortable while shopping. So I decided to make a frontend for a clothing shop inspired by the good folks over Vans.",
      },
    ],
  },
];
export default function Projects() {
  return (
    <section className="projects-section flex-col centerd">
      <h2 className="title starting-title">Projects</h2>
      {projects.map((project, index) => (
        <Project project={project} index={index} />
      ))}
    </section>
  );
}

function ExpandedSection({ title }: { title: string }) {
  const hasExpanded = expand.find((item) => {
    if (item.id === title) return item;
    else return null;
  });

  const content = hasExpanded;
  console.log(content);
  if (!content) return null;

  return (
    <section className="expanded-section flex-col centerd">
      <h2 className="title">{content.title}</h2>
      {content.blocks.map((block) => {
        if (block.type === "paragraph") {
          return (
            <p className="block-content" key={block.id}>
              {block.content}
            </p>
          );
        } else if (block.type === "image") {
          return (
            <div key={block.id} className="image-block flex-col centerd">
              <img src={block.src} alt={block.alt} />
              <span className="caption low-opacity">{block.caption}</span>
            </div>
          );
        }
      })}
    </section>
  );
}

function Project({ project, index }: { project: any; index: any }) {
  const [isExpanded, SetIsExpanded] = useState(false);

  const handleExpanding = () => {
    SetIsExpanded(!isExpanded);
  };
  return (
    <div className="project flex-col" key={index}>
      <div className="inner-project flex-row">
        {project.imageSrc && (
          <div className="proj-img-container">
            <img src={project.imageSrc} alt={`${project.title} Logo`} />
          </div>
        )}
        <div className="project-details flex-col">
          <span className="project-title">{project.title}</span>
          <span className="project-description">{project.description}</span>
          <span className="project-tech low-opacity">{project.tech}</span>

          <div className="project-links flex-row">
            {project.codeLink ? (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="low-opacity"
              >
                Code
              </a>
            ) : (
              <span className="low-opacity">None</span>
            )}

            {project.liveLink ? (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="low-opacity"
              >
                Live
              </a>
            ) : (
              <span className="low-opacity">None</span>
            )}
          </div>
        </div>
      </div>

      {!isExpanded && project.expandable && (
        <button
          className="expand-project-button"
          onClick={() => handleExpanding()}
        >
          Expand for more &#9660;
        </button>
      )}

      {isExpanded && project.expandable && (
        <>
          <ExpandedSection title={project.title} />
          <button
            className="expand-project-button"
            onClick={() => handleExpanding()}
          >
            Collapse for less &#9650;
          </button>
        </>
      )}
    </div>
  );
}
