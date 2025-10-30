import React from "react";
import HeaderStarting from "./HeaderStarting";
import Footerr from "./footerCE";

import sarthakImg from './images/sarthak.jpg';
import rudrakshImg from './images/rudraksh.jpg';
import sahilImg from './images/sahil.jpg';
import vanshImg from './images/vansh.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import './style3.css';

const team = [
  {
    name: "Sarthak Badoni",
    photo: sarthakImg,
    course: "BTech Computer Science & Engineering",
    year: "2028",
    phone: "+91-9997538164",
    gmail: "sarthakbadoni.contact@gmail.com",
    github: "https://github.com/sarthakbadoni",
    linkedin: "https://www.linkedin.com/in/sarthak-badoni-6a408b323/"
  },
  {
    name: "Rudraksh Bhatt",
    photo: rudrakshImg,
    course: "BTech Computer Science & Engineering",
    year: "2028",
    phone: "+91-7017875869",
    gmail: "rudraaksh.bhatt@gmail.com",
    github: "https://github.com/Rudrakshh-hh",
    linkedin: "https://www.linkedin.com/in/rudraksh-bhatt/"
  },
  {
    name: "Sahil Singh Gandi",
    photo: sahilImg,
    course: "BTech Computer Science & Engineering",
    year: "2028",
    phone: "+91-8755133359",
    gmail: "sahil.gandi456@gmail.com",
    github: "https://github.com/Korpse2001",
    linkedin: "https://www.linkedin.com/in/sahil-singh-6611a7397?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  {
    name: "Vansh Sharma",
    photo: vanshImg,
    course: "BTech Computer Science & Engineering",
    year: "2028",
    phone: "+91-6395723047",
    gmail: "vanshsharmagraphic44@gmail.com",
    github: "https://github.com/vanshsharma16",
    linkedin: "https://www.linkedin.com/in/vansh-sharma-cse3921341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
];

const gmailGradient = {
  background: "linear-gradient(135deg, #ea4335, #fbbc05 40%, #34a853 80%, #4285f4)",
};

const iconStyles = {
  phone: { background: "#4A90E2" },
  email: gmailGradient,
  github: { background: "#24292e" },
  linkedin: { background: "#0a66c2" }
};

const iconCommon = {
  borderRadius: "12px",
  width: "44px",
  height: "44px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: "1.6em",
  margin: "0 6px",
  boxShadow: "0 3px 12px #0002",
  transition: "transform 0.15s"
};

export default function Contact() {
  return (
    <>
      <HeaderStarting />
      <main className="contact-main" style={{ minHeight: "80vh", background: "#181d2f", color: "#fff", padding: "30px 0" }}>
        <h2 className="text-center mb-4" style={{ letterSpacing: 2 }}>Meet Our Team</h2>
        <div className="container">
          <div className="row justify-content-center g-4">
            {team.map((member) => (
              <div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch p-2" key={member.name}>
                <div className="card text-center"
                  style={{
                    background: "#23294a", color: "#fff", border: "none", borderRadius: "24px",
                    boxShadow: "0 8px 24px #0002", minHeight: 490, width: "100%"
                  }}>
                  <img src={member.photo} alt={member.name}
                    className="card-img-top"
                    style={{ borderRadius: "24px 24px 0 0", height: 200, objectFit: "cover", width: "100%" }} />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text mb-3" style={{ fontSize: "0.97em", opacity: 0.87 }}>
                      {member.course}<br />Passing Year: {member.year}
                    </p>
                    <div className="d-flex justify-content-center gap-2 mt-2">
                      <a
                        href={`tel:${member.phone}`}
                        title={member.phone}
                        style={{ ...iconCommon, ...iconStyles.phone }}
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faPhoneAlt} />
                      </a>
                      <a
                        href={`mailto:${member.gmail}`}
                        title={member.gmail}
                        style={{ ...iconCommon, ...iconStyles.email }}
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                      <a
                        href={member.github}
                        title={member.github}
                        target="_blank"
                        style={{ ...iconCommon, ...iconStyles.github }}
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        href={member.linkedin}
                        title={member.linkedin}
                        target="_blank"
                        style={{ ...iconCommon, ...iconStyles.linkedin }}
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footerr />
    </>
  );
}
