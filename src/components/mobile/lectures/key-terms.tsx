import { keyTerms } from "../../../config/normalized-data/key-terms";
import {
  Button,
  Text,
  useMantineTheme,
  createStyles,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { colors } from "../../../config/colorPalette";

const useStyles = createStyles((theme) => ({
  title: {
    padding: 16,
    marginBottom: 0,
    letterSpacing: 1,
    fontWeight: "bold",
    display: "inline-block",
    backgroundColor: colors.background1,
    borderTop: `1px solid ${theme.colors.red[1]}`,
    borderRight: `1px solid ${theme.colors.red[1]}`,
    borderTopRightRadius: 5,
    paddingLeft: "50px",
    paddingRight: "50px",
    color: colors.text
  },
  card: {
    padding: 16,
    backgroundColor: colors.background1
  },
  desktopWidth: {
    width: "65%",
  },
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
      <div style={{ backgroundColor: colors.background1 }}>
        <h2 className={classes.title}>Key Terms</h2>
      </div>

      <div style={{ padding: "25px" }}>
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
      </div>

      <div style={{ padding: "0px 50px" }}>
        <h2 style={{ padding: 0, margin: 0, letterSpacing: 1, color: colors.text }}>
          {selectedTerm.title}
        </h2>
        <Text>{selectedTerm.definition}</Text>
      </div>
    </>
  );
}
