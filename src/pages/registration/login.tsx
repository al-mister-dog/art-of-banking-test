import { Box } from "@mantine/core";
import { getSession } from "next-auth/react";
import LoginForm from "../../components/auth/registration/login/form";

export default function login() {
  return (
    <Box mt={100}>
      <LoginForm />
    </Box>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: { session },
  };
}
