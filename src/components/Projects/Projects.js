import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Portfolio from "../../Assets/Projects/portfolio1.png";
import cyber_caffe from "../../Assets/Projects/cyber_caffe.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyber_caffe}
              isBlog={false}
              title="Cyber-Caffe"
              description="The Cybercafe Management System is a comprehensive solution designed to optimize the operations of internet cafes. It features an intuitive user interface for seamless user registration, session management, and billing. The system provides secure login, real-time monitoring of active sessions, automated time tracking, and robust reporting tools. Built with scalability in mind, it integrates easily with existing hardware and software, ensuring a smooth experience for both customers and administrators."
              ghLink="https://github.com/Kumarshailesh9/Expense-Tracker-Project/tree/main/ExpenseTrackerAppBackend"
              demoLink="https://github.com/Kumarshailesh9/Expense-Tracker-Project/tree/main/ExpenseTrackerAppBackend"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="My Portfolio"
              description="My Portfolio: A modern and responsive website showcasing my skills, projects, and professional journey as a web developer. The portfolio features a clean design, intuitive navigation, and highlights my expertise in HTML, CSS, JavaScript, and backend technologies like Node.js. It includes detailed case studies of my projects, a blog for sharing insights and knowledge, and a contact section for networking opportunities. This portfolio is a reflection of my passion for coding and commitment to continuous learning and growth in the field."
              ghLink="https://github.com/Kumarshailesh9/Booking-Appoiment-App/tree/main/ExpensTraker-Server/Server"
              demoLink="https://github.com/Kumarshailesh9/Booking-Appoiment-App/tree/main/ExpensTraker-Server/Server"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
