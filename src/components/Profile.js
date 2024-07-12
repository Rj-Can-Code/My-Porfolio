import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Profile = () => {
  return (
    <section className="profile" id="profile">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={`profile-img ${
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }`}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`profile-info ${
                    isVisible ? "animate__animated animate__fadeInRight" : ""
                  }`}
                >
                  <h2 className="mb-4">Profile</h2>
                  <p className="lead mb-4">
                    To get an opportunity were I can make the best of my
                    potential and contribute to the organization’s growth. I am
                    also highly motivated and hardworking individual looking for
                    a responsible role in a reputable organization.
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <strong>Name:</strong> Rj manzano
                    </li>
                    <li>
                      <strong>Occupation:</strong> Web Developer and Game
                      Developer{" "}
                    </li>
                    <li>
                      <strong>Location:</strong> Bulacan, Stamaria
                    </li>
                  </ul>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
