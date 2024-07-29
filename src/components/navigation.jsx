import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Group, Button } from "@mantine/core";

const Navigation = () => {
  return (
    <Navbar>
      <Container>
        <Group position="apart">
          <Button component={Link} to="/">
            Home
          </Button>
          <Button component={Link} to="/adoption">
            Adoption
          </Button>
          <Button component={Link} to="/quiz">
            Quiz
          </Button>
          <Button component={Link} to="/breeds">
            Breeds
          </Button>
        </Group>
      </Container>
    </Navbar>
  );
};

export default Navigation;
