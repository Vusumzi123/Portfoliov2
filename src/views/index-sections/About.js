import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// core components

function About() {
  return (
    <>
      <div className="section section-about">
        <Container>
          <Card
            style={{
              position: "relative",
              top: "-6rem"
            }}
          >
            <CardContent>
              <Row>
                <Col md="4">
                  <h1 className="text-center">5+</h1>
                  <p className="text-center">años de experiencia</p>
                </Col>
                <Col md="4">
                  <h1 className="text-center">120+</h1>
                  <p className="text-center">proyectos realizados</p>
                </Col>
                <Col md="4">
                  <h1 className="text-center">20+</h1>
                  <p className="text-center">tecnologías dominadas</p>
                </Col>
              </Row>
            </CardContent>
          </Card>
          <Row className="p-3">
            <p>
              Soy desarrollador fullstack enfocado en el desarrollo de
              aplicaciones web, tengo proyectos de software profesionales y
              personales con un gran número de lenguajes de programación, mi
              pasion es programar, aprender y enseñar cosas y tecnologías
              nuevas.
            </p>
            <p>
              Tengo experiencia enseñando programación desde lo más básico hasta
              los conceptos mas avanzados, tambien experiencia profecional en el
              desarrollo y manteniemnto de aplicaciones empresariales, con
              corporaciones, empresas y negocios nacionales e internacionales.
            </p>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
