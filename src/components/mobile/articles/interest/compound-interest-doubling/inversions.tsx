import { Center, SimpleGrid, useMantineTheme } from "@mantine/core";
import WidgetContainer from "../../../../shared-ui/widget-container/mobile";

export default function Inversions() {
  const theme = useMantineTheme();
  return (
    <WidgetContainer color={theme.colors.violet[0]}>
      <Center>
        <SimpleGrid cols={2}>
          <div>
            <div>
              <h4 style={{ margin: 0 }}>Addition</h4>
              <h3 style={{ padding: 0, margin: 0 }}>
                <span style={{ color: theme.colors.red[9] }}>2</span> + {""}
                <span style={{ color: theme.colors.yellow[9] }}>3</span> = {""}
                <span style={{ color: theme.colors.blue[9] }}>5</span>
              </h3>
              <h3 style={{ padding: 0, margin: 0 }}>
                <span style={{ color: theme.colors.blue[9] }}>5</span> - {""}
                <span style={{ color: theme.colors.yellow[9] }}>3</span> = {""}
                <span style={{ color: theme.colors.red[9] }}>2</span>
              </h3>
              <h4 style={{ margin: 0 }}>Subtraction</h4>
            </div>
            <div style={{ marginTop: 20 }}>
              <h4 style={{ margin: 0 }}>Multlipication</h4>
              <h3 style={{ padding: 0, margin: 0 }}>
                <span style={{ color: theme.colors.red[9] }}>2</span> * {""}
                <span style={{ color: theme.colors.yellow[9] }}>3</span> = {""}
                <span style={{ color: theme.colors.blue[9] }}>6</span>
              </h3>
              <h3 style={{ padding: 0, margin: 0 }}>
                <span style={{ color: theme.colors.blue[9] }}>6</span> / {""}
                <span style={{ color: theme.colors.yellow[9] }}>3</span> = {""}
                <span style={{ color: theme.colors.red[9] }}>2</span>
              </h3>
              <h4 style={{ margin: 0 }}>Division</h4>
            </div>
          </div>
          <div>
            <div>
              <h4 style={{ margin: 0 }}>Square</h4>
              <h3 style={{ padding: 0, margin: 0 }}>
                <span style={{ color: theme.colors.red[9] }}>10</span>(²){""}=
                {""}
                <span style={{ color: theme.colors.blue[9] }}>100</span>
              </h3>
              <h3 style={{ padding: 0, margin: 0 }}>
                √ <span style={{ color: theme.colors.blue[9] }}>100</span> ={" "}
                {""}
                <span style={{ color: theme.colors.red[9] }}>10</span>
              </h3>
              <h4 style={{ margin: 0 }}>Square Root</h4>
            </div>
            <div style={{ marginTop: 20 }}>
              <h4 style={{ margin: 0 }}>Exponentiation</h4>
              <h3 style={{ padding: 0, margin: 0 }}>
                <span style={{ color: theme.colors.blue[9] }}>2</span> ^ {""}
                <span style={{ color: theme.colors.yellow[9] }}>3</span> = {""}
                <span style={{ color: theme.colors.red[9] }}>8</span>
              </h3>
              <h3 style={{ padding: 0, margin: 0 }}>
                log<span style={{ color: theme.colors.blue[9] }}>2</span>(
                <span style={{ color: theme.colors.red[9] }}>8</span>) = {""}
                <span style={{ color: theme.colors.yellow[9] }}>3</span>
              </h3>
              <h4 style={{ margin: 0 }}>Logarithm</h4>
            </div>
          </div>
        </SimpleGrid>
      </Center>
    </WidgetContainer>
  );
}
