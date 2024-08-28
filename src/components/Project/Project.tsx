import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/GrirZouhair/TaskManager" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://be-more-organized.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Task Manager Web App</h3>
              <p>
                Developed a task manager web app with a collaborator using ReactJS, Laravel, TypeScript, and Vite. The app features task creation, editing, and deletion with real-time updates and a responsive, user-friendly interface. Leveraged TypeScript for type safety and Vite for optimized performance.</p>
            </div>
            <footer> <ul className="tech-list"> <li>ReactJs</li> <li>Typescript</li> <li>Vite</li> <li>Laravel</li> </ul> </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/GrirZouhair/Age-calculator-app" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://grirzouhair.github.io/Age-calculator-app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Age Calculator Web App</h3>
              <p>Built a web app with HTML, CSS, and JavaScript to calculate age from birthdate and current date. Features a user-friendly interface with date selection and age display in years, months, and days. Improved accessibility and responsiveness for seamless use on various devices.</p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>JavaScript</li> <li>Html</li> <li>Css</li> </ul> </footer>
          </div>
        </ScrollAnimation>



        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/GrirZouhair/Newsletter-sign-up-form-with-success-message" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://grirzouhair.github.io/Newsletter-sign-up-form-with-success-message/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Newsletter Sign-up Form with Success Message</h3>
              <p>Created a newsletter sign-up form with HTML, CSS, and JavaScript. Implemented form validation and a success message feature. Enhanced visual appeal with custom styling and animations for a seamless user experience during newsletter sign-ups.</p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>Html</li>
                <li>Css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>






      </div>
    </Container>
  );
}