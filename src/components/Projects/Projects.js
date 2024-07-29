import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Expense-Tracker"
              description="A user-friendly tool for monitoring and managing personal finances. Features include expense categorization, budget tracking, and financial reports to help users stay on top of their spending and reach their financial goals."
              ghLink="https://github.com/Kumarshailesh9/Expense-Tracker-Project/tree/main/ExpenseTrackerAppBackend"
              demoLink="https://github.com/Kumarshailesh9/Expense-Tracker-Project/tree/main/ExpenseTrackerAppBackend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blogs-App"
              description="A sleek platform for discovering, reading, and sharing blog content. Users can follow their favorite writers, engage with posts through comments and likes, and easily publish their own articles to reach a wide audience."
              ghLink="https://github.com/Kumarshailesh9/writeBlogs-Project/tree/main/writeblogs-version2/Server"
              demoLink="https://github.com/Kumarshailesh9/writeBlogs-Project/tree/main/writeblogs-version2/Server/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Appointment Booking"
              description="A streamlined tool for scheduling and managing appointments with ease. Users can book, reschedule, and cancel appointments, receive reminders, and view their schedule in one place, all while businesses can manage their bookings efficiently."
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
