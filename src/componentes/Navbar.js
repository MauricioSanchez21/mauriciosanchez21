import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const NavBarHeader = () => {
    return (
        <>
            <Navbar className="navBg" expand="lg" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" > Mi portafolio web </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/Formacion_academica">Formación academica</Nav.Link>
                            <Nav.Link as={Link} to="/Experiencia">Experiencia</Nav.Link>
                            <Nav.Link as={Link} to="/Cursos_y_certificaciones">Cursos y certificaciones</Nav.Link>
                            <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}
export default NavBarHeader