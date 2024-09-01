import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saurabh Kumar </span>
            from <span className="purple"> Noida, India.</span>
            <br />
            a recent graduate with a B.Tech in Information Technology from IET Ayodhya.
            <br />
            I’m passionate about coding and have focused my skills on the MERN stack. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight />  Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Hard work beats talent when talent doesn’t work hard."{" "}
          </p>
          <footer className="blockquote-footer">Saurabh Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
