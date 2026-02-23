import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function CustomNavBar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Projects", path: "/projects" },
  ];

  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const label = (item) => {
    if (hovered === item.name) return `[${item.name}]`;
    if (isActive(item.path)) return `[${item.name}]`;
    return item.name;
  };

  return (
    <Navbar className="custom-navbar" fixed="top">
      <Container>
        <Nav className="me-auto">
          {navItems.map((item) => (
            <Nav.Link
              key={item.name}
              as={Link}
              to={item.path}
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {label(item)}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;