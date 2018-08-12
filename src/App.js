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
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
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
                        src="./imgs/logo1.png"
                        alt="Card cap"
                    />
                </div>
            </Col>
        </Row>
    );
};
//
//
//
//
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
                            src="./imgs/logo2.png"
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
//
//
//
//
//
//

const Knowus = () => {
    return (
        <Row>
            <Col xs="12">
                <div className="d-flex justify-content-center">
                    <div
                        className="text-center"
                        style={{
                            width: "100%",
                            minHeight: "100px",
                            marginTop: "50px"
                        }}
                    >
                        <button style={{
                            fontSize: "1.25rem",
                        }} type="button" class="btn btn-outline-dark">
                            Conocenos
                        </button>
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
                    <div className="col-6 pb-4">
                        <img
                            style={{
                                width: "100%",
                                objectFit: "cover"
                            }}
                            src="https://picsum.photos/200/250"
                            alt="Card cap"
                        />
                    </div>
                    <div className="col-6 d-flex flex-column">
                        <h6>
                            <strong>José Caceres</strong>
                        </h6>

                        <p style={{ margin: 0 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsa reiciendis architecto tempora ipsam dolor
                            eveniet corrupti at sit id odio?
                        </p>
                        <div className="align-self-end">
                            <div className="iconWrapper">
                                <i
                                    className="fab fa-twitter"
                                    style={{ padding: "1rem" }}
                                />
                                <i
                                    className="fab fa-linkedin"
                                    style={{ padding: "1rem" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 pb-4">
                        <img
                            style={{
                                width: "100%",
                                objectFit: "cover"
                            }}
                            src="https://picsum.photos/200/250"
                            alt="Card cap"
                        />
                    </div>
                    <div className="col-6 d-flex flex-column">
                        <h6>
                            <strong>Ernesto Fernandez</strong>
                        </h6>

                        <p style={{ margin: 0 }}>Creative Designer</p>
                        <p style={{ margin: 0 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsa reiciendis architecto tempora ipsam dolor
                            eveniet corrupti at sit id odio?
                        </p>
                        <div className="align-self-end">
                            <div className="iconWrapper">
                                <i
                                    className="fab fa-twitter"
                                    style={{ padding: "1rem" }}
                                />
                                <i
                                    className="fab fa-linkedin"
                                    style={{ padding: "1rem" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 pb-4">
                        <img
                            style={{
                                width: "100%",
                                objectFit: "cover"
                            }}
                            src="https://picsum.photos/200/250"
                            alt="Card cap"
                        />
                    </div>
                    <div className="col-6 d-flex flex-column">
                        <h6>
                            <strong>Sergio Junca</strong>
                        </h6>

                        <p style={{ margin: 0 }}>Software Architect</p>
                        <div className="align-self-end">
                            <div className="iconWrapper">
                                <i
                                    className="fab fa-twitter"
                                    style={{ padding: "1rem" }}
                                />
                                <i
                                    className="fab fa-linkedin"
                                    style={{ padding: "1rem" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};
//
//
//
//
//
//

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <Row>
                <Col xs="12">
                    <div>
                        <Navbar
                            color="white"
                            light
                            className="pt-2"
                            fixed="bottom"
                            expand="top"
                        >
                            <NavbarBrand href="/" className="mr-auto">
                                novacancy films
                            </NavbarBrand>
                            <NavbarToggler
                                onClick={this.toggleNavbar}
                                className="mr-2"
                            />
                            <Collapse isOpen={!this.state.collapsed} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink href="#">Clientes</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Servicios</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Portafolio</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Clientes</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Contacto</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                </Col>
            </Row>
        );
    }
}
//
//
//
//
//
//
//
const Clients = () => {
    return (
        <div>
            <Row>
                <Col xs="12">
                    <div className="d-flex justify-content-center">
                        <div
                            className="text-center"
                            style={{
                                width: "100%",
                                minHeight: "100px",
                                marginTop: "50px"
                            }}
                        >
                            <button style={{
                                fontSize: "1.25rem"
                            }} type="button" class="btn btn-outline-dark">
                                Clientes
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="6">
                    <div className="d-flex justify-content-center pb-2">
                        <div className="text-center">
                            <Card>
                                <CardImg
                                style={{
                                    objectFit:"cover"
                                }}
                                    top
                                    width="100%"
                                    src="https://picsum.photos/318/180"
                                    alt="Card image cap"
                                />
                                <CardBody>
                                    <CardTitle>Spotify</CardTitle>
                                    <CardSubtitle>Comercial</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Col>
                <Col xs="6">
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                    alt="Card image cap"
                                />
                                <CardBody>
                                    <CardTitle>Semana</CardTitle>
                                    <CardSubtitle>Filminute</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Col>
               
            </Row>
            <Row>
                <Col xs="6">
                    <div className="d-flex justify-content-center pb-2">
                        <div className="text-center">
                            <Card>
                                <CardImg
                                style={{
                                    objectFit:"cover"
                                }}
                                    top
                                    width="100%"
                                    src="https://picsum.photos/318/180"
                                    alt="Card image cap"
                                />
                                <CardBody>
                                    <CardTitle>Fox Sports</CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Col>
                <Col xs="6">
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                    alt="Card image cap"
                                />
                                <CardBody>
                                    <CardTitle>Vanguardia</CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Col>
               
            </Row>
            <Row>
                <Col xs="6">
                    <div className="d-flex justify-content-center pb-2">
                        <div className="text-center">
                            <Card>
                                <CardImg
                                style={{
                                    objectFit:"cover"
                                }}
                                    top
                                    width="100%"
                                    src="https://picsum.photos/318/180"
                                    alt="Card image cap"
                                />
                                <CardBody>
                                    <CardTitle>Tech Crunch</CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Col>
                <Col xs="6">
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                    alt="Card image cap"
                                />
                                <CardBody>
                                    <CardTitle>Pied Piper</CardTitle>
                                    <CardSubtitle>Filminute</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Col>
               
            </Row>
         
           
        </div>
    );
};
//
//
//
//
//
//

class App extends Component {
    render() {
        return (
            <Container>
                <Intro />
                <Home />
                <Knowus />
                <Clients />
                <Footer />
            </Container>
        );
    }
}

export default App;
