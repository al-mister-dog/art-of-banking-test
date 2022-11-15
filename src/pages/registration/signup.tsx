import { Box } from "@mantine/core";
import { getProviders, getSession } from "next-auth/react";
import SignupForm from "../../components/auth/registration/signup/form";

export default function SignUp({ providers }) {
  return (
    <Box mt={100}>
      <SignupForm providers={providers} />
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
