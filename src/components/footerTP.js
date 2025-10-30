import React from "react";
import './style4.css';

export default function Footerr() {
  return (
    <div className="foot">
      <footer 
        className="fofo text-center"
        style={{
          background: "rgb(68, 58, 109)",
          boxShadow: "0 -2px 16px 0 #11224432, 0px 6px 18px #0002"
        }}
      >
        <hr
          style={{
            borderColor: "rgba(255,255,255,0.38)",
            borderWidth: "1.5px",
            width: 300,
            margin: "0 auto 16px auto",
            opacity: 0.35,
            background: "linear-gradient(90deg, #fcb045, #fd1d1d, #833ab4)",
            height: 3,
            borderRadius: 99
          }}
        />
        <div className="text-center p-3" style={{ background: "rgba(0,0,0,0.16)", borderRadius: 16, margin: "0 16px" }}>
          <a
            href="/terms-and-conditions.pdf"
            download="terms-and-conditions.pdf"
            style={{
              color: "#fff",
              marginRight: 24,
              textDecoration: "underline",
              fontWeight: 600,
              fontSize: "1.1em",
              letterSpacing: 0.2,
              cursor: "pointer",
              transition: "color 0.19s"
            }}
            onMouseOver={e => (e.currentTarget.style.color = "#53e3fa")}
            onMouseOut={e => (e.currentTarget.style.color = "#fff")}
          >
            Terms and Conditions
          </a>
          <a
            href="/privacy-policy.pdf"
            download="privacy-policy.pdf"
            style={{
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.1em",
              textDecoration: "underline",
              cursor: "pointer",
              letterSpacing: 0.2,
              transition: "color 0.19s"
            }}
            onMouseOver={e => (e.currentTarget.style.color = "#fffc7c")}
            onMouseOut={e => (e.currentTarget.style.color = "#fff")}
          >
            Privacy Policy
          </a>
          <div style={{
            marginTop: 14,
            color: "#fff",
            fontSize: "1.01em",
            fontFamily: "inherit",
            letterSpacing: 0.3,
          }}>
            <span style={{ opacity: 0.92 }}>
              © {new Date().getFullYear()} All rights reserved.
            </span>
            <span style={{ marginLeft: 8, opacity: 0.94 }}>
              • Made with
              <span className="footer-heart" style={{
                color: "#f857a6",
                margin: "0 6px",
                fontWeight: 700,
                fontSize: "1.19em",
                display: "inline-block",
                animation: "pulse 1.3s infinite"
              }}>♥</span>
              by our team
            </span>
          </div>
        </div>
        <div
          style={{
            width: "85%",
            height: 4,
            margin: "25px auto 0",
            borderRadius: "99px",
            background: "linear-gradient(90deg,#fcb045,#fd1d1d,#833ab4,#53e3fa,#fffc7c)",
            opacity: 0.55
          }}
        />
        <style>
          {`
          @keyframes pulse {
            0% { transform: scale(1);}
            50% {transform: scale(1.14);}
            100% {transform: scale(1);}
          }
          `}
        </style>
      </footer>
    </div>
  );
}
