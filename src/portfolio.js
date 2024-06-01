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
  username: "Nilotpal Chandra",
  title: "Hi all, I'm Nilotpal Chandra ",
  subTitle: emoji(
    ""
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Ngv2CGqltoMT8rDbwjwuOXtsQnA6-HUy/view?usp=sharing", 
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Neel901",
  linkedin: "https://www.linkedin.com/in/nilotpalchandra/",
  gmail: "chandranilotpal21@gmail.com",

  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I am a software developer with a BE in Computer Science, proficient in Java. I excel in full-stack development, creating robust web and mobile applications. With strong problem-solving skills and a solid foundation in algorithms and data structures.  Passionate about continuous learning, I stay updated with the latest tech trends to deliver innovative and high-quality software solutions.",
  skills: [
    emoji(
      ""
    ),
    emoji(""),
    emoji(
      ""
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Acharya Institute of Technology",
      subHeader: "B.E. Computer Science",
      duration: "January 2020 - May 2024",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "JAVA", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "80%"
    },
    {
      Stack: "SQL",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "70%"
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Intern",
      company: "Zipteams",
      companylogo: require("./assets/images/Zipteams.jpeg"),
      date: "October 2023 - November 2023",
      descBullets: [
        "Worked on backend service of a tutorial application based on Express JS.",
        "Developed an API which stored comments to their respective tutorials      ",
        "Utilized Postman for API development and testing"
        
      ]
    },
    ]
};


const bigProjects = {
  title: "Projects",
  projects: [
    {
      projectName: "NewsApp",
      projectDesc: "Utilized API integration, the app fetches real-time news data from reliable sources, keeping users informed    with the latest happenings around the world.",
      
    },
    {
      projectName: "Hospital Management System ",
      projectDesc: "Designed a web application based on Flask and MySQL as database.\nIt is designed as a centralized application for patients and doctors to create, view and manage appointments.",
     
    },
    {
      projectName: "Tetris Game ",
      projectDesc: "Implemented the core Tetris gameplay mechanics, allowing players to move, rotate, and drop game pieces within the game grid.",
     
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  achievementsCards: [
    {
      title: "Programming in Java",
      subtitle:
        "NPTEL",
      image: require("./assets/images/nptel.png"),
      imageAlt: "NPTEL Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1K0qGhYMpUInlG5X20y8rmZlQm00PMBmR/view?usp=sharing"
        }
      ]
    },
    {
      title: "Design and Analysis of Algorithms",
      subtitle:
        "NPTEL",
      image: require("./assets/images/nptel.png"),
      imageAlt: "NPTEL Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/17WPfYoU8MLBrMwSfMYhyUxC5MXy7NTto/view?usp=sharing"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-7209062924",
  email_address: "chandranilotpal21@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
