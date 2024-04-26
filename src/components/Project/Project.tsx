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

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/GrirZouhair/Quiz_App" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://grirzouhair.github.io/Quiz_App/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Interactive Quiz App with JavaScript</h3>
              <p>Created an interactive quiz application using JavaScript to provide users with engaging quizzes. Implemented features like question randomization, scoring, and feedback mechanisms. Designed a user-friendly interface with responsive elements to ensure seamless usability across different devices.</p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>Html</li>
                <li>Css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/GrirZouhair/order-summary-component" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://grirzouhair.github.io/order-summary-component/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Order Summary Component</h3>
              <p>Developed an order summary component using HTML, CSS, and JavaScript to display and manage user orders. Implemented features for order customization, pricing calculation, and checkout options. Designed with a focus on user experience, accessibility, and responsive design for seamless usage across devices.</p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/GrirZouhair/interactive-rating-component" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://grirzouhair.github.io/interactive-rating-component/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Interactive Rating Component</h3>
              <p>Developed an interactive rating component using HTML, CSS, and JavaScript for user feedback and ratings. Implemented features such as interactive stars, dynamic updates, and submission handling. Designed with a focus on accessibility, responsiveness, and user-friendly interactions for seamless integration into web applications.</p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>Html</li>
                <li>Css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/GrirZouhair/3-column-preview-card" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://grirzouhair.github.io/3-column-preview-card/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>3-Column Preview Card</h3>
              <p>Created a 3-column preview card component using HTML, CSS, and JavaScript for displaying content. Implemented responsive design for optimal viewing across devices. Designed with a focus on aesthetics, readability, and ease of use to showcase content effectively.</p>

            </div>
            <footer>
              <ul className="tech-list">
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