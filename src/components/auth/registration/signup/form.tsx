import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { PasswordInput } from "@mantine/core";

export default function SignupForm() {
  const [visible, { toggle }] = useDisclosure(false);

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

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Username"
          placeholder="username"
          {...form.getInputProps("username")}
        />
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
      </form>
    </Box>
  );
}
