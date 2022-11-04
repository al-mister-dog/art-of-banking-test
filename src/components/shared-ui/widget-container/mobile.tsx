import { Box } from "@mantine/core";

export default function WidgetContainer({ color, children }) {
  return (
    <Box
      style={{
        width: "100vw",
        margin: "auto",
        padding: "25px",
        backgroundColor: color,
      }}
    >
      {children}
    </Box>
  );
}
