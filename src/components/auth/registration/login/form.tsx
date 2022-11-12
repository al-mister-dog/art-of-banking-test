import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { PasswordInput, Stack } from "@mantine/core";

export default function LoginForm() {
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

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
