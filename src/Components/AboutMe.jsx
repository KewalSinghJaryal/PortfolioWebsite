import React from "react";
import myImage from "../Images/WhatsApp Image 2024-01-14 at 20.58.37_f27ce55e.jpg";
import "./AboutMe.css";
import Resume from "../Files/My Resume.pdf";

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <h2 className="section-title">ABOUT ME</h2>
      <hr />
      <div className="content">
        <div className="image-container">
          <img src={myImage} alt="Edward Davis" className="profile-image" />
        </div>
        <div className="text-content">
          <h1>Hi There! I'm Kewal Singh Jaryal</h1>
          <h3>Web Developer</h3>
          <p>
            Enthusiastic Web developer with a passion for solving real-world
            problems through innovative software solutions. I thrive on
            continuous learning and enjoy integrating new skills into my
            projects. My interests include coding, reading novels, playing
            computer games, and exploring cutting-edge technologies every day.
          </p>
          <ul className="info-list">
            <table
              style={{
                width: "100%",
                marginTop: "20px",
                borderCollapse: "collapse",
              }}
            >
              <tbody>
                <tr>
                  <td style={{ padding: "8px 0", fontWeight: "bold" }}>
                    <span>Birthday:</span>
                  </td>
                  <td style={{ padding: "8px 0" }}>November 21, 2001</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", fontWeight: "bold" }}>
                    <span>Phone:</span>
                  </td>
                  <td style={{ padding: "8px 0" }}>+91 92666-62001</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", fontWeight: "bold" }}>
                    <span>Email:</span>
                  </td>
                  <td style={{ padding: "8px 0" }}>kewaljaryal121@gmail.com</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", fontWeight: "bold" }}>
                    {" "}
                    <span>From:</span>
                  </td>
                  <td style={{ padding: "8px 0" }}>
                    Palampur, Kangra, Himachal Pardesh INDIA
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", fontWeight: "bold" }}>
                    <span>Language:</span>
                  </td>
                  <td style={{ padding: "8px 0" }}>English, Hindi</td>
                </tr>
              </tbody>
            </table>
          </ul>

          <button className="download-cv">
            <a
              href={Resume}
              download="Kewal.pdf"
              class="download-button"
              style={{ textDecoration: "none", color: "black" }}
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
