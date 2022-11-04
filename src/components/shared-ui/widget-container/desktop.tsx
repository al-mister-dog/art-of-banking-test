import { Box } from "@mantine/core";

export default function WidgetContainer({ color, children }) {
  return (
    <Box
      style={{
        width: "70vw",
        margin: "auto",
        padding: "25px",
        backgroundColor: color,
      }}
    >
      {children}
    </Box>
  );
}
