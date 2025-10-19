import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style3.css';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footerr() {
  return (
    <div className="foot">
      <footer className="fofo text-center">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="https://x.com/BhattRudraksh_?t=NrvZIMg9c95O22ksXQM-0Q&s=09"
              role="button"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>


            <a
              className="btn text-white btn-floating m-1"
              style={{background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",}}
              href="https://www.instagram.com/rudraksh_bhatt7_/!"
              role="button"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://linkedin.com/in/rudraksh-bhatt-2376b6311"
              role="button"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/Rudrakshh-hh"
              role="button"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © {new Date().getFullYear()} Copyright:
          <a className="ms-1 maill" target="_blank" href="mailto:rudraaksh.bhatt@gmail.com">
            @rudrakshbhatt
          </a>
          <a className="ms-1 maill" target="_blank" href="mailto:sarthakbadoni.contact@gmail.com">
            @sarthakbadoni
          </a>
        </div>
      </footer>
    </div>
  );
}
