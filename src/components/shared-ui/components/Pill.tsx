import { Box } from "@mantine/core";

export default function Pill({ color, children }) {
  return (
    <Box
      mt={10}
      style={{
        border: `1px solid ${color}`,
        padding: 10,
        borderRadius: 10,
      }}
    >
      {children}
    </Box>
  );
}
