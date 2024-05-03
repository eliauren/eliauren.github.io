// Navigation Bar SECTION
const navBar = {
  show: true,
}

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0",
  firstName: "Aurelien",
  middleName: "",
  lastName: "Cerveaux",
  message:
    "Bordeaux 🇫🇷 34 years old 😁 Boxing 🥊 Soccer ⚽️ IT Engineer 🖥  Video Games 🎮 ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/eliauren/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/eliauren/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/eliauren/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/eliauren/",
    },
  ],
}

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.jpg"),
  imageSize: 375,
  message:
    " Passionate about Technologies since my childhood, I have acquired solid skills on various technologies and domains (Video Games, Aeronautics, E-Commerce, Gambling, etc.)",
  // resume_fr: require("../editable-stuff/Aurelien_Cerveaux_FR.pdf"),
  resume_en: require("../editable-stuff/Aurelien_Cerveaux_EN.pdf"),
}

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 75 },
    { name: "SQL", value: 85 },
    { name: ".NET", value: 80 },
    { name: "AWS", value: 90 },
    { name: "Terraform", value: 90 },
    { name: "Javascript", value: 60 },
    { name: "MongoDB", value: 70 },
    { name: "Github Actions", value: 90 },
  ],
  softSkills: [
    { name: "Positivity", value: 100 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 90 },
    { name: "Agile Methodologies", value: 75 },
    { name: "Organization", value: 70 },
    { name: "Reporting", value: 90 },
  ],
  languages: [
    { name: "French", value: 100 },
    { name: "English", value: 80 },
    { name: "Spanish", value: 40 },
    { name: "Japanese", value: 10 },
  ],
}

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact",
  message: "Please feel free to email me at",
  email: "aurelien.cvx@gmail.com",
}

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "DevOps Engineer",
      company: "sopra banking software",
      companylogo: require("../assets/img/companies/sbs.png"),
      date: "January 2024 – Present",
      city: "Paris - France (Full Remote)",
    },
    {
      role: "DevOps Engineer",
      company: "october",
      companylogo: require("../assets/img/companies/october.png"),
      date: "October 2022 – January 2024",
      city: "Paris - France (Full Remote)",
    },
    {
      role: "SRE - DevOps Engineer / Software Engineer",
      company: "betclic",
      companylogo: require("../assets/img/companies/betclic.png"),
      date: "June 2019 – September 2022",
      city: "Bordeaux - France (Mostly Remotely)",
    },
    {
      role: "Web Developer",
      company: "emil-frey",
      companylogo: require("../assets/img/companies/emil-frey.png"),
      date: "December 2017 - May 2019",
      city: "Poitiers - France",
    },
    {
      role: "Software Engineer",
      company: "vivaticket",
      companylogo: require("../assets/img/companies/vivaticket.png"),
      date: "September 2017 – December 2017",
      city: "Poitiers - France",
    },
    {
      role: "Software Engineer",
      company: "cdiscount",
      companylogo: require("../assets/img/companies/cdiscount.png"),
      date: "September 2015 – August 2017",
      city: "Bordeaux - France",
    },
    {
      role: "Software Engineer",
      company: "cgi",
      companylogo: require("../assets/img/companies/cgi.png"),
      date: "June 2012 – August 2015",
      city: "Bordeaux - France",
    },
    {
      role: "Microsoft Student Partner",
      company: "microsoft",
      companylogo: require("../assets/img/companies/microsoft.png"),
      date: "January 2012 – June 2013",
      city: "Bordeaux - France",
    },
  ],
}

const certifications = {
  show: true,
  heading: "Certifications",
  data: [
    {
      title: "AWS Certified Developer Associate",
      certficationlogo: require("../assets/img/certifications/aws-developer-associate.png"),
      expirationdate: "Issued Dec 2020 - Expires Dec 2023",
    },
    {
      title: "Riot - Advanced Cyber Graduate",
      certficationlogo: require("../assets/img/certifications/riot.png"),
      expirationdate: "Issued Dec 2023",
    },
    {
      title: "TOEIC - Test Of English for International Communication",
      certficationlogo: require("../assets/img/certifications/toeic.png"),
      expirationdate: "Issued Feb 2011",
    },
  ],
}

const interests = {
  show: true,
  heading: "Interests",
  data: [
    {
      image: require("../assets/img/interests/sports.png"),
      title: "Sports",
      description:
        "I've been practicing Boxing (ThaiBoxing and Savate French Boxing) for 13 years. Sport is a real passion for me and I also like Running and Soccer on my free time.",
    },
    {
      image: require("../assets/img/interests/technologies.png"),
      title: "Technologies",
      description:
        "A strong interest in Microsoft technologies at the start, I am now interested in everything related to new technologies in several areas (Video Games, Virtual Reality, Automation, etc.)",
    },
    {
      image: require("../assets/img/interests/video-games.png"),
      title: "Video Games",
      description:
        "Passionate about Video Games since my childhood and particularly on Computer, this gave me the desire to know more and to have a best understanding about Computer's Hardware. I've played for several years at semi-professional level on Counter-Strike game.",
    },
  ],
}

const education = {
  show: true,
  heading: "Education",
  data: [
    {
      image: require("../assets/img/education/high-school.png"),
      title: "High School Diploma - Information Technology",
      school: "Fernand Daguin High School | Merignac - France",
    },
    {
      image: require("../assets/img/education/bachelor.png"),
      title: "Two Year Technical Degree in Networking Administration",
      school: "Gustave Eiffel High School | Bordeaux - France",
    },
    {
      image: require("../assets/img/education/diploma.png"),
      title: "Information Technology Expert Engineer's Degree",
      school: "Ynov Campus | Bordeaux - France",
    },
  ],
}

export {
  navBar,
  mainBody,
  about,
  skills,
  getInTouch,
  experiences,
  certifications,
  interests,
  education,
}
