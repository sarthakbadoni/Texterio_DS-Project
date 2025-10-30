import React from "react";
import HeaderStarting from "./HeaderStarting";
import Footerr from "./footerCE";
import './style3.css';

export default function DescriptionPage() {
  return (
    <>
      <HeaderStarting />
      <main
        className="contact-main"
        style={{
          minHeight: "80vh",
          background: "linear-gradient(135deg, #181d2f 60%, #4a3eda 100%)",
          color: "#fff",
          padding: "30px 0"
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div
                className="card"
                style={{
                  background: "rgba(35,41,74,0.95)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "30px",
                  boxShadow: "0 8px 32px #24247850",
                  padding: "2rem",
                  marginBottom: "2rem",
                  overflow: "hidden",
                  position: "relative"
                }}
              >
                {/* Gradient accent bar */}
                <div
                  style={{
                    height: 7,
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    borderRadius: "30px 30px 0 0",
                    background:
                      "linear-gradient(90deg,#fcb045,#fd1d1d 40%,#833ab4 75%,#53e3fa 100%)",
                    opacity: 0.85
                  }}
                />
                <h2 className="text-center mb-4" style={{ letterSpacing: 2, fontWeight: 800 }}>
                  About <span style={{ background: "linear-gradient(90deg, #fcb045, #fd1d1d, #833ab4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Texterio</span>
                </h2>
                <p style={{ fontSize: "1.1em", opacity: 0.96, lineHeight: 1.7 }}>
                  <span style={{
                    background: "linear-gradient(90deg, #53e3fa55, #fcb04544)",
                    borderRadius: 9,
                    padding: "0 9px"
                  }}>
                    <b>Texterio</b>
                  </span> is an interactive website and progressive web app (PWA) that seamlessly combines a <b>text editor</b>
                  and a <b>code editor</b> in a single modern platform. Inspired by the need for both effective writing and coding tools,
                  Texterio leverages data structure concepts (like stack-based undo/redo) to create a smarter, safer, and more accessible environment for students, developers, and professionals.
                </p>
                <h4 className="mt-4 mb-2"
                  style={{
                    letterSpacing: 1,
                    color: "#79dd2d",
                    fontWeight: 700,
                    textShadow: "0 1px 7px #7dbcc780"
                  }}>Motivation</h4>
                <div style={{
                  background: "linear-gradient(90deg,#17213a99 70%,#53e3fa22)",
                  borderRadius: 11,
                  padding: "8px 16px",
                  marginBottom: 8
                }}>
                  <p style={{ opacity: 0.97 }}>
                    Many existing editors either lack sophisticated features or are too complex for beginners.
                    Texterio’s aim is to offer a <b style={{ color: "#ffe877" }}>lightweight</b>, browser-based, installable solution that supports
                    <b style={{ color: "#79dd2d" }}> intelligent undo/redo</b>, true <b style={{ color: "#37e3ee" }}>code running</b> for six+ programming languages, and robust text formatting—all in one accessible place.
                  </p>
                </div>
                <h4 className="mt-4 mb-2"
                  style={{
                    letterSpacing: 1,
                    color: "#53e3fa",
                    fontWeight: 700,
                    textShadow: "0 2px 7px #53e3fa53"
                  }}>Key Features</h4>
                <ul style={{ marginTop: 10, marginBottom: 18, opacity: 0.99, lineHeight: 1.75, listStyle: "none", paddingLeft: 0 }}>
                  <li><span style={{ color: "#ffe877", fontWeight: "bold" }}>•</span> Modern text & code editing with real-time formatting, powered by custom stack/queue in JavaScript for undo/redo.</li>
                  <li><span style={{ color: "#fd1d1d", fontWeight: "bold" }}>•</span> Multiple programming language support: Python, C, C++, Java, JavaScript, Node.js.</li>
                  <li><span style={{ color: "#53e3fa", fontWeight: "bold" }}>•</span> Server-side code execution inside <b>Docker containers</b> (hosted on AWS EC2) for ultimate security and reliability.</li>
                  <li><span style={{ color: "#79dd2d", fontWeight: "bold" }}>•</span> Installable PWA: works across devices, offline text editing, fast load.</li>
                  <li><span style={{ color: "#fcb045", fontWeight: "bold" }}>•</span> Simple, mobile-friendly, and responsive UI (React + Bootstrap + Reactbits).</li>
                  <li><span style={{ color: "#ffe877", fontWeight: "bold" }}>•</span> Cloud backend with Node.js & Express for handling all code execution requests.</li>
                  <li><span style={{ color: "#ed41c8", fontWeight: "bold" }}>•</span> Stack-driven undo/redo, formatting tools (Bold, Italic, Underline, Remove Spaces, PascalCase, etc.), friendly navigation.</li>
                  <li><span style={{ color: "#37e3ee", fontWeight: "bold" }}>•</span> <b>Beginner-friendly error messages</b> using the <b style={{ color: "#ff6e40" }}>Gemini API</b> (AI-driven code feedback and suggestions).</li>
                </ul>
                <h4 className="mt-4 mb-2"
                  style={{
                    letterSpacing: 1,
                    color: "#fcb045",
                    fontWeight: 700,
                    textShadow: "0 2px 7px #fcb04533"
                  }}>Project Approach & Architecture</h4>
                <ul style={{ marginTop: 10, marginBottom: 18, opacity: 0.98, lineHeight: 1.7 }}>
                  <li><b>Frontend:</b> <span style={{ color: "#53e3fa" }}>React.js</span> with Bootstrap, Reactbits for smooth, responsive UI/UX.</li>
                  <li><b>Backend:</b> <span style={{ color: "#37e3ee" }}>Node.js & Express</span>, deployed on <span style={{ color: "#fd1d1d" }}>AWS EC2</span>, with Docker for isolated, secure code execution in any supported language.</li>
                  <li><span style={{ color: "#ffe877" }}>PWA</span> support via Service Workers and caching.</li>
                </ul>
                <h4 className="mt-4 mb-2"
                  style={{
                    letterSpacing: 1,
                    color: "#ed41c8",
                    fontWeight: 700,
                    textShadow: "0 2px 7px #ed41c855"
                  }}>Milestones & Progress</h4>
                <ul style={{ marginTop: 10, marginBottom: 18, opacity: 0.98, lineHeight: 1.7 }}>
                  <li>Basic text editor & code editor implemented.</li>
                  <li>Undo/redo functionality using Data Structures (stack/queue) completed.</li>
                  <li>Server and compiler integration (Docker, AWS, multi-language) complete.</li>
                  <li>PWA installable app ready; main features tested and validated.</li>
                  <li>Pending: polish navigation bar, improve error messages, finalize documentation, deeper mobile testing.</li>
                </ul>
                <h4 className="mt-4 mb-2"
                  style={{
                    letterSpacing: 1,
                    color: "#ffe877",
                    fontWeight: 700,
                    textShadow: "0 2px 7px #ffe87755"
                  }}>Outcome & Impact</h4>
                <div
                  style={{
                    background: "linear-gradient(90deg,#53e3fa22,#ffe87722)",
                    borderRadius: 9,
                    padding: "8px 14px",
                    marginBottom: 6
                  }}>
                  <p style={{ opacity: 0.98 }}>
                    Texterio allows anyone to <b style={{ color: "#fd1d1d" }}>write, format, and execute code online</b> with no local setup, all in a secure cloud-native environment
                    with intelligent history (undo/redo). Students and professionals can use it for both writing and coding, reducing the need to switch apps,
                    and benefit from a seamless, unified workflow.
                  </p>
                </div>
                <div style={{ marginTop: 26, textAlign: "center", fontWeight: 600, opacity: 0.95 }}>
                  Made with <span style={{ color: "#f857a6", fontWeight: 700, fontSize: "1.21em" }}>♥</span> by Team <span style={{ color: "#53e3fa" }}>404NotFound</span>: Sarthak, Rudraksh, Sahil, Vansh
                </div>
                
                {/* Gradient line at the bottom */}
                <div
                  style={{
                    width: "95%",
                    height: 4,
                    margin: "28px auto 0",
                    borderRadius: "99px",
                    background: "linear-gradient(90deg,#fcb045,#fd1d1d 40%,#833ab4 75%,#53e3fa 100%)",
                    opacity: 0.72
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footerr />
    </>
  );
}
