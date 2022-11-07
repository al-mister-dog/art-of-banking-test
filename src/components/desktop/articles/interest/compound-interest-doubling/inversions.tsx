import { Center, SimpleGrid, useMantineTheme } from "@mantine/core";
import WidgetContainer from "../../../../shared-ui/widget-container/desktop";

export default function Inversions() {
  const theme = useMantineTheme();
  return (
    <WidgetContainer color={theme.colors.violet[0]}>
      <Center>
        <SimpleGrid cols={4} spacing={100}>
          <div>
            <h4>Addition</h4>
            <h3>
              <span style={{ color: theme.colors.red[9] }}>2</span> + {""}
              <span style={{ color: theme.colors.yellow[9] }}>3</span> = {""}
              <span style={{ color: theme.colors.blue[9] }}>5</span>
            </h3>
            <h3>
              <span style={{ color: theme.colors.blue[9] }}>5</span> - {""}
              <span style={{ color: theme.colors.yellow[9] }}>3</span> = {""}
              <span style={{ color: theme.colors.red[9] }}>2</span>
            </h3>
            <h4>Subtraction</h4>
          </div>
          <div>
            <h4>Multlipication</h4>
            <h3>
              <span style={{ color: theme.colors.red[9] }}>2</span> * {""}
              <span style={{ color: theme.colors.yellow[9] }}>3</span> = {""}
              <span style={{ color: theme.colors.blue[9] }}>6</span>
            </h3>
            <h3>
              <span style={{ color: theme.colors.blue[9] }}>6</span> / {""}
              <span style={{ color: theme.colors.yellow[9] }}>3</span> = {""}
              <span style={{ color: theme.colors.red[9] }}>2</span>
            </h3>
            <h4>Division</h4>
          </div>
          <div>
            <h4>Square</h4>
            <h3>
              <span style={{ color: theme.colors.red[9] }}>10</span>(²){""}={""}
              <span style={{ color: theme.colors.blue[9] }}>100</span>
            </h3>
            <h3>
              √ <span style={{ color: theme.colors.blue[9] }}>100</span> = {""}
              <span style={{ color: theme.colors.red[9] }}>10</span>
            </h3>
            <h4>Square Root</h4>
          </div>
          <div>
            <h4>Exponentiation</h4>
            <h3>
              <span style={{ color: theme.colors.blue[9] }}>2</span> ^ {""}
              <span style={{ color: theme.colors.yellow[9] }}>3</span> = {""}
              <span style={{ color: theme.colors.red[9] }}>8</span>
            </h3>
            <h3>
              log<span style={{ color: theme.colors.blue[9] }}>2</span>(
              <span style={{ color: theme.colors.red[9] }}>8</span>) = {""}
              <span style={{ color: theme.colors.yellow[9] }}>3</span>
            </h3>
            <h4>Logarithm</h4>
          </div>
        </SimpleGrid>
      </Center>
    </WidgetContainer>
  );
}
