import { useAppSelector } from "../../../../../app/hooks";
import { selectSettings } from "../../../../../features/settings/settingsSlice";
import BalanceEachRound from "./balance-displays/balance-sheet-rows/round";
import BalanceEachTurn from "./balance-displays/balance-sheet-rows/static";
import BalanceFlash from "./balance-displays/balance-sheet-rows/flash";
import BalanceOff from "./balance-displays/balance-sheet-rows/off";
import { Text, useMantineTheme } from "@mantine/core";
import { System } from "../../../../../domain/system";

export default function BalanceSheetRowHeading({ side, id, textColor, bank }) {
  const { colorSettings, displaySettings } = useAppSelector(selectSettings);
  const theme = useMantineTheme();

  const bankInFedSystem = (side, bank) =>
    System.getSystem() === "centralbank" &&
    side.instrument === "Reserves" &&
    bank.cardInfo.type !== "customer";

  if (bankInFedSystem(side, bank)) {
    return;
  }

  return (
    <div style={{ marginBottom: "1.5px" }}>
      <Text
        size="sm"
        weight="bold"
        align="left"
        color={theme.colors[textColor][9]}
      >
        {displaySettings.taccounts ? "" : `${side.instrument}`}
      </Text>
      {side.accounts.map((account, i) => {
        return (
          <div key={i}>
            {colorSettings.round && (
              <BalanceEachRound
                key={account.id}
                account={account}
                id={id}
                textColor={textColor}
              />
            )}
            {colorSettings.static && (
              <BalanceEachTurn
                key={account.id}
                account={account}
                id={id}
                textColor={textColor}
              />
            )}
            {colorSettings.flash && (
              <BalanceFlash
                key={account.id}
                account={account}
                id={id}
                textColor={textColor}
              />
            )}
            {colorSettings.off && (
              <BalanceOff
                key={account.id}
                account={account}
                textColor={textColor}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
