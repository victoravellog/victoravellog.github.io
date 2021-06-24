import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import emailjs from 'emailjs-com';
emailjs.init("user_2qSFsCdSE7RhWFlXPzhrE");

function Contact(props) {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [address, setAddress] = useState([]);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formdata.name) {
      setError(true);
      setMessage("Name is required");
    } else if (!formdata.email) {
      setError(true);
      setMessage("Email is required");
    } else if (!formdata.subject) {
      setError(true);
      setMessage("Subject is required");
    } else if (!formdata.message) {
      setError(true);
      setMessage("Message is required");
    } else {
      setError(false);
      var templateParams = {
        from_name: formdata.name,
        message: formdata.message,
        subject: formdata.subject,
        from_email: formdata.email
      };  
 
    emailjs.send('service_k560v0t', 'template_gxv6kft', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
        });
      setMessage("Your message has been sent!!!");
    }
  };
  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const numberFormatter = (number) => {
    const phnNumber = number;
    return phnNumber;
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  useEffect(() => {
    if(props.langENG){
      axios.get("/api/contactinfo").then((response) => {
        setPhoneNumbers(response.data.phoneNumbers);
        setEmailAddress(response.data.emailAddress);
        setAddress(response.data.address);
      });
    }else{
      axios.get("/api/contactinfoESP").then((response) => {
        setPhoneNumbers(response.data.phoneNumbers);
        setEmailAddress(response.data.emailAddress);
        setAddress(response.data.address);
      });
    }
    
  }, [props]);

  return (
    <Layout langENG={props.langENG}>
      <Helmet>
        <title>{props.langENG ? "Contact" : "Contacto"} - Victor Avello Guerrero</title>
        <meta
          name="description"
          content="Victor Avello Guerrero Contact page"
        />
      </Helmet>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title={props.langENG ? "Contact me" : "Contáctame"} />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                <h4>{props.langENG ? "Get in Touch" : "Ponte en contacto"}</h4>
                <form
                  action="#"
                  className="mi-form mi-contact-form"
                  onSubmit={submitHandler}
                >
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-name">{props.langENG ? "Enter your name" : "Ingresa tu nombre"}*</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      id="contact-form-name"
                      value={formdata.name}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-email">
                      {props.langENG ? "Enter your email" : "Ingresa tu email"}*
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="email"
                      id="contact-form-email"
                      value={formdata.email}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-subject">
                      {props.langENG ? "Enter your subject" : "Ingresa tu asunto"}*
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="subject"
                      id="contact-form-subject"
                      value={formdata.subject}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-message">
                      {props.langENG ? "Enter your Message" : "Ingresa tu mensaje"}*
                    </label>
                    <textarea
                      onChange={handleChange}
                      name="message"
                      id="contact-form-message"
                      cols="30"
                      rows="6"
                      value={formdata.message}
                    ></textarea>
                  </div>
                  <div className="mi-form-field">
                    <button className="mi-button" type="submit">
                      {props.langENG ? "Send mail" : "Enviar mail"}
                    </button>
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-contact-info">
                {!phoneNumbers ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Phone />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>{props.langENG ? "Phone" : "Teléfono"}</h6>
                      {phoneNumbers.map((phoneNumber) => (
                        <p key={phoneNumber}>
                          <a href={numberFormatter(phoneNumber)}>
                            {phoneNumber}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {!emailAddress ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Mail />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Email</h6>
                      {emailAddress.map((email) => (
                        <p key={email}>
                          <a href={`mailto:${email}`}>{email}</a>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {/* {!phoneNumbers ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.MapPin />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Address</h6>
                      <p>{address}</p>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
