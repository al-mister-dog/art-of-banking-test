import { Box } from "@mantine/core";
import { getProviders, getSession } from "next-auth/react";
import LoginForm from "../../components/auth/registration/login/form";

export default function login({ providers }) {
  return (
    <Box mt={100}>
      <LoginForm providers={providers} />
    </Box>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const providers = await getProviders();
  if (session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: { providers },
  };
}
