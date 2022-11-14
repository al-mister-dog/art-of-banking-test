import {
  TextInput,
  Button,
  Group,
  Box,
  Stack,
  Divider,
  Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { PasswordInput } from "@mantine/core";
import { colors } from "../../../../config/colorPalette";
import { useState } from "react";
import {
  BrandGithub,
  BrandGoogle,
  BrandReddit,
  BrandTwitter,
} from "tabler-icons-react";
import { signIn } from "next-auth/react";

export default function SignupForm() {
  const [visible, { toggle }] = useDisclosure(false);
  const [signupStatus, setSignupStatus] = useState("");
  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },

    validate: {
      username: (value) =>
        value.length < 3 ? "First name must have at least 3 letters" : null,
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
      confirmpassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  async function createUser(values) {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ values }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      setSignupStatus(data.message);
    }

    setSignupStatus(data.message);
  }

  return (
    <>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <h1 style={{ color: colors.textColor }}>Sign up</h1>
        <form onSubmit={form.onSubmit((values) => createUser(values))}>
          <TextInput
            label="Username"
            placeholder="username"
            {...form.getInputProps("username")}
          />
          <TextInput
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            defaultValue="secret"
            visible={visible}
            onVisibilityChange={toggle}
            {...form.getInputProps("password")}
          />
          <PasswordInput
            label="Confirm password"
            defaultValue="secret"
            visible={visible}
            onVisibilityChange={toggle}
            {...form.getInputProps("confirmpassword")}
          />

          <Group position="right" mt="md">
            <Button type="submit" color="violet">
              Sign up
            </Button>
          </Group>
          <p>{signupStatus}</p>
        </form>
      </Box>
      <Box sx={{ maxWidth: 550, margin: "auto" }}>
        <Divider my="xs" label="Or Sign in with" labelPosition="center" />
        <Center>
          <Group mt={25}>
            <Button
              variant="outline"
              color="violet"
              leftIcon={<BrandGithub />}
              onClick={() => signIn()}
            >
              Github
            </Button>
            <Button
              variant="outline"
              color="violet"
              leftIcon={<BrandGoogle />}
              onClick={() => signIn()}
            >
              Google
            </Button>
            <Button
              variant="outline"
              color="violet"
              leftIcon={<BrandTwitter />}
              onClick={() => signIn()}
            >
              Twitter
            </Button>
            <Button
              variant="outline"
              color="violet"
              leftIcon={<BrandReddit />}
              onClick={() => signIn()}
            >
              Reddit
            </Button>
          </Group>
        </Center>
      </Box>
    </>
  );
}
