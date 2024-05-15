import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import im1 from "../assets/img/im1.jpg";
import im2 from "../assets/img/im2.png";
import im3 from "../assets/img/im3.png";
import im4 from "../assets/img/im4.jpg";
import im5 from "../assets/img/im5.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Zonvia.com",
            description: "Luxury Fashion and Apparel Store",
            imgUrl: im1,
        },
        {
            title: "Avxnue22",
            description: "Luxury Fashion and Apparel Store",
            imgUrl: im2,
        },
        {
            title: "Einkify",
            description: "Customizeable Phone Case Using E-Ink Technology",
            imgUrl: im3,
        },
        {
            title: "Pleshy",
            description: "Astro Light Projector",
            imgUrl: im4,
        },
        {
            title: "Coming Soon",
            description: "TBA",
            imgUrl: im5,
        },
        {
            title: "Coming Soon",
            description: "TBA",
            imgUrl: im5,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Websites</h2>
                                    <p>Here are a list of websites I own or have owned in the past. Most of these are apparel stores but you will see a few single product stores in here aswell</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                         
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
          
        </section>
    )
}