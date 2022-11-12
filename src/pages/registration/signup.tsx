import { Box } from "@mantine/core";
import SignupForm from "../../components/auth/registration/signup/form";

export default function SignUp() {
  return (
    <Box
      style={{
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <SignupForm />
    </Box>
  );
}
