// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
//import Logo from "./images/logo.svg";
import Logo_arduino from "./images/arduino.svg";
import Logo_trottinette from "./images/scooter.svg";
import Logo_gh_page from "./images/GH.svg";


// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light-2.jpg";
import HeroDark from "./images/hero-dark-2.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

export const githubUsername = "bastiankrohg";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am a dual-master's degree student @ INSA de Toulouse & Toulouse School of Management,specializing in Embedded Systems Engineering and International Management. I am currently doing an internship in International Business Development @ Innovation Norway Silicon Valley.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="flat-color-icons:electronics" className="display-4" />,
    name: "Electronics",
  },
  {
    id: 2,
    skill: <Icon icon="fad:loop" className="display-4" />,
    name: "Controls Systems",
  },
  {
    id: 3,
    skill: <Icon icon="solar:programming-bold" className="display-4" />,
    name: "Programming",
  },
  {
    id: 4,
    skill: <Icon icon="ic:baseline-security" className="display-4" />,
    name: "Security",
  },
  {
    id: 5,
    skill: <Icon icon="fluent:brain-circuit-24-regular" className="display-4" />,
    name: "Machine Learning",
  },
  {
    id: 6,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["trottinette", "arduino", "bastiankrohg.github.io"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "arduino",
    image: Logo_arduino,
  },
  {
    name: "trottinette",
    image: Logo_trottinette,
  },
  {
    name: "bastiankrohg.github.io",
    image: Logo_gh_page,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mnqkzpqn";
