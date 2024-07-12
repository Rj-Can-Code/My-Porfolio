import React from "react";
import { Col, Row } from "react-bootstrap";

export const ContactInfo = ({ email, phoneNumber }) => {

  return (
    <Col lg={12}>
      <div className="contactInfo-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Contact Information</h3>
            <ul className="list-unstyled">
              <li>
                <strong>Email: letmeread00@gmail.com</strong> {email}
              </li>
              <li>
                <strong>Phone: 09760352225</strong> {phoneNumber}
              </li>
              
            </ul>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

