import { Col, Container, Tab , Row , Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import AdminAccount from "../assets/MyThesisRes/Admin_Account.png";
import import_temp from "../assets/MyThesisRes/Import_Temp.png";
import login from "../assets/MyThesisRes/Login.png";
import past_report from "../assets/MyThesisRes/Past_Report.png";
import report_creation from "../assets/MyThesisRes/Report_Creation.png";
import report_status from "../assets/MyThesisRes/Report_Status.png";
import search_student from "../assets/MyThesisRes/Search_Student.png";
import teacher_account from "../assets/MyThesisRes/Teacher_Account.png";
import user_creation from "../assets/MyThesisRes/User _Creation_Roles.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Admeco",
      description: "Login 365 / Admin Account",
      imgUrl: login,
    },
    {
      title: "Admeco",
      description: "Admin Account",
      imgUrl: AdminAccount,
    },
    {
      title: "Admeco",
      description: "Teacher Account",
      imgUrl: teacher_account,
    }, 
    {
      title: "Admeco",
      description: "User Creation",
      imgUrl: user_creation,
    },
    
    {
      title: "Admeco",
      description: "Excel Import",
      imgUrl: import_temp,
    },
    {
      title: "Admeco",
      description: "Report Creation",
      imgUrl: report_creation,
    },
    {
      title: "Admeco",
      description: "Report Status",
      imgUrl: report_status,
    },
    {
      title: "Admeco",
      description: "Past Report",
      imgUrl: past_report,
    },
    {
      title: "Admeco",
      description: "Search Student",
      imgUrl: search_student,
    },
   


  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
            {({isVisible}) =>
              <div className={isVisible ? "animated_animated animate_fadeIn" : ""}>
            <h2>Projects</h2>
            <p>My Current Done Projects</p>
            
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab"> 

                <Nav.Item>
                  <Nav.Link eventKey="first">My Thesis Website Project</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">???</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="third">???</Nav.Link>
                </Nav.Item>
                
              </Nav>

              <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
               
                 
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>

            </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
