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
                            objectFit: "cover"
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
                            src="./imgs/novacancy_logo_Negro_solo-01.png"
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
                <div
                    className="d-flex flex-row justify-content-center mb-2"
                    style={{ fontSize: "30px" }}
                >
                    <div className="p-2">
                        <i className="fab fa-instagram" />
                    </div>
                    <div className="p-2">
                        <i className="fab fa-facebook" />
                    </div>
                    <div className="p-2">
                        <i className="fab fa-youtube" />
                    </div>
                    <div className="p-2">
                        <i className="fab fa-twitter" />
                    </div>
                </div>
            </Col>
        </Row>
    );
};

const Knowus = () => {
    return (
        <Row>
            <Col xs="12">
                <div className="d-flex justify-content-center">
                <div className="text-center" style={{width: "100%", minHeight: "100px", marginTop: "50px"}}>
                <button type="button" class="btn btn-outline-dark">Conocenos</button>

                </div>
                </div>
                <div className="d-flex flex-column">
                    <h3>Misión</h3>
                    <p>
                        novacancy films es una productora audiovisual que
                        desarrolla material cinematográfico, audiovisual y
                        fotográfico para videos corporativos, campañas
                        publicitarias, eventos sociales y producciones para
                        televisión y cine. Así mismo produce y realiza piezas
                        graficas con sentido narrativo para las empresas que
                        buscan promocionar sus productos a través de las artes
                        gráficas.
                    </p>
                    <h3>Vision</h3>
                    <p>
                        En 2023, novacancy films es la productora audiovisual
                        más reconocida en la región de Santander, por sus
                        filminutos, cortometrajes y por la coproducción de
                        programas de televisión regional. Además, es reconocida
                        en Colombia por la narrativa innovadora y la producción
                        cinematográfica de videos corporativos y eventos
                        sociales.
                    </p>
                </div>
            </Col>
            <Col xs="12">
                <div className="row">
                    <div className="col-6">
                        <img
                            style={{
                                width: "100%",
                                objectFit: "cover"
                            }}
                            src="https://avatars3.githubusercontent.com/u/12448595?s=460&v=4"
                            alt="Card cap"
                        />
                    </div>
                    <div className="col-6">
                        <h6>Sergio Junca</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsa reiciendis architecto tempora ipsam dolor
                            eveniet corrupti at sit id odio?
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h6>Sergio Junca</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsa reiciendis architecto tempora ipsam dolor
                            eveniet corrupti at sit id odio?
                        </p>
                    </div>
                    <div className="col-6">
                        <img
                            style={{
                                width: "100%",
                                objectFit: "cover"
                            }}
                            src="https://avatars3.githubusercontent.com/u/12448595?s=460&v=4"
                            alt="Card cap"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <img
                            style={{
                                width: "100%",
                                objectFit: "cover"
                            }}
                            src="https://avatars3.githubusercontent.com/u/12448595?s=460&v=4"
                            alt="Card cap"
                        />
                    </div>
                    <div className="col-6">
                        <h6>Sergio Junca</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsa reiciendis architecto tempora ipsam dolor
                            eveniet corrupti at sit id odio?
                        </p>
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
                <Knowus />
            </Container>
        );
    }
}

export default App;
