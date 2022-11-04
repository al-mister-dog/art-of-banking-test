import { Box, useMantineTheme } from "@mantine/core";

export default function WidgetContainer({ children }) {
  const theme = useMantineTheme();
  return (
    <Box
      style={{
        width: "100vw",
        margin: "auto",
        marginTop: "-25px",
        padding: "25px",
        backgroundColor: theme.colors.grape[0],
      }}
    >
      {children}
    </Box>
  );
}
