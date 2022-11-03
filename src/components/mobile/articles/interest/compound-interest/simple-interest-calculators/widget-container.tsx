import { Box, useMantineTheme } from "@mantine/core";

export default function WidgetContainer({ children }) {
  const theme = useMantineTheme();
  return (
    <Box
      style={{
        width: "100vw",
        margin: "auto",
        padding: "25px",
        backgroundColor: theme.colors.indigo[0],
      }}
    >
      {children}
    </Box>
  );
}
