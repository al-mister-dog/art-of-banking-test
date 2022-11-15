import { Box } from "@mantine/core";
import { getSession } from "next-auth/react";
import SignupForm from "../../components/auth/registration/signup/form";

export default function SignUp() {
  return (
    <Box mt={100}>
      <SignupForm />
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
