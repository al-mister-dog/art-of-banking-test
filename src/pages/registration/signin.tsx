import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
} from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import {
  Box,
  Group,
  PasswordInput,
  TextInput,
  Button,
  Stack,
  Divider,
  Center,
} from "@mantine/core";

import {
  BrandGithub,
  BrandGoogle,
  BrandReddit,
  BrandTwitter,
  Login,
  Mail,
} from "tabler-icons-react";
import { useState } from "react";
import { colors } from "../../config/colorPalette";

const icons = {
  GitHub: <BrandGithub />,
  Google: <BrandGoogle />,
  Credentials: <Login />,
  Email: <Mail />,
};

export default function LoginForm({ providers }) {
  const router = useRouter();
  const [visible, { toggle }] = useDisclosure(false);
  const [loginStatus, setLoginStatus] = useState("");
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => {
        if (value.length < 6) {
          return "Password must be at least 6 characters";
        }
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/.test(value) === false) {
          return "Password must contain a number";
        }
        return null;
      },
    },
  });

  async function handleSubmit(values) {
    const { email, password } = values;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result.error) {
      router.replace("/community");
    } else {
      setLoginStatus(result.error);
    }
  }

  async function handleSignIn(id) {
    try {
      await signIn(id);
    } catch (error) {
      setLoginStatus(error);
    }
  }

  return (
    <>
      <Box sx={{ maxWidth: 300, height: "100vh" }} mx="auto" mt={100}>
        <Center>
          <h1 style={{ color: colors.textColor }}>Sign in</h1>
        </Center>

        <Center>
          <Stack>
            {Object.values(providers).map((provider: any) => (
              <div key={provider.name}>
                {provider.name === "Email" ? (
                  <>
                    <EmailInput provider={provider} />
                    <Divider
                      my="xs"
                      label="Or Sign in with"
                      labelPosition="center"
                    />
                  </>
                ) : (
                  <Button
                    onClick={() => handleSignIn(provider.id)}
                    style={{ width: "100%" }}
                    variant="outline"
                    color="violet"
                    leftIcon={icons[provider.name]}
                  >
                    {provider.name}
                  </Button>
                )}
              </div>
            ))}
          </Stack>
        </Center>
      </Box>
    </>
  );
}

function EmailInput({ provider }) {
  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  async function handleSubmit(email) {
    const result = await signIn("email", { email, redirect: false });
  }
  return (
    <Stack>
      <TextInput
        label="Email"
        placeholder="your@email.com"
        {...form.getInputProps("email")}
      />
      <Button
        onClick={() => handleSubmit(form.values.email)}
        variant="outline"
        color="violet"
        leftIcon={icons[provider.name]}
      >
        Sign in with Email
      </Button>
    </Stack>
  );
}

export async function getServerSideProps(context) {
  // const csrfToken = await getCsrfToken(context);
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
