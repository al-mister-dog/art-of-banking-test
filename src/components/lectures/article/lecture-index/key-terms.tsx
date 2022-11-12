import { keyTerms } from "../../../../config/normalized-data/key-terms";
import {
  Button,
  Text,
  useMantineTheme,
  createStyles,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { colors } from "../../../../config/colorPalette";

const useStyles = createStyles((theme) => ({
  button: {
    fontSize: "1.2rem",
    letterSpacing: "1px",
    margin: "10px",
    "&:focus": {
      background: theme.colors.violet,
      color: "white",
    },
  },
}));

export default function KeyTerms({ ids }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [selectedTerm, setSelectedTerm] = useState({
    title: keyTerms[ids[0]].title,
    definition: keyTerms[ids[0]].definition,
  });

  const keyTermsArray = ids.map((kt) => ({
    key: kt,
    title: keyTerms[kt].title,
    definition: keyTerms[kt].definition,
  }));

  return (
    <>
      <h1 style={{ margin: 0, padding: 0, fontWeight: "lighter" }}>
        Key Terms
      </h1>
      {keyTermsArray.map((keyTerm) => (
        <Button
          key={keyTerm.key}
          color="violet"
          variant="outline"
          radius="xs"
          className={classes.button}
          onClick={() =>
            setSelectedTerm({
              title: keyTerm.title,
              definition: keyTerm.definition,
            })
          }
        >
          {keyTerm.title}
        </Button>
      ))}
      <h2 style={{ padding: 0, margin: 0, letterSpacing: 1 }}>
        {selectedTerm.title}
      </h2>
      <Text>{selectedTerm.definition}</Text>
    </>
  );
}
