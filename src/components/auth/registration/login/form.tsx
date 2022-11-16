import { signIn } from "next-auth/react";
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
import { colors } from "../../../../config/colorPalette";
import {
  BrandGithub,
  BrandGoogle,
  BrandReddit,
  BrandTwitter,
  Login,
  Mail,
} from "tabler-icons-react";
import { useState } from "react";

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

  return (
    <>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <h1 style={{ color: colors.textColor }}>Log in</h1>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            visible={visible}
            onVisibilityChange={toggle}
            {...form.getInputProps("password")}
          />

          <Group position="right" mt="md">
            <Button type="submit" color="violet">
              Log in
            </Button>
          </Group>
        </form>
        <p>{loginStatus}</p>
      </Box>
      <Box sx={{ maxWidth: 550, margin: "auto" }}>
        <Divider my="xs" label="Or Sign in with" labelPosition="center" />
        <Center>
          <Group mt={25}>
            {Object.values(providers).map((provider: any) => (
              <div key={provider.name}>
                {provider.name === "Email" ? (
                  <EmailInput provider={provider} />
                ) : (
                  <Button
                    onClick={() => signIn(provider.id)}
                    variant="outline"
                    color="violet"
                    leftIcon={icons[provider.name]}
                  >
                    {provider.name}
                  </Button>
                )}
              </div>
            ))}
          </Group>
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

  async function handleSubmit(values) {
    const { email } = values;
    const result = await signIn("email", { email: email });
    alert(JSON.stringify(result));
  }
  return (
    <Stack>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <Button
          variant="outline"
          color="violet"
          leftIcon={icons[provider.name]}
        >
          Sign in with Email
        </Button>
      </form>
    </Stack>
  );
}
