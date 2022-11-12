import { Box } from "@mantine/core";
import LoginForm from "../../components/auth/registration/login/form";

export default function login() {
  return (
    <Box
      style={{
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <LoginForm />
    </Box>
  );
}
