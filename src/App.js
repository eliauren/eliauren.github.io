import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  skills,
  getInTouch,
  experiences,
  certifications,
  interests,
  education
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Experience from "./components/home/Experience";
import Certification from "./components/home/Certification";
import Interest from ".//components/home/Interest";
import Education from ".//components/home/Education";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          imageLink={about.imageLink}
          imgSize={about.imageSize}
          resume_fr={about.resume_fr}
          resume_en={about.resume_en}
        />
      )}
      {
        experiences.show && (
          <Experience experiences={experiences} />
        )
      }
      {
        certifications.show && (
          <Certification certifications={certifications} />
        )
      }
      {
        education.show && (
          <Education education={education} />
        )
      }
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
          languages={skills.languages}
        />
      )}
      {
        interests.show && (
          <Interest interests={interests} />
        )
      }
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
