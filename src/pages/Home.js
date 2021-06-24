import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Particles from "react-particles-js";
import Layout from "../components/Layout";
import Socialicons from "../components/Socialicons";

function Home(props) {
  
  const [information, setInformation] = useState("");
  const paramConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: 0.1,
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
      },
    },
  };

  const paramConfigLight = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      color: {
        value: "#000000",
      },
      opacity: {
        value: 0.1,
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
      },
    },
  };
  useEffect(() => {  
    if(props.langENG){
      axios.get("/api/information").then((response) => {
        setInformation(response.data);
      });
    }else{
      axios.get("/api/informationESP").then((response) => {
        setInformation(response.data);
      });
    }
  }, [props]);
  return (
    <Layout langENG={props.langENG}>
      <Helmet>
        <title>Home - Victor Avello Guerrero</title>
        <meta
          name="description"
          content="Victor Avello Guerrero Homepage"
        />
      </Helmet>
      <div className="mi-home-area mi-padding-section">
        <Particles
          className="mi-home-particle"
          params={paramConfig}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                {props.langENG ? "Hi, I am" : "Hola!, soy"}{" "}
                  <span className="color-theme">{information.name}</span>
                </h1>
                <p>{information.aboutContent}</p>
                <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
