import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { Box, Group, PasswordInput, TextInput, Button } from "@mantine/core";
import { colors } from "../../../../config/colorPalette";

export default function LoginForm() {
  const router = useRouter();
  const [visible, { toggle }] = useDisclosure(false);
  
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
    alert(JSON.stringify(result));
    if (!result.error) {
      // set some auth state
      router.replace("/profile");
    }
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <h1 style={{ color: colors.textColor }}>Log in</h1>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          withAsterisk
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

        <Group position="right" mt="md">
          <Button type="submit" color="violet">
            Log in
          </Button>
        </Group>
      </form>
    </Box>
  );
}
