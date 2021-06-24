import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TrackVisibility from "react-on-screen";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";

function Resumes(props) {
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    if(props.langENG){
      axios.get("/api/skills").then((response) => {
        setSkills(response.data);
      });
      axios.get("/api/experience").then((response) => {
        setWorkingExperience(response.data.workingExperience);
        setEducationExperience(response.data.educationExperience);
      });
    }else{
      axios.get("/api/skillsESP").then((response) => {
        setSkills(response.data);
      });
      axios.get("/api/experienceESP").then((response) => {
        setWorkingExperience(response.data.workingExperience);
        setEducationExperience(response.data.educationExperience);
      });
    }
  }, [props]);

  return (
    <Layout langENG={props.langENG}>
      <Helmet>
        <title>{props.langENG ? "Resume" : "Curriculum"} - Victor Avello Guerrero</title>
        <meta
          name="description"
          content="Victor Avello Guerrero Resume page"
        />
      </Helmet>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title={props.langENG ? "My Skills" : "Mis Habilidades"} />
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {skills.map((skill) => (
                <TrackVisibility
                  once
                  className="col-lg-6 mt-30"
                  key={skill.title}
                >
                  <Progress title={skill.title} percentage={skill.value} />
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title={props.langENG ? "Resume" : "Curriculum"} />
          <Smalltitle title={props.langENG ? "Working Experience" : "Experiencia Laboral"} icon="briefcase" />
          <div className="mi-resume-wrapper">
            {workingExperience.map((workingExp) => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30"></div>
          <Smalltitle title={props.langENG ? "Educational Qualifications" : "Experiencia Educacional"} icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map((educatonExp) => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
