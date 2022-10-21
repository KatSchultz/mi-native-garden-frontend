import { Container, Title, Paper, Text, Anchor, Button } from "@mantine/core";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { loginWithGoogle } from "../services/auth.service";
import AppContainer from "../components/AppContainer";

export default function LoginPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await loginWithGoogle();
    if (user) {
      navigate("/");
    }
  };

  if (user) {
    navigate("/");
  }

  return (
    <AppContainer>
      <Container size={400} my={100}>
        <Title align="center">Login</Title>

        <Paper withBorder shadow="md" p="md" mt={30} radius="md">
          <Title align="center">Welcome back!</Title>
          <Text color="dimmed" size="lg" align="center" mt={5}>
            Don't have an account yet?{" "}
            <Anchor
              component={Link}
              to="/signup"
              className="font-medium !no-underline"
            >
              Sign up
            </Anchor>
          </Text>

          <Button
            fullWidth
            mt="xl"
            variant="default"
            size="lg"
            onClick={handleLogin}
          >
            Login with Google
          </Button>
        </Paper>
      </Container>
    </AppContainer>
  );
}
