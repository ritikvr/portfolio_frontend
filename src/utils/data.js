import frontendImg from "../images/frontend.png";
import backendImg from "../images/backend.png";
import languagesImg from "../images/languages.png";
import course_worksImg from "../images/course_works.jpg";
import toolsImg from "../images/tools.png";
import soft_skillsImg from "../images/soft_skills.png";

export const SKILLS = [
  {
    title: "Frontend",
    icon: frontendImg,
    skills: [
      { skill: "HTML5", percentage: "80%" },
      { skill: "CSS", percentage: "70%" },
      { skill: "JavaScript", percentage: "70%" },
      { skill: "React.js", percentage: "90%" },
    ],
  },
  {
    title: "Backend",
    icon: backendImg,
    skills: [
      { skill: "Node.js", percentage: "60%" },
      { skill: "Express.js", percentage: "70%" },
      { skill: "MongoDb", percentage: "80%" },
    ],
  },
  {
    title: "Languages",
    icon: languagesImg,
    skills: [
      { skill: "C", percentage: "60%" },
      { skill: "Java", percentage: "80%" },
    ],
  },
  {
    title: "Course Works",
    icon: course_worksImg,
    skills: [
      { skill: "Data Structures & Algorithms", percentage: "90%" },
      { skill: "OOPS", percentage: "90%" },
      { skill: "Operating System", percentage: "70%" },
    ],
  },
  {
    title: "Tools",
    icon: toolsImg,
    skills: [
      { skill: "Git", percentage: "60%" },
      { skill: "Visual Studio Code", percentage: "80%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: soft_skillsImg,
    skills: [
      { skill: "Problem Solving", percentage: "80%" },
      { skill: "Learning Ability", percentage: "90%" },
      { skill: "Collaboration", percentage: "85%" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "GenieBazaar",
    date: "December 2023 - January 2024",
    description: [
      "GenieBazaar emerges as a comprehensive solution for online retail, blending functionality, design, and security to create a compelling e-commerce platform.",
      "The platform features a dual-panel structure, providing administrators with an Admin Panel equipped for product management, user oversight, and order tracking.",
      "The User Panel ensures customers enjoy a seamless shopping journey with secure authentication, intuitive product search, filtering options, and Stripe-powered payments.",
      "GenieBazaar delivers robust functionality, encompassing features like cart management, profile updates, and an overall user-centric experience.",
      "User security is a priority, and the integration of JWT (JSON Web Token) ensures a secure authentication process.",
    ],
  },
  {
    title: "Chat-Application",
    date: "October 2023 - October 2023",
    description: [
      "This chat application serves as a versatile platform for seamless communication and collaboration, allowing users to engage in both individual and group chats.",
      "Users enjoy added functionality with the ability to create, manage, and disband groups, enhancing the collaborative experience within the application.",
      "The platform features an intuitive search function, enabling users to effortlessly find others by name and improving the overall user experience.",
      "Built on the MERN stack (MongoDB, Express.js, React.js, Node.js), the application ensures a robust foundation for reliable and efficient performance.",
      "JWT authentication is implemented to provide a secure environment, safeguarding user interactions and data within the chat application.",
      "Real-time communication is achieved through the integration of Socket.io, enabling instant messaging capabilities and fostering interactive user engagement.",
    ],
  },
  {
    title: "Investment Calculator",
    date: "July 2023 - July 2023",
    description: [
      "Developed an Investment Calculator using React. Implemented a user-friendly design for enhanced accessibility and ease of use.",
      "Calculates total savings, interest, and invested capital over a specified duration. Takes user inputs for current savings, expected yearly savings, interest rates, and investment duration.",
      "Provides users with comprehensive insights into their financial planning.",
      "Offers a valuable tool for individuals seeking to plan and track their investments effectively.",
    ],
  },
];
