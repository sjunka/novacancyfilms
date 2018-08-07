import React, { Component, Fragment } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from "reactstrap";

const Intro = () => {
    return (
        <Row>
            <Col xs="12">

              <div className="p-2 text-center">
                        <img
                            style={{
                                width: "100%",
                                objectFit: "cover",
                            }}
                            src="./imgs/novacancy_logo_Negro-01.png"
                            alt="Card cap"
                        />
                    </div>
            </Col>
        </Row>
    );
};
const Home = () => {
    return (
        <Row>
            <Col xs="12">
                <div className="d-flex flex-column align-items-center">
                    <div className="p-2 text-center">
                        <img
                            style={{
                                width: "70%",
                                objectFit: "cover",
                                height: "200px"
                            }}
                            src="./imgs/novacancy_logo_Negro-01.png"
                            alt="Card cap"
                        />
                    </div>
                    <div className="p-2">Conocenos</div>
                    <div className="p-2">Servicios</div>
                    <div className="p-2">Portafolio</div>
                    <div className="p-2">Clientes</div>
                    <div className="p-2">Contacto</div>
                </div>
            </Col>

            <Col xs="12">
                <div className="d-flex flex-row justify-content-center mb-2" style={{fontSize: "30px"}}>
                    <div className="p-2">
                        <i class="fab fa-instagram" />
                    </div>
                    <div className="p-2">
                        <i class="fab fa-facebook" />
                    </div>
                    <div className="p-2">
                        <i class="fab fa-youtube" />
                    </div>
                    <div className="p-2">
                        <i class="fab fa-twitter" />
                    </div>
                </div>
            </Col>
        </Row>
    );
};

class App extends Component {
    render() {
        return (
            <Container>
                <Intro />
                <Home />
            </Container>
        );
    }
}

export default App;
